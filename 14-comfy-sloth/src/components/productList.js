import React from "react";
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

  const { filtered_products, is_list_view, setListViewProduct } =
    useFiltersContext();

  if (isProductLoading) {
    return <Loading />;
  }

  if (isProductError) {
    return <Error message={productErrorMessage} />;
  }

  const changeListViewHandle = (event) => {
    event.preventDefault();
    setListViewProduct();
  };

  return (
    <section className={classes["products_container"]}>
      <div className={classes["arrange_container"]}>
        {is_list_view ? (
          <button className={`btn`} onClick={changeListViewHandle}>
            <BsListUl className={classes["arrange_icon"]} />
          </button>
        ) : (
          <button className={`btn`} onClick={changeListViewHandle}>
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
      {is_list_view ? (
        <div className={classes["items_list_view_container"]}>
          {filtered_products.length > 0 &&
            filtered_products.map((x) => (
              <ProductItemListView key={x.id} {...x} />
            ))}
        </div>
      ) : (
        <div className={classes["items_container"]}>
          {filtered_products.length > 0 &&
            filtered_products.map((x) => <ProductItem key={x.id} {...x} />)}
        </div>
      )}
    </section>
  );
};
