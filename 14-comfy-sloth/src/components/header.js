import React from "react";
import { BsFillCartFill, BsFillPersonPlusFill } from "react-icons/bs";
import comfy_sloth from "../comfy_sloth.svg";
import classes from "./header.module.css";

export const Header = (props) => {
  return (
    <section className={classes["header"]}>
      <div className={classes["header_center"]}>
        <div className={classes["logo"]}>
          <img src={comfy_sloth} alt="" />
        </div>
        <div className={classes["page"]}>
          <button className={classes["btn_page"]}>Home</button>
          <button className={classes["btn_page"]}>Product</button>
          <button className={classes["btn_page"]}>About</button>
        </div>
        <div className={classes["action"]}>
          <button className={classes["btn_action"]}>
            Cart
            <BsFillCartFill className={classes["icon"]} />
            <span className={classes["cart_value"]}>100</span>
          </button>
          <button className={classes["btn_action"]}>
            Login
            <BsFillPersonPlusFill className={classes["icon"]} />
          </button>
        </div>
      </div>
    </section>
  );
};
