import React from "react";
import { Link } from "react-router-dom";
import { ProductItem } from "./productItem";

import classes from "./featuredProducts.module.css";
import { useProductsContext } from "../contexts/productContext";

export const FeaturedProducts = (props) => {
  const { featured_products } = useProductsContext();

  //TODO Check Error

  return (
    <section className={classes["featured_products_container"]}>
      <h2>featured products</h2>
      <hr className={classes["line"]} />
      <div className={classes["featured_products_list"]}>
        <div className={classes["featured_products_center"]}>
          {featured_products &&
            featured_products.map((x) => <ProductItem key={x.id} {...x} />)}
        </div>
        <Link to={"/products"} className={`btn ${classes["btn_all_products"]}`}>
          all products
        </Link>
      </div>
    </section>
  );
};
