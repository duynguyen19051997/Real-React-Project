import React from "react";
import { AiOutlineBlock } from "react-icons/ai";
import { GiPositionMarker } from "react-icons/gi";
import { CiLink } from "react-icons/ci";
import classes from "../assets/css/Users.module.css";
import { useGithubContext } from "../contexts/githubContext";
import { Link } from "react-router-dom";

export const User = () => {
  const { avatar_url, login, html_url, name, company, bio, location, blog } =
    useGithubContext().githubUser;

  return (
    <article className={classes["users_container"]}>
      <h2>User</h2>
      <div className={classes["user_header"]}>
        <div className={classes["user_info"]}>
          <img src={avatar_url} alt="" />
          <div className={classes["user_name"]}>
            <h3>{name}</h3>
            <p>@{login}</p>
          </div>
        </div>
        <Link to={html_url} className={`btn ${classes["btn_follow"]}`}>
          Follow
        </Link>
      </div>
      <div className={classes["user_detail"]}>
        <h4>{bio}</h4>
        <div className={classes["detail"]}>
          <AiOutlineBlock className={classes["user_icon"]} />
          <p>{company}</p>
        </div>
        <div className={classes["detail"]}>
          <GiPositionMarker className={classes["user_icon"]} />
          <p>{location}</p>
        </div>
        <div className={classes["detail"]}>
          <CiLink className={classes["user_icon"]} />
          <a href={blog} alt="">
            {blog}
          </a>
        </div>
      </div>
    </article>
  );
};
