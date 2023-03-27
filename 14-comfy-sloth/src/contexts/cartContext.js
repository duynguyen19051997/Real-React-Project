import React, { useContext } from "react";

const cartInitial = {};

const CartContext = React.createContext();

export const CartProvider = (props) => {
  return (
    <CartContext.Provider value={cartInitial}>
      {props.children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => {
  return useContext(CartContext);
};
