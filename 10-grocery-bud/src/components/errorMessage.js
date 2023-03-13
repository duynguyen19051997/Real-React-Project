import React from "react";

import classes from "./errorMessage.module.css";

export const ErrorMessage = (props) => {
  const classesError =
    props.errorResult > 0 ? classes["error_success"] : classes["error_fail"];

  return (
    <div className={classesError}>
      <h4>{props.message}</h4>
    </div>
  );
};
