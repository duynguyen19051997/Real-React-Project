import React, { useCallback, useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import {
  FaMinus,
  FaPlus,
  FaRegStar,
  FaStar,
  FaStarHalfAlt,
} from "react-icons/fa";
import { Loading } from "./loading";
import { Error } from "./error";
import { ProductImages } from "./productImages";
import { formatPrice } from "../utils/helpers";
import { single_product_url } from "../utils/constants";

import classes from "./productDetail.module.css";

export const ProductDetail = (props) => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const [isSingleProductLoading, setIsSingleProductLoading] = useState(false);
  const [isSingleProductError, setIsSingleProductError] = useState(false);
  const [singleProductErrorMessage, setSingleProductErrorMessage] =
    useState("");
  const [singleProduct, setSingleProduct] = useState({});

  const getSingleProduct = useCallback(() => {
    setIsSingleProductLoading(true);
    axios
      .get(`${single_product_url}${productId}`)
      .then((response) => {
        setSingleProduct(response.data);
        setIsSingleProductLoading(false);
      })
      .catch((err) => {
        setIsSingleProductError(true);
        setSingleProductErrorMessage(err.message);
        setIsSingleProductLoading(false);
      });
  }, [productId]);

  useEffect(() => {
    getSingleProduct();
  }, [getSingleProduct]);

  useEffect(() => {
    if (isSingleProductError) {
      setTimeout(() => {
        navigate("/");
      }, 3000);
    }
  }, [isSingleProductError, navigate]);

  if (isSingleProductLoading) {
    return <Loading />;
  }

  if (isSingleProductError) {
    return <Error message={singleProductErrorMessage} />;
  }

  return (
    <section className={classes["product_detail_container"]}>
      <ProductImages images={singleProduct.images} />
      <div className={classes["content_container"]}>
        <h2>{singleProduct.name}</h2>
        <div className={classes["feed_back"]}>
          {/* TODO: Coding Stars */}
          <FaStar className={classes["start_icon"]} />
          <FaStar className={classes["start_icon"]} />
          <FaStarHalfAlt className={classes["start_icon"]} />
          <FaRegStar className={classes["start_icon"]} />
          <FaRegStar className={classes["start_icon"]} />
          <p>({singleProduct.reviews} customer reviews)</p>
        </div>
        <h4>{formatPrice(singleProduct.price)}</h4>
        <p>{singleProduct.description}</p>
        <hr className={classes["detail_line"]} />
        <table>
          <tbody>
            <tr>
              <td className={classes["label"]}>Available</td>
              <td>{singleProduct.stock > 0 ? "In stock" : "Out of stock"}</td>
            </tr>
            <tr>
              <td className={classes["label"]}>SKU</td>
              <td>{singleProduct.id}</td>
            </tr>
            <tr>
              <td className={classes["label"]}>Brand</td>
              <td>{singleProduct.company}</td>
            </tr>
            <tr>
              {/* TODO: Coding Color */}
              <td className={classes["label"]}>Colors</td>
              <td>Black</td>
            </tr>
          </tbody>
        </table>
        <hr className={classes["detail_line"]} />
        <div className={classes["action"]}>
          <div className={classes["action_amount"]}>
            <button className={`btn`}>
              <FaMinus />
            </button>
            <h3>1</h3>
            <button className={`btn`}>
              <FaPlus />
            </button>
          </div>
          {singleProduct.stock > 0 && (
            <button className={`btn ${classes["btn_detail"]}`}>
              Add to cart
            </button>
          )}
          <Link to="/products" className={`btn ${classes["btn_detail"]}`}>
            Back to products
          </Link>
        </div>
      </div>
    </section>
  );
};
