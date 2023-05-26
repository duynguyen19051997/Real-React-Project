import React from "react";
import { Link } from "react-router-dom";
import { FaMinus, FaPlus, FaTrashAlt } from "react-icons/fa";
import { BsFillCircleFill } from "react-icons/bs";

import classes from "./cart.module.css";
import { formatPrice } from "../utils/helpers";
import { useCartContext } from "../contexts/cartContext";

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
        cart.map((x) => {
          return (
            <React.Fragment>
              <article className={classes["cart_detail"]}>
                <div className={classes["item_info"]}>
                  <img src={x.image} alt={x.name} />
                  <div className={classes["item_content"]}>
                    <h5>modern poster</h5>
                    <p>
                      Color: <BsFillCircleFill style={{ color: x.color }} />
                    </p>
                  </div>
                </div>
                <p className={classes["price"]}>{formatPrice(x.price)}</p>
                <div className={classes["quantity_action"]}>
                  <button className={`btn`}>
                    <FaMinus />
                  </button>
                  <h3>{x.amount}</h3>
                  <button className={`btn`}>
                    <FaPlus />
                  </button>
                </div>
                <p className={classes["subtotal"]}>
                  {formatPrice(x.price * x.amount)}
                </p>
                <div className={classes["remove_action"]}>
                  <button className={`btn ${classes["remove_btn"]}`}>
                    <FaTrashAlt />
                  </button>
                </div>
              </article>
              <hr className={classes["line"]} />
            </React.Fragment>
          );
        })}
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
