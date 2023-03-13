import React, { useState } from "react";

import classes from "./lorem.module.css";

import { paragraphsData } from "../data";

export const Lorem = (props) => {
  const [number, setNumber] = useState(0);
  const [paragraphs, setParagraphs] = useState([]);

  const numberChangeHandle = (event) => {
    event.preventDefault();
    setNumber(event.target.value);
  };

  const submitHandle = (event) => {
    event.preventDefault();
    setParagraphs(paragraphsData.slice(0, number));
  };

  return (
    <section className={classes.container}>
      <h1>tired of boring lorem ipsum?</h1>
      <form onSubmit={submitHandle}>
        <label>paragraphs:</label>
        <input
          type="number"
          name="number"
          value={number}
          onChange={numberChangeHandle}
        />
        <button type="submit" onClick={submitHandle}>
          Generate
        </button>
      </form>
      <article>
        {paragraphs &&
          paragraphs.length > 0 &&
          paragraphs.map((x, i) => (
            <p className={classes.paragraph} key={i}>
              {x}
            </p>
          ))}
      </article>
    </section>
  );
};
