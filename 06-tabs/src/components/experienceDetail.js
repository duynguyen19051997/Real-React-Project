import React from "react";

import classes from "./experienceDetail.module.css";

export const ExperienceDetail = (props) => {
  const { id, scope } = props.job;
  return (
    <div className={classes["experience-detail"]}>
      <span>&#62;&#62;</span>
      <p>{scope}</p>
    </div>
  );
};
