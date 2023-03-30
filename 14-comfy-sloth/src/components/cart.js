import React from "react";
import { Link } from "react-router-dom";
import { FaMinus, FaPlus, FaTrashAlt } from "react-icons/fa";
import { BsFillCircleFill } from "react-icons/bs";

import classes from "./cart.module.css";
import { formatPrice } from "../utils/helpers";

export const Cart = (props) => {
  return (
    <section className={classes["cart_container"]}>
      <div className={classes["cart_title"]}>
        <h5>Item</h5>
        <h5>Price</h5>
        <h5>Quantity</h5>
        <h5>Subtotal</h5>
      </div>
      <hr className={classes["line"]} />
      <article className={classes["cart_detail"]}>
        <div className={classes["item_info"]}>
          <img src="https://images2.imgbox.com/8b/13/XwC9OolK_o.jpeg" alt="" />
          <div className={classes["item_content"]}>
            <h5>modern poster</h5>
            <p>
              Color: <BsFillCircleFill style={{ color: "black" }} />
            </p>
          </div>
        </div>
        <p className={classes["price"]}>{formatPrice(3099)}</p>
        <div className={classes["quantity_action"]}>
          <button className={`btn`}>
            <FaMinus />
          </button>
          <h3>1</h3>
          <button className={`btn`}>
            <FaPlus />
          </button>
        </div>
        <p className={classes["subtotal"]}>{formatPrice(3099)}</p>
        <div className={classes["remove_action"]}>
          <button className={`btn ${classes["remove_btn"]}`}>
            <FaTrashAlt />
          </button>
        </div>
      </article>
      <hr className={classes["line"]} />
      <article className={classes["cart_detail"]}>
        <div className={classes["item_info"]}>
          <img src="https://images2.imgbox.com/8b/13/XwC9OolK_o.jpeg" alt="" />
          <div className={classes["item_content"]}>
            <h5>modern poster</h5>
            <p>
              Color: <BsFillCircleFill style={{ color: "black" }} />
            </p>
          </div>
        </div>
        <p className={classes["price"]}>{formatPrice(3099)}</p>
        <div className={classes["quantity_action"]}>
          <button className={`btn`}>
            <FaMinus />
          </button>
          <h3>1</h3>
          <button className={`btn`}>
            <FaPlus />
          </button>
        </div>
        <p className={classes["subtotal"]}>{formatPrice(3099)}</p>
        <div className={classes["remove_action"]}>
          <button className={`btn ${classes["remove_btn"]}`}>
            <FaTrashAlt />
          </button>
        </div>
      </article>
      <hr className={classes["line"]} />
      <article className={classes["cart_detail"]}>
        <div className={classes["item_info"]}>
          <img src="https://images2.imgbox.com/8b/13/XwC9OolK_o.jpeg" alt="" />
          <div className={classes["item_content"]}>
            <h5>modern poster</h5>
            <p>
              Color: <BsFillCircleFill style={{ color: "black" }} />
            </p>
          </div>
        </div>
        <p className={classes["price"]}>{formatPrice(3099)}</p>
        <div className={classes["quantity_action"]}>
          <button className={`btn`}>
            <FaMinus />
          </button>
          <h3>1</h3>
          <button className={`btn`}>
            <FaPlus />
          </button>
        </div>
        <p className={classes["subtotal"]}>{formatPrice(3099)}</p>
        <div className={classes["remove_action"]}>
          <button className={`btn ${classes["remove_btn"]}`}>
            <FaTrashAlt />
          </button>
        </div>
      </article>
      <hr className={classes["line"]} />
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
