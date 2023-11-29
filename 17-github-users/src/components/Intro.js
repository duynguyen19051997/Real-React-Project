import React from "react";

import classes from "../assets/css/Intro.module.css";
import {
  IntroRepos,
  IntroFollowers,
  IntroFollowing,
  IntroGists,
} from "./index";

export const Intro = () => {
  return (
    <section className={classes["intro_container"]}>
      <IntroRepos />
      <IntroFollowers />
      <IntroFollowing />
      <IntroGists />
    </section>
  );
};
