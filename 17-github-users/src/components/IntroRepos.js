import React from "react";

import { BsJournalBookmarkFill } from "react-icons/bs";
import classes from "../assets/css/Intro.module.css";

export const IntroRepos = () => {
  return (
    <article className={classes["intro_item"]}>
      <div
        className={`${classes["intro_item_icon"]} ${classes["intro_repos"]}`}
      >
        <BsJournalBookmarkFill />
      </div>
      <div className={classes["intro_content"]}>
        <h3>253</h3>
        <p>repos</p>
      </div>
    </article>
  );
};
