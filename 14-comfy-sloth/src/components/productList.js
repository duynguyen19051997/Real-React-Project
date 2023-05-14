import React, { useState } from "react";
import { BsListUl, BsGrid3X2Gap } from "react-icons/bs";
import { useProductsContext } from "../contexts/productContext";
import { Error } from "./error";
import { Loading } from "./loading";
import { ProductItem } from "./productItem";
import classes from "./productList.module.css";
import { useFiltersContext } from "../contexts/filterContext";
import { ProductItemListView } from "./productItemListView";

export const ProductList = (props) => {
  const { isProductLoading, isProductError, productErrorMessage } =
    useProductsContext();

  const { filtered_products } = useFiltersContext();

  const [isListView, setIsListView] = useState(0);

  if (isProductLoading) {
    return <Loading />;
  }

  if (isProductError) {
    return <Error message={productErrorMessage} />;
  }

  return (
    <section className={classes["products_container"]}>
      <div className={classes["arrange_container"]}>
        {isListView ? (
          <button
            className={`btn`}
            onClick={(event) => {
              event.preventDefault();
              setIsListView(!isListView);
            }}
          >
            <BsListUl className={classes["arrange_icon"]} />
          </button>
        ) : (
          <button
            className={`btn`}
            onClick={() => {
              setIsListView(!isListView);
            }}
          >
            <BsGrid3X2Gap className={classes["arrange_icon"]} />
          </button>
        )}
        <p>
          <span>{filtered_products.length}</span> products
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
      {isListView ? (
        <div className={classes["items_list_view_container"]}>
          {filtered_products.map((x) => (
            <ProductItemListView key={x.id} {...x} />
          ))}
        </div>
      ) : (
        <div className={classes["items_container"]}>
          {filtered_products.map((x) => (
            <ProductItem key={x.id} {...x} />
          ))}
        </div>
      )}
    </section>
  );
};
