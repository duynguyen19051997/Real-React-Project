import React, { useContext, useEffect, useReducer } from "react";
import { filtersReducer } from "../reducers/filtersReducer";
import { useProductsContext } from "./productContext";
import {
  LIST_VIEW_PRODUCTS,
  LOADING_PRODUCTS,
  PRICE_LOWEST,
  SORT_PRODUCTS,
  UPDATE_SORT,
} from "../actions/filterActions";

const FiltersContext = React.createContext();

const filterInitial = {
  all_products: [],
  filtered_products: [],
  is_list_view: false,
  sort_by: PRICE_LOWEST,
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
    }
  }, [products, state.sort_by]);

  const setListViewProduct = () => {
    dispatch({
      type: LIST_VIEW_PRODUCTS,
      payload: { isListView: !state.is_list_view },
    });
  };

  const updateSort = (sortBy) => {
    dispatch({ type: UPDATE_SORT, payload: { sortBy: sortBy } });
  };

  return (
    <FiltersContext.Provider
      value={{ ...state, setListViewProduct, updateSort }}
    >
      {props.children}
    </FiltersContext.Provider>
  );
};

export const useFiltersContext = () => {
  return useContext(FiltersContext);
};
