import React from "react";
import { Link } from "react-router-dom";

import classes from "./cocktailItem.module.css";

const CocktailItem = (props) => {
  return (
    <article className={classes["cocktail_item"]}>
      <div className={classes["image_area"]}>
        <img src={props.src} alt={props.name} />
      </div>
      <div className={classes["content_area"]}>
        <h3 className={classes["name"]}>{props.name}</h3>
        <h4 className={classes["glass"]}>{props.glass}</h4>
        <p className={classes["info"]}>{props.alcoholic}</p>
        <Link to={`/details/${props.id}`} className={classes["btn_details"]}>
          details
        </Link>
      </div>
    </article>
  );
};

export default CocktailItem;
