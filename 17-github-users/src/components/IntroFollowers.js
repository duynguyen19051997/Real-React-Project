import React from "react";

import { GoPeople } from "react-icons/go";
import classes from "../assets/css/Intro.module.css";

export const IntroFollowers = ({ numOfFollowers }) => {
  return (
    <article className={classes["intro_item"]}>
      <div
        className={`${classes["intro_item_icon"]} ${classes["intro_followers"]}`}
      >
        <GoPeople />
      </div>
      <div className={classes["intro_content"]}>
        <h3>{numOfFollowers}</h3>
        <p>followers</p>
      </div>
    </article>
  );
};
