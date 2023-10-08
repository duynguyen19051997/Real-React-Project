import React from "react";
import classes from "../assets/css/Job.module.css";

export const Job = () => {
  return (
    <article className={classes["job_container"]}>
      <div className={classes["job_title"]}>
        <h3>Civil Engineer</h3>
        <p>Bechtelar-Bednar</p>
      </div>
      <div className={classes["job_detail"]}>
        <h5>Kiamba</h5>
        <h5>Dec 27th, 2021</h5>
        <h5>internship</h5>
        <h5>Kiamba</h5>
      </div>
      <div className={classes["job_actions"]}>
        <button className={`btn ${classes["edit_btn"]}`}>Edit</button>
        <button className={`btn ${classes["remove_btn"]}`}>Remove</button>
      </div>
    </article>
  );
};
