import React from "react";
import classes from "../assets/css/Job.module.css";
import { ImCompass } from "react-icons/im";
import { BsCalendar3 } from "react-icons/bs";
import { IoBagCheckOutline } from "react-icons/io5";
import moment from "moment";

export const Job = ({
  _id,
  company,
  position,
  status,
  jobType,
  jobLocation,
  createdAt,
}) => {
  const createdAtDate = moment(createdAt).format("MMM Do YY");

  return (
    <article className={classes["job_container"]}>
      <div className={classes["job_title"]}>
        <div className={classes["job_title_icon"]}>
          <span>{company.charAt(0)}</span>
        </div>
        <div className={classes["job_title_info"]}>
          <h3>{position}</h3>
          <p>{company}</p>
        </div>
      </div>
      <div className={classes["job_detail"]}>
        <div className={classes["job_detail_attr"]}>
          <ImCompass className={classes["icon"]} />
          <p>{jobLocation}</p>
        </div>
        <div className={classes["job_detail_attr"]}>
          <BsCalendar3 className={classes["icon"]} />
          <p>{createdAtDate}</p>
        </div>
        <div className={classes["job_detail_attr"]}>
          <IoBagCheckOutline className={classes["icon"]} />
          <p>{jobType}</p>
        </div>
        <div
          className={`${classes["job_detail_attr_status"]} ${classes[status]}`}
        >
          <p>{status}</p>
        </div>
      </div>
      <div className={classes["job_actions"]}>
        <button className={`btn ${classes["edit_btn"]}`}>Edit</button>
        <button className={`btn ${classes["remove_btn"]}`}>Remove</button>
      </div>
    </article>
  );
};
