import React from "react";
import { FeaturedProductItem } from "./featuredProductItem";

import classes from "./featuredProducts.module.css";

export const FeaturedProducts = (props) => {
  return (
    <section className={classes["featured_products_container"]}>
      <h2>featured products</h2>
      <hr className={classes["line"]} />
      <div className={classes["featured_products_list"]}>
        <div className={classes["featured_products_center"]}>
          <FeaturedProductItem />
          <FeaturedProductItem />
          <FeaturedProductItem />
        </div>
        <button className={`btn ${classes["btn_all_products"]}`}>
          all products
        </button>
      </div>
    </section>
  );
};
