import React, { useState } from "react";
import { Tour } from "./tour";

import { toursData } from "../data";

import classes from "./tourList.module.css";

export const TourList = (props) => {
  const [tours, setTours] = useState(toursData);
  const removeHandle = (id) => {
    setTours((prevTours) => prevTours.filter((tour) => tour.id !== id));
  };

  return (
    <div className={classes["tour-list"]}>
      <div className={classes.header}>
        <h1>Our tours</h1>
        <div className={classes.line}></div>
      </div>
      <div className={classes.content}>
        {tours &&
          tours.length > 0 &&
          tours.map((tour) => (
            <Tour key={tour.id} tour={tour} onRemove={removeHandle} />
          ))}
      </div>
    </div>
  );
};
