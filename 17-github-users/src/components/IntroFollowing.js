import React from "react";

import { IoPersonAddOutline } from "react-icons/io5";
import classes from "../assets/css/Intro.module.css";

export const IntroFollowing = () => {
  return (
    <article className={classes["intro_item"]}>
      <div
        className={`${classes["intro_item_icon"]} ${classes["intro_following"]}`}
      >
        <IoPersonAddOutline />
      </div>
      <div className={classes["intro_content"]}>
        <h3>253</h3>
        <p>following</p>
      </div>
    </article>
  );
};
