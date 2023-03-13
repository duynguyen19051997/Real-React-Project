import React, { useEffect, useState } from "react";

import { reviewsData } from "../data";

import classes from "./review.module.css";
import icon from "../../src/quote.png";

export const Review = (props) => {
  const [index, setIndex] = useState(0);
  const [user, setUser] = useState(reviewsData[index]);

  const nextHandle = (event) => {
    event.preventDefault();
    setIndex((prevIndex) =>
      ++prevIndex > reviewsData.length - 1 ? 0 : prevIndex
    );
  };

  const previousHandle = (event) => {
    event.preventDefault();
    setIndex((prevIndex) =>
      --prevIndex < 0 ? reviewsData.length - 1 : prevIndex
    );
  };

  useEffect(() => {
    setUser(reviewsData[index]);
  }, [index]);

  return (
    <div className={classes.review}>
      <div className={classes.image}>
        <div className={classes.overlay}></div>
        <img className={classes.img} src={user.image} alt={user.name} />
        <div className={classes.icon}>
          <img src={icon} alt="" />
        </div>
      </div>
      <div className={classes.content}>
        <h3 className={classes.name}>{user.name}</h3>
        <p className={classes.description}>{user.job}</p>
        <p className={classes.detail}>{user.description}</p>
      </div>
      <div className={classes.action}>
        <button className={classes.previous} onClick={nextHandle}>
          &#60;
        </button>
        <button className={classes.next} onClick={previousHandle}>
          &#62;
        </button>
      </div>
      <button className={classes["surprise-me"]} onClick={nextHandle}>
        Surprise Me
      </button>
    </div>
  );
};
