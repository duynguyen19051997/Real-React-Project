import React, { useState } from "react";

import { BsSearch } from "react-icons/bs";
import classes from "../assets/css/Search.module.css";
import { useGithubContext } from "../contexts/githubContext";

export const Search = () => {
  const [enteredUser, setEnteredUser] = useState("");
  const { requests, rateError, searchGithubUser } = useGithubContext();

  const submitHandle = (event) => {
    event.preventDefault();

    if (enteredUser) {
      searchGithubUser(enteredUser);
      setEnteredUser("");
    }
  };

  return (
    <>
      {rateError.show && (
        <p
          style={{
            marginBottom: "10px",
            letterSpacing: "1.5px",
            color: "#bb2525",
          }}
        >
          {rateError.message}
        </p>
      )}
      <div className={classes["search_container"]}>
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
            {requests > 0 && !rateError.show && (
              <button type="submit" className={`btn ${classes["btn_search"]}`}>
                Search
              </button>
            )}
          </div>
        </form>
        <h3>Requests: {requests}/60</h3>
      </div>
    </>
  );
};
