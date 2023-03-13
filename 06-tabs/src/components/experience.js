import React from "react";

import classes from "./experience.module.css";
import { ExperienceDetail } from "./experienceDetail";

export const Experience = (props) => {
  const { id, title, companyName, modifiedDate, details } = props.tab;

  return (
    <article key={id} className={classes.experience}>
      <div className={classes.header}>
        <h2>{title}</h2>
        <h3>{companyName}</h3>
        <p>{modifiedDate}</p>
      </div>
      <div className={classes.detail}>
        {details &&
          details.length > 0 &&
          details.map((x) => <ExperienceDetail job={x} key={x.id} />)}
      </div>
      <div className={classes.footer}>
        <button className={classes.button}>More Information</button>
      </div>
    </article>
  );
};
