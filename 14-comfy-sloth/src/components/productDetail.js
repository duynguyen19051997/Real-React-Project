import React, { useCallback, useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import {
  FaMinus,
  FaPlus,
  FaRegStar,
  FaStar,
  FaStarHalfAlt,
} from "react-icons/fa";
import { Loading } from "./loading";
import { Error } from "./error";
import classes from "./productDetail.module.css";
import { formatPrice } from "../utils/helpers";
import axios from "axios";
import { single_product_url } from "../utils/constants";

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
      });
  }, [productId]);

  useEffect(() => {
    getSingleProduct();
  }, [getSingleProduct]);

  if (isSingleProductLoading) {
    return <Loading />;
  }

  if (isSingleProductError) {
    return <Error message={singleProductErrorMessage} />;
  }

  return (
    <section className={classes["product_detail_container"]}>
      <div className={classes["image_container"]}>
        <div className={classes["main_image"]}>
          <img src="https://images2.imgbox.com/1b/ea/t89LageS_o.jpeg" alt="" />
        </div>
        <div className={classes["other_image"]}>
          <img src="https://images2.imgbox.com/8b/13/XwC9OolK_o.jpeg" alt="" />
          <img src="https://images2.imgbox.com/da/bb/iXlbK9A6_o.jpeg" alt="" />
          <img src="https://images2.imgbox.com/6d/47/A11k7xmf_o.jpeg" alt="" />
          <img src="https://images2.imgbox.com/ca/f3/rPR1K8nP_o.jpeg" alt="" />
          <img
            src="https://images2.imgbox.com/1b/ea/t89LageS_o.jpeg"
            className={classes["img_active"]}
            alt=""
          />
        </div>
      </div>
      <div className={classes["content_container"]}>
        <h2>{singleProduct.name}</h2>
        <div className={classes["feed_back"]}>
          <FaStar className={classes["start_icon"]} />
          <FaStar className={classes["start_icon"]} />
          <FaStarHalfAlt className={classes["start_icon"]} />
          <FaRegStar className={classes["start_icon"]} />
          <FaRegStar className={classes["start_icon"]} />
          <p>(100 customer reviews)</p>
        </div>
        <h4>{formatPrice(singleProduct.price)}</h4>
        <p>{singleProduct.description}</p>
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
          <button className={`btn ${classes["btn_detail"]}`}>
            Add to cart
          </button>
          <Link to="/products" className={`btn ${classes["btn_detail"]}`}>
            Back to products
          </Link>
        </div>
      </div>
    </section>
  );
};
