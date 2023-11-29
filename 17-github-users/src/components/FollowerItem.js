import React from "react";

import classes from "../assets/css/FollowerItem.module.css";

export const FollowerItem = () => {
  return (
    <div className={classes["followers_item"]}>
      <img src="https://avatars.githubusercontent.com/u/3006?v=4" alt="" />
      <div className={classes["follower_item_info"]}>
        <h4>tarasis</h4>
        <a href="https://github.com/tarasis" alt="">
          https://github.com/tarasis
        </a>
      </div>
    </div>
  );
};
