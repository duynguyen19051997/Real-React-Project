import React from "react";
import { Link } from "react-router-dom";
import { BsFillCartFill, BsFillPersonPlusFill } from "react-icons/bs";
import comfy_sloth from "../images/comfy_sloth.svg";
import classes from "./header.module.css";

export const Header = (props) => {
  return (
    <section className={classes["header"]}>
      <div className={classes["header_center"]}>
        <div className={classes["logo"]}>
          <img src={comfy_sloth} alt="" />
        </div>
        <div className={classes["page"]}>
          <Link to={"/"} className={classes["btn_page"]}>
            Home
          </Link>
          <Link to={"/products"} className={`${classes["btn_page"]}`}>
            Products
          </Link>
          <Link to={"/about"} className={classes["btn_page"]}>
            About
          </Link>
        </div>
        <div className={classes["action"]}>
          <Link to={"/cart"} className={`${classes["btn_action"]}`}>
            Cart
            <BsFillCartFill className={classes["icon"]} />
            <span className={classes["cart_value"]}>100</span>
          </Link>
          <button className={classes["btn_action"]}>
            Login
            <BsFillPersonPlusFill className={classes["icon"]} />
          </button>
        </div>
      </div>
    </section>
  );
};
