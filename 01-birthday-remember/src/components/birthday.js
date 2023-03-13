import React from "react";

import classes from "./birthday.module.css";

export const Birthday = (props) => {
  const { src, name, age } = props.birthday;
  return (
    <div className={classes.birthday}>
      <div className={classes.image}>
        <img src={src} alt="" />
      </div>
      <div className={classes.content}>
        <h3>{name}</h3>
        <p>{age} years old</p>
      </div>
    </div>
  );
};
