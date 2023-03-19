import React from "react";
import { Link } from "react-router-dom";
import {
  FaMinus,
  FaPlus,
  FaRegStar,
  FaStar,
  FaStarHalfAlt,
} from "react-icons/fa";

import classes from "./productDetail.module.css";

export const ProductDetail = (props) => {
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
        <h2>modern poster</h2>
        <div className={classes["feed_back"]}>
          <FaStar className={classes["start_icon"]} />
          <FaStar className={classes["start_icon"]} />
          <FaStarHalfAlt className={classes["start_icon"]} />
          <FaRegStar className={classes["start_icon"]} />
          <FaRegStar className={classes["start_icon"]} />
          <p>(100 customer reviews)</p>
        </div>
        <h4>$30.99</h4>
        <p>
          Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore
          etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat,
          authentic chillwave trust fund. Viral typewriter fingerstache
          pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch
          pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk
          microdosing gochujang live-edge
        </p>
        <table>
          <tbody>
            <tr>
              <td className={classes["label"]}>Available</td>
              <td>In stock</td>
            </tr>
            <tr>
              <td className={classes["label"]}>SKU</td>
              <td>recQ0fMd8T0Vk211E</td>
            </tr>
            <tr>
              <td className={classes["label"]}>Brand</td>
              <td>liddy</td>
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
