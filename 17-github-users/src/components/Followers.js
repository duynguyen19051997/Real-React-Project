import React from "react";

import classes from "../assets/css/Followers.module.css";
import { FollowerItem } from "./index";
import { useGithubContext } from "../contexts/githubContext";

export const Followers = () => {
  const { githubFollowers } = useGithubContext();

  return (
    <article className={classes["followers_container"]}>
      <h2>Followers</h2>
      <div className={classes["followers_center"]}>
        {githubFollowers &&
          githubFollowers.length > 0 &&
          githubFollowers.map((item) => (
            <FollowerItem
              key={item.id}
              htmlUrl={item.html_url}
              login={item.login}
              avatarUrl={item.avatar_url}
            />
          ))}
      </div>
    </article>
  );
};
