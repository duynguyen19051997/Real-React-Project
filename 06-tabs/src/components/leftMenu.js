import React from "react";

import classes from "./leftMenu.module.css";

export const LeftMenu = (props) => {
  return (
    <div className={classes["left-menu"]}>
      {props.companies &&
        props.companies.length > 0 &&
        props.companies.map((x) => (
          <button
            key={x.id}
            onClick={(event) => {
              event.preventDefault();
              props.onClickLeftMenu(x.name);
            }}
            className={`${classes.button} ${
              x.name === props.menuActive ? classes.active : ""
            }`}
          >
            {x.name}
          </button>
        ))}
    </div>
  );
};
