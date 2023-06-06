import {
  ADD_CART,
  CLEAR_CART,
  DELETE_CART,
  UPDATE_CART,
  UPDATE_TOTAL_AMOUNT,
  UPDATE_TOTAL_ITEMS,
} from "../actions/cartActions";

export const cartReducer = (state, action) => {
  switch (action.type) {
    case ADD_CART:
      const { id, name, color, amount, price, shipping, stock } =
        action.payload.single_product;
      const addExistItem = state.cart.find((c) => c.cart_id === id + color);

      if (addExistItem) {
        const newCart = state.cart.map((x) => {
          if (x.cart_id === id + color) {
            let newAmount = x.amount + amount;
            if (newAmount > x.max_amount) {
              newAmount = x.max_amount;
            }
            return { ...x, amount: newAmount };
          } else {
            return x;
          }
        });
        return { ...state, cart: newCart };
      } else {
        const newItem = {
          product_id: id,
          cart_id: id + color,
          name: name,
          color: color,
          amount: amount,
          price: price,
          image: action.payload.single_product.images[0].url,
          free_shipping: shipping,
          max_amount: stock,
        };
        return { ...state, cart: [...state.cart, newItem] };
      }
    case UPDATE_CART:
      break;
    case DELETE_CART:
      const deleteTempCart = state.cart.filter(
        (c) => c.cart_id !== action.payload.cart_id
      );
      return { ...state, cart: deleteTempCart };
    case CLEAR_CART:
      return {
        cart: [],
        total_items: 0,
        total_amount: 0,
        shipping_fee: 534,
      };
    case UPDATE_TOTAL_ITEMS:
      return { ...state };
    case UPDATE_TOTAL_AMOUNT:
      return { ...state };
    default:
      return { ...state };
  }
};
