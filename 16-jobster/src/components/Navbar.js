import React from "react";
import classes from "../assets/css/Navbar.module.css";
import { BsList } from "react-icons/bs";
import { useSelector } from "react-redux";
import { BiLogOutCircle } from "react-icons/bi";

export const Navbar = ({ onShowBigSidebar }) => {
  const { user } = useSelector((store) => store.user);

  return (
    <nav className={classes["navbar_container"]}>
      <BsList className={classes["icon"]} onClick={onShowBigSidebar} />
      <h1>dashboard</h1>
      <button className={`btn ${classes["btn_logout"]}`}>
        {user.name} <BiLogOutCircle />
      </button>
    </nav>
  );
};
