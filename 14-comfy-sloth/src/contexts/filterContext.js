import React, { useContext, useEffect, useReducer } from "react";
import { filtersReducer } from "../reducers/filtersReducer";
import { useProductsContext } from "./productContext";
import { LIST_VIEW_PRODUCTS, LOADING_PRODUCTS } from "../actions/filterActions";

const FiltersContext = React.createContext();

const filterInitial = {
  all_products: [],
  filtered_products: [],
  is_list_view: false,
};

export const FiltersProvider = (props) => {
  const { products } = useProductsContext();
  const [state, dispatch] = useReducer(filtersReducer, filterInitial);

  useEffect(() => {
    if (products) {
      dispatch({ type: LOADING_PRODUCTS, payload: { products: products } });
    }
  }, [products]);

  const setListViewProduct = () => {
    dispatch({
      type: LIST_VIEW_PRODUCTS,
      payload: { isListView: !state.is_list_view },
    });
  };

  return (
    <FiltersContext.Provider value={{ ...state, setListViewProduct }}>
      {props.children}
    </FiltersContext.Provider>
  );
};

export const useFiltersContext = () => {
  return useContext(FiltersContext);
};
