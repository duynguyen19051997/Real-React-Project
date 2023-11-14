import React from "react";
import classes from "../assets/css/Register.module.css";
import developer_activity from "../assets/images/developer_activity.svg";

export const Register = () => {
  return (
    <div className={classes["register_container"]}>
      <img alt="" src={developer_activity} />
      <button className={`btn ${classes["btn_register"]}`}>
        Login/sign up
      </button>
    </div>
  );
};
