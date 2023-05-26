import {
  ADD_CART,
  DELETE_CART,
  UPDATE_CART,
  UPDATE_TOTAL_AMOUNT,
  UPDATE_TOTAL_ITEMS,
} from "../actions/cartActions";

export const cartReducer = (state, action) => {
  let tempCart = [];
  let index = 0;
  let tempItem = {};

  switch (action.type) {
    case ADD_CART:
      tempItem = state.cart.find(
        (c) => c.id === action.payload.single_product.id
      );

      if (tempItem) {
        tempCart = state.cart;
        index = tempCart.findIndex(
          (x) =>
            x.id === action.payload.single_product.id &&
            x.color === action.payload.single.color
        );
        tempCart[index].color = action.payload.single_product.color;
        tempCart[index].amount = action.payload.single_product.amount;
      } else {
        tempCart.push({ ...action.payload.single_product });
      }
      return { ...state, cart: [...tempCart] };
    case UPDATE_CART:
      break;
    case DELETE_CART:
      break;
    case UPDATE_TOTAL_ITEMS:
      return { ...state };
    case UPDATE_TOTAL_AMOUNT:
      break;

    default:
      break;
  }

  return { ...state };
};
