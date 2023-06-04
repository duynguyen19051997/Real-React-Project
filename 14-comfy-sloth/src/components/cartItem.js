import React from "react";
import { Link } from "react-router-dom";
import { BsFillCircleFill } from "react-icons/bs";
import { FaMinus, FaPlus, FaTrashAlt } from "react-icons/fa";
import { formatPrice } from "../utils/helpers";
import classes from "./cartItem.module.css";
import { useCartContext } from "../contexts/cartContext";

export const CartItem = ({ cartItem }) => {
  const { deleteCart } = useCartContext();
  return (
    <React.Fragment>
      <article className={classes["cart_detail"]}>
        <div className={classes["item_info"]}>
          <Link to={`/products/${cartItem.id}`}>
            <img src={cartItem.image} alt={cartItem.name} />
          </Link>
          <div className={classes["item_content"]}>
            <h5>{cartItem.name}</h5>
            <p>
              Color: <BsFillCircleFill style={{ color: cartItem.color }} />
            </p>
          </div>
        </div>
        <p className={classes["price"]}>{formatPrice(cartItem.price)}</p>
        <div className={classes["quantity_action"]}>
          <button className={`btn`}>
            <FaMinus />
          </button>
          <h3>{cartItem.amount}</h3>
          <button className={`btn`}>
            <FaPlus />
          </button>
        </div>
        <p className={classes["subtotal"]}>
          {formatPrice(cartItem.price * cartItem.amount)}
        </p>
        <div className={classes["remove_action"]}>
          <button
            className={`btn ${classes["remove_btn"]}`}
            onClick={() => {
              deleteCart(cartItem.id, cartItem.color);
            }}
          >
            <FaTrashAlt />
          </button>
        </div>
      </article>
      <hr className={classes["line"]} />
    </React.Fragment>
  );
};
