import React from "react";

import classes from "./filter.module.css";

export const Filter = (props) => {
  const categories = props.categories;
  return (
    <div className={classes.header}>
      <div className={classes.title}>
        <h1>our menu</h1>
        <div className={classes.line}></div>
      </div>
      <div className={classes.filter}>
        <button
          onClick={(event) => {
            event.preventDefault();
            props.onFilter("all");
          }}
          className={`${classes.button} ${
            props.filter === "all" ? classes.active : ""
          }`}
        >
          All
        </button>
        {categories &&
          categories.length > 0 &&
          categories.map((m) => (
            <button
              key={m.id}
              onClick={(event) => {
                event.preventDefault();
                props.onFilter(m.name);
              }}
              className={`${classes.button} ${
                m.name === props.filter ? classes.active : ""
              }`}
            >
              {m.name}
            </button>
          ))}
      </div>
    </div>
  );
};
