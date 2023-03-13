import React from "react";

import classes from "./loading.module.css";

export const Loading = () => {
  return (
    <div className={classes["loader_area"]}>
      <span className={classes["loader"]}></span>
    </div>
  );
};
