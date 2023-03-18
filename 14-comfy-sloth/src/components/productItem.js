import React from "react";

import { BsSearch } from "react-icons/bs";

import classes from "./productItem.module.css";

export const ProductItem = (props) => {
  return (
    <article className={classes["featured_product_item_container"]}>
      <div className={classes["img_container"]}>
        <img src="https://images2.imgbox.com/cb/69/cQ29pV1x_o.jpeg" alt="" />
        <div className={classes["overlay"]}>
          <button className={classes["btn_icon_search"]}>
            <BsSearch className={classes["search_icon"]} />
          </button>
        </div>
      </div>
      <div className={classes["content_container"]}>
        <h5>entertainment center</h5>
        <p>$599.99</p>
      </div>
    </article>
  );
};
