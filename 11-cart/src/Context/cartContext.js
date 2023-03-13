import React, { useReducer, useContext, useEffect } from "react";
import { cartData } from "../data";
import {
  CLEAR_ALL_ITEMS,
  DECREASE_ITEM,
  GET_ALL_ITEMS,
  GET_TOTAL_ITEMS,
  INCREASE_ITEM,
  LOADING_ITEM,
  REMOVE_ITEM,
} from "./action";
import { reducer } from "./reducer";

const url = "https://course-api.com/react-useReducer-cart-project";
const CartContext = React.createContext();

const initialCart = {
  isLoading: false,
  items: cartData,
  total: 4196,
  amount: 4,
};

const CartProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialCart);

  const removeItem = (id) => {
    dispatch({ type: REMOVE_ITEM, payload: { id: id } });
  };
  const increaseItem = (id) => {
    dispatch({ type: INCREASE_ITEM, payload: { id: id } });
  };
  const decreaseItem = (id) => {
    dispatch({ type: DECREASE_ITEM, payload: { id: id } });
  };
  const clearAllItems = () => {
    dispatch({ type: CLEAR_ALL_ITEMS });
  };
  // const fetchItems = async () => {
  //   dispatch({ type: LOADING_ITEM });
  //   const result = await fetch(url);
  //   const items = await result.json();
  //   dispatch({ type: GET_ALL_ITEMS, payload: { items: items } });
  // };
  // useEffect(() => {
  //   fetchItems();
  // }, []);
  useEffect(() => {
    dispatch({ type: GET_TOTAL_ITEMS });
  }, [state.items]);

  return (
    <CartContext.Provider
      value={{
        ...state,
        removeItem,
        increaseItem,
        decreaseItem,
        clearAllItems,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => {
  return useContext(CartContext);
};

export { CartContext, CartProvider };
