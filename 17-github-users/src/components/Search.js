import React, { useState } from "react";

import { BsSearch } from "react-icons/bs";
import classes from "../assets/css/Search.module.css";
import { useGithubContext } from "../contexts/githubContext";

export const Search = () => {
  const [enteredUser, setEnteredUser] = useState("");
  const { requests, rateError } = useGithubContext();

  const submitHandle = (event) => {
    event.preventDefault();

    if (enteredUser) {
      setEnteredUser("");
    }
  };

  return (
    <div className={classes["search_container"]}>
      {/* TODO: Error component */}
      {rateError.show && <p>{rateError.message}</p>}

      <form onSubmit={submitHandle} className={classes["form"]}>
        <div className={classes["form_control"]}>
          <BsSearch className={classes["icon_search"]} />
          <input
            type="text"
            placeholder="Enter github user"
            className={`input ${classes["input_search"]}`}
            value={enteredUser}
            onChange={(e) => setEnteredUser(e.target.value)}
          />
          {requests > 0 && (
            <button type="submit" className={`btn ${classes["btn_search"]}`}>
              Search
            </button>
          )}
        </div>
      </form>
      <h3>Requests: {requests}/60</h3>
    </div>
  );
};
