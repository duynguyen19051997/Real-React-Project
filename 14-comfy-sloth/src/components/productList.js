import React from "react";
import { BsListUl } from "react-icons/bs";
import { useProductsContext } from "../contexts/productContext";
import { Loading } from "./loading";
import { ProductItem } from "./productItem";
import classes from "./productList.module.css";

export const ProductList = (props) => {
  const { isProductLoading, products, isProductError } = useProductsContext();

  //TODO Check Error

  return (
    <section className={classes["products_container"]}>
      <div className={classes["arrange_container"]}>
        <button className={`btn`}>
          <BsListUl className={classes["arrange_icon"]} />
        </button>
        <p>
          <span>22</span> products
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
      {isProductLoading && <Loading />}
      {!isProductLoading && !isProductError && (
        <div className={classes["items_container"]}>
          {products.map((x) => (
            <ProductItem key={x.id} {...x} />
          ))}
        </div>
      )}
    </section>
  );
};
