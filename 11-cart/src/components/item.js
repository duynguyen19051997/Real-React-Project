import React from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { useCartContext } from "../Context/cartContext";

import classes from "./item.module.css";

export const Item = (props) => {
  const { removeItem, increaseItem, decreaseItem } = useCartContext();

  const removeHandle = (e) => {
    e.preventDefault();
    removeItem(props.id);
  };

  const increaseHandle = (e) => {
    e.preventDefault();
    increaseItem(props.id);
  };

  const decreaseHandle = (e) => {
    e.preventDefault();
    decreaseItem(props.id);
  };

  return (
    <article className={classes["item_area"]}>
      <div className={classes["image_area"]}>
        <img src={props.img} alt={props.title} />
      </div>
      <div className={classes["content_area"]}>
        <h4>{props.title}</h4>
        <p>${props.price}</p>
        <button className={classes["btn_remove"]} onClick={removeHandle}>
          Remove
        </button>
      </div>
      <div className={classes["action_area"]}>
        <button className={classes["btn"]} onClick={increaseHandle}>
          <FaAngleUp className={classes["icon"]} />
        </button>
        <p>{props.amount}</p>
        <button className={classes["btn"]} onClick={decreaseHandle}>
          <FaAngleDown className={classes["icon"]} />
        </button>
      </div>
    </article>
  );
};
