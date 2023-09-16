import React from "react";
import classes from "../assets/css/Navbar.module.css";
import { BsList } from "react-icons/bs";

export const Navbar = () => {
  return (
    <section className={classes["navbar_container"]}>
      <BsList className={classes["icon"]} />
      <h2>Page</h2>
      <button className={`btn ${classes["btn_logout"]}`}>User</button>
    </section>
  );
};
