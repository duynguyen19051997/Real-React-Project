import React from "react";

import { BsTerminal } from "react-icons/bs";
import classes from "../assets/css/Intro.module.css";

export const IntroGists = ({ numOfGists }) => {
  return (
    <article className={classes["intro_item"]}>
      <div
        className={`${classes["intro_item_icon"]} ${classes["intro_gists"]}`}
      >
        <BsTerminal />
      </div>
      <div className={classes["intro_content"]}>
        <h3>{numOfGists}</h3>
        <p>gists</p>
      </div>
    </article>
  );
};
