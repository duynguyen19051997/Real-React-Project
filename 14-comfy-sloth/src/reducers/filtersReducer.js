import { LOADING_PRODUCTS, LIST_VIEW_PRODUCTS } from "../actions/filterActions";

export const filtersReducer = (state, action) => {
  switch (action.type) {
    case LOADING_PRODUCTS:
      return {
        ...state,
        all_products: action.payload.products,
        filtered_products: action.payload.products,
      };

    case LIST_VIEW_PRODUCTS:
      return {
        ...state,
        is_list_view: action.payload.isListView,
      };

    default:
      return { ...state };
  }
};
