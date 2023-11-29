import React from "react";
import { AiOutlineBlock } from "react-icons/ai";
import { GiPositionMarker } from "react-icons/gi";
import { CiLink } from "react-icons/ci";
import classes from "../assets/css/Users.module.css";

export const User = () => {
  return (
    <article className={classes["users_container"]}>
      <h2>User</h2>
      <div className={classes["user_header"]}>
        <div className={classes["user_info"]}>
          <img
            src="https://avatars.githubusercontent.com/u/42133389?v=4"
            alt=""
          />
          <div className={classes["user_name"]}>
            <h3>John Smilga</h3>
            <p>@john_smilga</p>
          </div>
        </div>
        <button className={`btn ${classes["btn_follow"]}`}>Follow</button>
      </div>
      <div className={classes["user_detail"]}>
        <h4>Creator of Coding Addict</h4>
        <div className={classes["detail"]}>
          <AiOutlineBlock className={classes["user_icon"]} />
          <p>Coding Addict</p>
        </div>
        <div className={classes["detail"]}>
          <GiPositionMarker className={classes["user_icon"]} />
          <p>Sarasota, FL</p>
        </div>
        <div className={classes["detail"]}>
          <CiLink className={classes["user_icon"]} />
          <a href="www.johnsmilga.com" alt="">
            www.johnsmilga.com
          </a>
        </div>
      </div>
    </article>
  );
};
