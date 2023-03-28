import React from "react";
import { Link } from "react-router-dom";

import classes from "./error.module.css";

export const Error = (props) => {
  return (
    <section className={classes["error_container"]}>
      <div className={classes["error_center"]}>
        <h1>404</h1>
        <p>Sorry, the page you tried cannot be found</p>
        <Link to="/" className={`btn ${classes["btn_back"]}`}>
          Back to home
        </Link>
      </div>
    </section>
  );
};
