import React from "react";
import { useCartContext } from "../Context/cartContext";

import classes from "./cart.module.css";
import { Item } from "./item";

export const Cart = (props) => {
  const { items, total, clearAllItems } = useCartContext();
  const clearAllHandle = (e) => {
    e.preventDefault();
    clearAllItems();
  };
  return (
    <section className={classes["cart_area"]}>
      <div className={classes["header"]}>
        <h2>Your Cart</h2>
      </div>
      {items &&
        items.length > 0 &&
        items.map((item) => <Item key={item.id} {...item} />)}
      {items && items.length === 0 && (
        <h3 style={{ textAlign: "center", letterSpacing: "3px" }}>
          Nothing in your cart
        </h3>
      )}
      {total > 0 && (
        <div className={classes["footer"]}>
          <hr />
          <div className={classes["total_area"]}>
            <h4 className={classes["total"]}>Total</h4>
            <h4 className={classes["total"]}>${total}</h4>
          </div>
          <button className={classes["btn"]} onClick={clearAllHandle}>
            clear cart
          </button>
        </div>
      )}
    </section>
  );
};
