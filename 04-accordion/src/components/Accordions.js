import React from "react";
import { Accordion } from "./Accordion";
import { accordionsData } from "../data";

import classes from "./Accordions.module.css";

export const Accordions = (props) => {
  return (
    <div className={classes.container}>
      <div className={classes.accordions}>
        <h1 className={classes.title}>questions and answers about login</h1>
        <div className={classes.questions}>
          {accordionsData &&
            accordionsData.length > 0 &&
            accordionsData.map((a) => <Accordion accordion={a} />)}
        </div>
      </div>
    </div>
  );
};
