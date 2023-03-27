import {
  GET_PRODUCTS,
  GET_SINGLE_PRODUCT,
  LOADING_PRODUCTS_BEGIN,
  LOADING_PRODUCTS_END,
} from "../actions/productActions";

export const productsReducer = (state, action) => {
  switch (action.type) {
    case LOADING_PRODUCTS_BEGIN:
      return { ...state, isProductLoading: true };
    case LOADING_PRODUCTS_END:
      return { ...state, isProductLoading: false };
    case GET_PRODUCTS:
      break;
    case GET_SINGLE_PRODUCT:
      break;

    default:
      return state;
  }
};
