import React, { useState, useEffect } from "react";

import classes from "./slider.module.css";

import { sliderData } from "../data";

export const Slider = (props) => {
  const [people, setPeople] = useState(sliderData);
  const [index, setIndex] = React.useState(0);

  const nextSlideHandle = () => {
    setIndex((oldIndex) => {
      let index = oldIndex + 1;
      if (index > people.length - 1) {
        index = 0;
      }
      return index;
    });
  };

  const previousSlideHandle = () => {
    setIndex((oldIndex) => {
      let index = oldIndex - 1;
      if (index < 0) {
        index = people.length - 1;
      }
      return index;
    });
  };

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex((oldIndex) => {
        let index = oldIndex + 1;
        if (index > people.length - 1) {
          index = 0;
        }
        return index;
      });
    }, 5000);
    return () => {
      clearInterval(slider);
    };
  }, [index]);

  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <h1>Review Complete</h1>
        <div className={classes.line}></div>
      </div>
      <article className={classes.slider}>
        <div className={classes["button-area"]}>
          <button className={classes.button} onClick={previousSlideHandle}>
            &#60;
          </button>
        </div>
        <div className={classes.main}>
          {people.map((person, personIndex) => {
            const { id, image, name, job, description } = person;

            let position = classes["next-slide"];
            if (personIndex === index) {
              position = classes["active-slide"];
            }
            if (
              personIndex === index - 1 ||
              (index === 0 && personIndex === people.length - 1)
            ) {
              position = classes["previous-slide"];
            }

            return (
              <div key={id} className={`${classes["main-slide"]} ${position}`}>
                <div className={classes.image}>
                  <img src={image} alt={name} />
                </div>
                <h2>{name}</h2>
                <h4>{job}</h4>
                <p>{description}</p>
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 512 512"
                  className={classes.icon}
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M464 32H336c-26.5 0-48 21.5-48 48v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48zm-288 0H48C21.5 32 0 53.5 0 80v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48z"></path>
                </svg>
              </div>
            );
          })}
        </div>

        <div className={classes["button-area"]}>
          <button className={classes.button} onClick={nextSlideHandle}>
            &#62;
          </button>
        </div>
      </article>
    </div>
  );
};
