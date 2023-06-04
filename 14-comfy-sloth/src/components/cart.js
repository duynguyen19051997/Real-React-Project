import React from "react";
import { Link } from "react-router-dom";
import { formatPrice } from "../utils/helpers";
import { useCartContext } from "../contexts/cartContext";
import { CartItem } from "./cartItem";
import classes from "./cart.module.css";

export const Cart = (props) => {
  const { cart } = useCartContext();

  return (
    <section className={classes["cart_container"]}>
      <div className={classes["cart_title"]}>
        <h5>Item</h5>
        <h5>Price</h5>
        <h5>Quantity</h5>
        <h5>Subtotal</h5>
      </div>
      <hr className={classes["line"]} />
      {cart &&
        cart.map((x) => <CartItem key={`${x.id}${x.color}`} cartItem={x} />)}
      <div className={classes["shopping_action"]}>
        <Link to={"/products"} className={`btn ${classes["continue_btn"]}`}>
          Continue Shopping
        </Link>
        <button className={`btn ${classes["clear_btn"]}`}>
          Clear Shopping Cart
        </button>
      </div>
      <div className={classes["bill_center"]}>
        <div className={classes["bill_area"]}>
          <div className={classes["bill"]}>
            <h4>
              subtotal: <span>{formatPrice(3099)}</span>
            </h4>
            <p>
              shipping fee: <span>{formatPrice(3099)}</span>
            </p>
            <hr className={classes["line"]} />
            <h3>
              order total: <span>{formatPrice(3099)}</span>
            </h3>
          </div>
          <button className={`btn ${classes["login_btn"]}`}>Login</button>
        </div>
      </div>
    </section>
  );
};
