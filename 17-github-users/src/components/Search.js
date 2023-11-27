import React from "react";

import { BsSearch } from "react-icons/bs";
import classes from "../assets/css/Search.module.css";

export const Search = () => {
  const submitHandle = (event) => {
    event.preventDefault();
  };

  return (
    <div className={classes["search_container"]}>
      <form onSubmit={submitHandle} className={classes["form"]}>
        <div className={classes["form_control"]}>
          <BsSearch className={classes["icon_search"]} />
          <input
            type="text"
            placeholder="Enter github user"
            className={`input ${classes["input_search"]}`}
          />
          <button type="submit" className={`btn ${classes["btn_search"]}`}>
            Search
          </button>
        </div>
      </form>
      <h3>Requests: 55/60</h3>
    </div>
  );
};
