import React, { useCallback, useContext, useEffect, useReducer } from "react";
import { filtersReducer } from "../reducers/filtersReducer";
import { useProductsContext } from "./productContext";
import { LOADING_PRODUCTS } from "../actions/filterActions";

const FiltersContext = React.createContext();

const filterInitial = {
  all_products: [],
  filtered_products: [],
};

export const FiltersProvider = (props) => {
  const { products } = useProductsContext();
  const [state, dispatch] = useReducer(filtersReducer, filterInitial);

  useEffect(() => {
    if (products) {
      dispatch({ type: LOADING_PRODUCTS, payload: { products: products } });
    }
  }, [products]);

  return (
    <FiltersContext.Provider value={{ ...state }}>
      {props.children}
    </FiltersContext.Provider>
  );
};

export const useFiltersContext = () => {
  return useContext(FiltersContext);
};
