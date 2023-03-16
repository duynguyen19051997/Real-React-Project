import React from "react";
import { BsCompass } from "react-icons/bs";
import classes from "./serviceItem.module.css";

export const ServiceItem = (props) => {
  return (
    <article className={classes["service_item_container"]}>
      <BsCompass className={classes["service_icon"]} />
      <h4>mission</h4>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates,
        ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde
        numquam nisi
      </p>
    </article>
  );
};
