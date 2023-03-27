import React, { useContext, useReducer } from "react";
import {
  GET_PRODUCTS,
  GET_SINGLE_PRODUCT,
  LOADING_PRODUCTS_BEGIN,
  LOADING_PRODUCTS_END,
} from "../actions/productActions";
import { productsReducer } from "../reducers/productsReducer";

const productsInitial = {
  isProductLoading: false,
  isProductError: false,
  productErrorMessage: "",
};

const ProductsContext = React.createContext();

export const ProductsProvider = (props) => {
  const [state, dispatch] = useReducer(productsReducer, productsInitial);

  const getProducts = () => {
    dispatch({ type: LOADING_PRODUCTS_BEGIN });
    dispatch({ type: GET_PRODUCTS });
    dispatch({ type: LOADING_PRODUCTS_END });
  };

  const getSingleProduct = (productId) => {
    dispatch({ type: LOADING_PRODUCTS_BEGIN });
    dispatch({ type: GET_SINGLE_PRODUCT, payload: { productId } });
    dispatch({ type: LOADING_PRODUCTS_END });
  };

  return (
    <ProductsContext.Provider
      value={{ ...state, getProducts, getSingleProduct }}
    >
      {props.children}
    </ProductsContext.Provider>
  );
};

export const useProductsContext = () => {
  return useContext(ProductsContext);
};
