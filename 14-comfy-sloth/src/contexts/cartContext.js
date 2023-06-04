import React, { useContext, useEffect, useReducer } from "react";
import { cartReducer } from "../reducers/cartReducer";
import {
  ADD_CART,
  DELETE_CART,
  UPDATE_CART,
  UPDATE_TOTAL_AMOUNT,
  UPDATE_TOTAL_ITEMS,
} from "../actions/cartActions";

const cartInitial = {
  cart: [],
  total_items: 0,
  total_amount: 0,
  shipping_fee: 534,
};

const CartContext = React.createContext();

export const CartProvider = (props) => {
  const [state, dispatch] = useReducer(cartReducer, cartInitial);

  const addCart = (single_product) => {
    dispatch({ type: ADD_CART, payload: { single_product: single_product } });
  };

  const updateCart = (id, color, amount) => {
    dispatch({
      type: UPDATE_CART,
      payload: { id: id, color: color, amount: amount },
    });
  };

  const deleteCart = (id, color) => {
    dispatch({ type: DELETE_CART, payload: { id: id, color: color } });
  };

  useEffect(() => {
    if (state.cart && state.cart.length > 0) {
      dispatch({ type: UPDATE_TOTAL_ITEMS });
      dispatch({ type: UPDATE_TOTAL_AMOUNT });
    }
  }, [state.cart]);

  return (
    <CartContext.Provider value={{ ...state, addCart, updateCart, deleteCart }}>
      {props.children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => {
  return useContext(CartContext);
};
