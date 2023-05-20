import React, { useContext, useEffect, useReducer } from "react";
import { filtersReducer } from "../reducers/filtersReducer";
import { useProductsContext } from "./productContext";
import {
  FILTER_PRODUCTS,
  LIST_VIEW_PRODUCTS,
  LOADING_PRODUCTS,
  PRICE_LOWEST,
  SORT_PRODUCTS,
  UPDATE_FILTERS,
  UPDATE_SORT,
} from "../actions/filterActions";

const FiltersContext = React.createContext();

const filterInitial = {
  all_products: [],
  filtered_products: [],
  is_list_view: false,
  sort_by: PRICE_LOWEST,
  filters: {
    text: "",
    company: "all",
    category: "all",
    color: "all",
    min_price: 0,
    max_price: 0,
    price: 0,
    free_shipping: false,
  },
};

export const FiltersProvider = (props) => {
  const { products } = useProductsContext();
  const [state, dispatch] = useReducer(filtersReducer, filterInitial);

  useEffect(() => {
    if (products) {
      dispatch({ type: LOADING_PRODUCTS, payload: { products: products } });
    }
  }, [products]);

  useEffect(() => {
    if (products) {
      dispatch({ type: SORT_PRODUCTS });
      dispatch({ type: FILTER_PRODUCTS });
    }
  }, [products, state.sort_by, state.filters]);

  const setListViewProduct = () => {
    dispatch({
      type: LIST_VIEW_PRODUCTS,
      payload: { isListView: !state.is_list_view },
    });
  };

  const updateSort = (sortBy) => {
    dispatch({ type: UPDATE_SORT, payload: { sortBy: sortBy } });
  };

  const updateFilters = (event) => {
    event.preventDefault();
    let name = event.target.name;
    let value = event.target.value;
    dispatch({ type: UPDATE_FILTERS, payload: { name: name, value: value } });
  };

  const clearFilters = () => {};

  return (
    <FiltersContext.Provider
      value={{
        ...state,
        setListViewProduct,
        updateSort,
        updateFilters,
        clearFilters,
      }}
    >
      {props.children}
    </FiltersContext.Provider>
  );
};

export const useFiltersContext = () => {
  return useContext(FiltersContext);
};
