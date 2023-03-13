import {
  CLEAR_ALL_ITEMS,
  DECREASE_ITEM,
  GET_ALL_ITEMS,
  GET_TOTAL_ITEMS,
  INCREASE_ITEM,
  LOADING_ITEM,
  REMOVE_ITEM,
} from "./action";

export const reducer = (state, action) => {
  let updateItems = [];

  switch (action.type) {
    case REMOVE_ITEM:
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload.id),
      };
    case INCREASE_ITEM:
      updateItems = state.items.map((cartItem) => {
        if (cartItem.id === action.payload.id) {
          return { ...cartItem, amount: cartItem.amount + 1 };
        }
        return cartItem;
      });
      return { ...state, items: updateItems };
    case DECREASE_ITEM:
      updateItems = state.items
        .map((cartItem) => {
          if (cartItem.id === action.payload.id) {
            return {
              ...cartItem,
              amount: cartItem.amount - 1,
            };
          }
          return cartItem;
        })
        .filter((cartItem) => cartItem.amount !== 0);
      return { ...state, items: updateItems };
    case CLEAR_ALL_ITEMS:
      return { ...state, items: [], total: 0, amount: 0 };
    case LOADING_ITEM:
      return { ...state, isLoading: true };
    case GET_ALL_ITEMS:
      updateItems = action.payload.items;
      return { ...state, items: updateItems, isLoading: false };
    case GET_TOTAL_ITEMS:
      let { total, amount } = state.items.reduce(
        (result, item) => {
          const { amount, price } = item;
          result.total += amount * price;
          result.amount += amount;
          return result;
        },
        {
          total: 0,
          amount: 0,
        }
      );
      return { ...state, total: total, amount: amount };
    default:
      break;
  }
};
