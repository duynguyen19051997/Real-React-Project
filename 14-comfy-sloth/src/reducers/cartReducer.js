import {
  ADD_CART,
  DELETE_CART,
  UPDATE_CART,
  UPDATE_TOTAL_AMOUNT,
  UPDATE_TOTAL_ITEMS,
} from "../actions/cartActions";

export const cartReducer = (state, action) => {
  switch (action.type) {
    case ADD_CART:
      const { id, name, color, amount, price, free_shipping, max_amount } =
        action.payload.single_product;
      const tempItem = state.cart.find((c) => c.id === id && c.color === color);

      if (tempItem) {
        const tempCart = state.cart.map((x) => {
          if (x.id === id && x.color === color) {
            let newAmount = x.amount + amount;
            if (newAmount > max_amount) {
              newAmount = max_amount;
            }
            return { ...x, amount: newAmount };
          } else {
            return x;
          }
        });
        return { ...state, cart: [...tempCart] };
      } else {
        const newItem = {
          id: id,
          name: name,
          color: color,
          amount: amount,
          price: price,
          image: action.payload.single_product.images[0].url,
          free_shipping: free_shipping,
          max_amount: max_amount,
        };
        return { ...state, cart: [...state.cart, newItem] };
      }
    case UPDATE_CART:
      break;
    case DELETE_CART:
      break;
    case UPDATE_TOTAL_ITEMS:
      return { ...state };
    case UPDATE_TOTAL_AMOUNT:
      return { ...state };
    default:
      return { ...state };
  }
};
