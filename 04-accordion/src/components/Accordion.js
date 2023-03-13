import React, { useState } from "react";

import classes from "./Accordion.module.css";

export const Accordion = (props) => {
  const { id, question, answer } = props.accordion;
  const [isShow, setIsShow] = useState(false);

  const showHandler = (event) => {
    event.preventDefault();
    setIsShow(!isShow);
  };

  return (
    <article className={classes.accordion} key={id}>
      <header>
        <h2 className={classes.title}>{question}</h2>
        {isShow && (
          <button className={classes.button} onClick={showHandler}>
            -
          </button>
        )}
        {!isShow && (
          <button className={classes.button} onClick={showHandler}>
            +
          </button>
        )}
      </header>
      {isShow && <p className={classes.content}>{answer}</p>}
    </article>
  );
};
