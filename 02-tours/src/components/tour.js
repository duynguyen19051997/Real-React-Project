import React, { useState } from "react";

import classes from "./tour.module.css";

export const Tour = (props) => {
  const [isShowMore, setIsShowMore] = useState(true);
  const { id, title, price, content, image } = props.tour;
  const showMoreHandleClick = (event) => {
    event.preventDefault();
    setIsShowMore(!isShowMore);
  };

  const removeHandleClick = (event) => {
    event.preventDefault();
    props.onRemove(id);
  };

  return (
    <div className={classes.tour}>
      <div className={classes.image}>
        <img src={image} alt={title} />
      </div>
      <div className={classes.header}>
        <h3 className={classes.title}>{title}</h3>
        <p className={classes.price}>${price}</p>
      </div>
      <div className={classes.body}>
        <div className={classes.content}>
          {isShowMore ? `${content.substring(0, 250)}...` : content}
          <button
            className={classes["button-show-more"]}
            onClick={showMoreHandleClick}
          >
            {isShowMore ? "Show more" : "Show less"}
          </button>
        </div>
        <button className={classes.button} onClick={removeHandleClick}>
          Not interested
        </button>
      </div>
    </div>
  );
};
