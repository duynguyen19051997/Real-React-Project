import React from "react";

import classes from "./item.module.css";

export const Item = (props) => {
  const { id, title, category, price, image, description } = props.item;

  return (
    <article className={classes.item}>
      <div className={classes.image}>
        <img src={image} alt={title} />
      </div>
      <div className={classes.item_info}>
        <div className={classes.header}>
          <h2 className={classes.title}>{title}</h2>
          <p className={classes.price}>${price}</p>
        </div>
        <p className={classes.content}>{description}</p>
      </div>
    </article>
  );
};
