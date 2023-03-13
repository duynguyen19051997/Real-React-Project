import React from "react";

import classes from "./colorFilter.module.css";

export const ColorFilter = () => {
  const submitColor = (event) => {
    event.preventDefault();
  };

  const changeColor = (event) => {
    event.preventDefault();
  };

  return (
    <section className={classes.container}>
      <h3>Color Generator</h3>
      <form onSubmit={submitColor}>
        <input type="text" name="color" onChange={changeColor} />
        <button type="submit" className={classes.btn} onClick={submitColor}>
          Submit
        </button>
      </form>
    </section>
  );
};
