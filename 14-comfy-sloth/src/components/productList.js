import React from "react";
import { BsListUl } from "react-icons/bs";
import { useProductsContext } from "../contexts/productContext";
import { Error } from "./error";
import { Loading } from "./loading";
import { ProductItem } from "./productItem";
import classes from "./productList.module.css";

export const ProductList = (props) => {
  const { isProductLoading, products, isProductError, productErrorMessage } =
    useProductsContext();

  if (isProductLoading) {
    return <Loading />;
  }

  if (isProductError) {
    return <Error message={productErrorMessage} />;
  }

  return (
    <section className={classes["products_container"]}>
      <div className={classes["arrange_container"]}>
        <button className={`btn`}>
          <BsListUl className={classes["arrange_icon"]} />
        </button>
        <p>
          <span>{products.length}</span> products
        </p>
        <hr className={classes["arrange_line"]} />
        <p>sort by</p>
        <select>
          <option>Price (lowest)</option>
          <option>Price (highest)</option>
          <option>Name (a-z)</option>
          <option>Name (z-a)</option>
        </select>
      </div>
      <div className={classes["items_container"]}>
        {products.map((x) => (
          <ProductItem key={x.id} {...x} />
        ))}
      </div>
    </section>
  );
};
