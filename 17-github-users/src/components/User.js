import React from "react";
import classes from "../assets/css/Users.module.css";

export const User = () => {
  return (
    <article className={classes["users_container"]}>
      <h2>User tag</h2>
      <div>
        <div className={classes["user_image"]}>
          <img
            src="https://lh3.googleusercontent.com/a/ACg8ocJowPkVPW3E_GsIL5_TiJCcrS7rNeF3FxpDRPgRxzH1pwc=s96-c"
            alt=""
          />
          <div className={classes["user_name"]}>
            <h3>John Smilga</h3>
            <p>@john_smilga</p>
          </div>
        </div>
        <button className={`btn ${classes["btn_follow"]}`}>Follow</button>
      </div>
    </article>
  );
};
