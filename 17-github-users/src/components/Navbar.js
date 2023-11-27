import React from "react";

import classes from "../assets/css/Navbar.module.css";

export const Navbar = () => {
  return (
    <nav className={classes["navbar_container"]}>
      <div className={classes["navbar_center"]}>
        <img src="https://lh3.googleusercontent.com/a/ACg8ocJowPkVPW3E_GsIL5_TiJCcrS7rNeF3FxpDRPgRxzH1pwc=s96-c" />
        <p>
          Welcome, <span>duy nguyen</span>
        </p>
        <button className={`btn ${classes["btn_logout"]}`}>logout</button>
      </div>
    </nav>
  );
};
