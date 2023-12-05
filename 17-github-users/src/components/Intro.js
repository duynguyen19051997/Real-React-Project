import React from "react";

import classes from "../assets/css/Intro.module.css";
import {
  IntroRepos,
  IntroFollowers,
  IntroFollowing,
  IntroGists,
} from "./index";
import { user } from "../contexts/data/user";

export const Intro = () => {
  return (
    <section className={classes["intro_container"]}>
      <IntroRepos numOfRepos={user.public_repos} />
      <IntroFollowers numOfFollowers={user.followers} />
      <IntroFollowing numOfFollowing={user.following} />
      <IntroGists numOfGists={user.public_gists} />
    </section>
  );
};
