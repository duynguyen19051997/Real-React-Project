import React from "react";

import classes from "../assets/css/FollowerItem.module.css";

export const FollowerItem = ({ avatarUrl, login, htmlUrl }) => {
  return (
    <div className={classes["followers_item"]}>
      <img src={avatarUrl} alt="" />
      <div className={classes["follower_item_info"]}>
        <h4>{login}</h4>
        <a href={htmlUrl} target="_blank" rel="noreferrer" alt="">
          {htmlUrl}
        </a>
      </div>
    </div>
  );
};
