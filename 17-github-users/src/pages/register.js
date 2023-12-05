import React from "react";
import classes from "../assets/css/Register.module.css";
import developer_activity from "../assets/images/developer_activity.svg";

import { useGithubContext } from "../contexts/githubContext";

export const Register = () => {
  const { loginWithRedirect } = useGithubContext();

  return (
    <div className={classes["register_container"]}>
      <img alt="" src={developer_activity} />
      <h1>Github users</h1>
      <button
        className={`btn ${classes["btn_register"]}`}
        onClick={() => loginWithRedirect()}
      >
        Login/sign up
      </button>
    </div>
  );
};
