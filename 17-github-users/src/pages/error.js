import React from "react";
import { Link } from "react-router-dom";
import classes from "../assets/css/Error.module.css";
import developer_activity from "../assets/images/developer_activity.svg";

export const Error = () => {
  return (
    <div className={classes["error_container"]}>
      <img alt="" src={developer_activity} />
      <h1>404</h1>
      <p>Sorry, the page you tried cannot be found</p>
      <Link to="/" className={`btn ${classes["btn_back"]}`}>
        Back home
      </Link>
    </div>
  );
};
