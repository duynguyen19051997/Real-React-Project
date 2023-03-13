import React from "react";

import classes from "./colorGenerator.module.css";

export const ColorGenerator = () => {
  return (
    <section className={classes["color-generator"]}>
      <article
        className={classes["color-area"]}
        style={{ backgroundColor: "#e6e6e6" }}
      >
        <p>70%</p>
        <p>#e6e6e6</p>
      </article>
      <article
        className={classes["color-area"]}
        style={{ backgroundColor: "#b3b3b3" }}
      >
        <p>70%</p>
        <p>#e6e6e6</p>
      </article>
      <article
        className={classes["color-area"]}
        style={{ backgroundColor: "#999999" }}
      >
        <p>70%</p>
        <p>#e6e6e6</p>
      </article>
      <article
        className={classes["color-area"]}
        style={{ backgroundColor: "#191919" }}
      >
        <p>70%</p>
        <p>#e6e6e6</p>
      </article>
    </section>
  );
};
