import { LOADING_PRODUCTS } from "../actions/filterActions";

export const filtersReducer = (state, action) => {
  switch (action.type) {
    case LOADING_PRODUCTS:
      return {
        ...state,
        all_products: action.payload.products,
        filtered_products: action.payload.products,
      };

    default:
      return { ...state };
  }
};
