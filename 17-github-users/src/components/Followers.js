import React from "react";

import classes from "../assets/css/Followers.module.css";
import { FollowerItem } from "./index";

export const Followers = () => {
  return (
    <article className={classes["followers_container"]}>
      <h2>Followers</h2>
      <div className={classes["followers_center"]}>
        <FollowerItem />
        <FollowerItem />
        <FollowerItem />
        <FollowerItem />
        <FollowerItem />
        <FollowerItem />
      </div>
    </article>
  );
};
