import React from "react";
import { Link } from "react-router-dom";

import classes from "./header.module.css";

export const Header = (props) => {
  return (
    <nav className={classes["nav"]}>
      <div className={classes["title"]}>
        <h2>
          the <span>Cocktails</span> db
        </h2>
      </div>
      <div className={classes["link"]}>
        <Link to="/" className={classes["btn_nav"]}>
          Home
        </Link>
        <Link to="/about" className={classes["btn_nav"]}>
          About
        </Link>

        {/* <button className={classes["btn_nav"]}>Home</button>
        <button className={classes["btn_nav"]}>About</button> */}
      </div>
    </nav>
  );
};
