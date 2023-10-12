import React from "react";
import classes from "../assets/css/Job.module.css";
import { ImCompass } from "react-icons/im";
import { BsCalendar3 } from "react-icons/bs";
import { IoBagCheckOutline } from "react-icons/io5";

export const Job = () => {
  return (
    <article className={classes["job_container"]}>
      <div className={classes["job_title"]}>
        <div className={classes["job_title_icon"]}>
          <span>M</span>
        </div>
        <div className={classes["job_title_info"]}>
          <h3>Civil Engineer</h3>
          <p>Bechtelar-Bednar</p>
        </div>
      </div>
      <div className={classes["job_detail"]}>
        <div className={classes["job_detail_attr"]}>
          <ImCompass className={classes["icon"]} />
          <p>Kiamba</p>
        </div>
        <div className={classes["job_detail_attr"]}>
          <BsCalendar3 className={classes["icon"]} />
          <p>Dec 27th, 2021</p>
        </div>
        <div className={classes["job_detail_attr"]}>
          <IoBagCheckOutline className={classes["icon"]} />
          <p>internship</p>
        </div>
        <div
          className={`${classes["job_detail_attr_status"]} ${classes["declined"]}`}
        >
          <p>Kiamba</p>
        </div>
      </div>
      <div className={classes["job_actions"]}>
        <button className={`btn ${classes["edit_btn"]}`}>Edit</button>
        <button className={`btn ${classes["remove_btn"]}`}>Remove</button>
      </div>
    </article>
  );
};
