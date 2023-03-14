import React from "react";

import classes from "./featuredProducts.module.css";

export const FeaturedProducts = (props) => {
  return (
    <section className={classes["featured_products_container"]}>
      <h2>featured products</h2>
      <hr className={classes["line"]} />
      <div className={classes["featured_products_list"]}>
        <h4>Featured Product Items</h4>
      </div>
    </section>
  );
};
