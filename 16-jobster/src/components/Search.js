import React from "react";
import classes from "../assets/css/Search.module.css";
import { FormRow } from "./FormRow";
import { FormRowSelect } from "./FormRowSelect";

export const Search = () => {
  const changeHandle = (e) => {};
  return (
    <section className={classes["search_container"]}>
      <h2>Search</h2>
      <form className={classes["form_container"]} onSubmit={() => {}}>
        <FormRow
          name="search"
          type="text"
          labelText="search"
          value=""
          onChangeHandle={changeHandle}
        />
        <FormRowSelect
          name="status"
          options=""
          selectedValue=""
          labelText="status"
          onChangeHandle={changeHandle}
        />
        <FormRowSelect
          name="type"
          options=""
          selectedValue=""
          labelText="type"
          onChangeHandle={changeHandle}
        />
        <FormRowSelect
          name="sort"
          options=""
          selectedValue=""
          labelText="sort"
          onChangeHandle={changeHandle}
        />
        <div className={classes["action_container"]}>
          <button
            className={`btn ${classes["btn_clear"]}`}
            type="reset"
            onClick={() => {}}
          >
            clear filters
          </button>
        </div>
      </form>
    </section>
  );
};
