import React from "react";
import classes from "./Landing.module.css";
import jobster from "../images/jobster.svg";
import main from "../images/main.svg";

export const Landing = (props) => {
  return (
    <main className={classes["main_container"]}>
      <nav>
        <img src={jobster} alt="job tracking app" />
      </nav>
      <div className={classes["main_center"]}>
        <div className={classes["main_contents"]}>
          <h1>
            job <span>tracking</span> app
          </h1>
          <p>
            Crucifix narwhal street art asymmetrical, humblebrag tote bag pop-up
            fixie raclette taxidermy craft beer. Brunch bitters synth, VHS
            crucifix heirloom meggings bicycle rights.
          </p>
          <button className={`btn ${classes["btn_login"]}`}>
            Login/Register
          </button>
        </div>
        <div className={classes["main_images"]}>
          <img src={main} alt="main" />
        </div>
      </div>
    </main>
  );
};
