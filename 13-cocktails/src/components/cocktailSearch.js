import React, { useEffect, useRef } from "react";
import { useCocktailsContext } from "../contexts/cocktailsContext";
import classes from "./cocktailSearch.module.css";

export const CocktailSearch = (props) => {
  const { setSearch } = useCocktailsContext();
  const searchValue = useRef("");
  const submitHandler = (e) => {
    e.preventDefault();
    setSearch(searchValue.current.value);
  };
  const changeHandler = (e) => {
    e.preventDefault();
    setSearch(searchValue.current.value);
  };
  useEffect(() => {
    searchValue.current.focus();
  }, []);

  return (
    <div className={classes["search_container"]}>
      <form onSubmit={submitHandler}>
        <label htmlFor="search">search your favorite cocktail</label>
        <input
          className={classes["search_input"]}
          type="text"
          name="search"
          ref={searchValue}
          onChange={changeHandler}
        />
      </form>
    </div>
  );
};
