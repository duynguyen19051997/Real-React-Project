import React, { useState } from "react";
import classes from "../assets/css/Register.module.css";
import { Logo } from "./index";

export const Register = (props) => {
  const [isRegister, setIsRegister] = useState(true);

  return (
    <div className={classes["register_container"]}>
      <Logo />
      <h2>{isRegister ? "Register" : "Login"}</h2>
      <form className={classes["form_container"]}>
        {isRegister && (
          <div className={classes["form_control"]}>
            <label>Name</label>
            <input type="text" className="input" />
          </div>
        )}
        <div className={classes["form_control"]}>
          <label>Email</label>
          <input type="email" className="input" />
        </div>
        <div className={classes["form_control"]}>
          <label>Password</label>
          <input type="password" className="input" />
        </div>
        <div className={classes["form_control"]}>
          <button type="submit" className={`btn ${classes["btn_submit"]}`}>
            Submit
          </button>
          <button type="submit" className={`btn ${classes["btn_demo"]}`}>
            Demo App
          </button>
        </div>
      </form>
      <div className={classes["content"]}>
        <p>{isRegister ? "Not a member yet?" : "Already a member?"}</p>
        <button
          className={`btn ${classes["btn_change"]}`}
          onClick={() => {
            setIsRegister(!isRegister);
          }}
        >
          {isRegister ? "Register" : "Login"}
        </button>
      </div>
    </div>
  );
};
