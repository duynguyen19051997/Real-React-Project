import React from "react";

import classes from "../assets/css/Intro.module.css";
import {
  IntroRepos,
  IntroFollowers,
  IntroFollowing,
  IntroGists,
} from "./index";
import { useGithubContext } from "../contexts/githubContext";

export const Intro = () => {
  const { githubUser } = useGithubContext();
  return (
    <section className={classes["intro_container"]}>
      <IntroRepos numOfRepos={githubUser.public_repos} />
      <IntroFollowers numOfFollowers={githubUser.followers} />
      <IntroFollowing numOfFollowing={githubUser.following} />
      <IntroGists numOfGists={githubUser.public_gists} />
    </section>
  );
};
