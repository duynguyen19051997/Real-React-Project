import React from "react";
import classes from "../assets/css/Search.module.css";
import { FormRow } from "./FormRow";
import { FormRowSelect } from "./FormRowSelect";
import { useSelector, useDispatch } from "react-redux";
import {
  changeFilterHandle,
  getAllJobs,
} from "../features/allJobs/allJobsSlice";

export const Search = () => {
  const {
    search,
    searchStatus,
    searchStatusOptions,
    searchType,
    searchTypeOptions,
    sort,
    sortOptions,
  } = useSelector((store) => store.allJobs);
  const dispatch = useDispatch();

  const changeHandle = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    dispatch(changeFilterHandle({ name, value }));
    dispatch(getAllJobs());
  };
  return (
    <section className={classes["search_container"]}>
      <h2>Search</h2>
      <form className={classes["form_container"]} onSubmit={() => {}}>
        <FormRow
          name="search"
          type="text"
          labelText="search"
          value={search}
          onChangeHandle={changeHandle}
        />
        <FormRowSelect
          name="status"
          options={searchStatusOptions}
          selectedValue={searchStatus}
          labelText="status"
          onChangeHandle={changeHandle}
        />
        <FormRowSelect
          name="type"
          options={searchTypeOptions}
          selectedValue={searchType}
          labelText="type"
          onChangeHandle={changeHandle}
        />
        <FormRowSelect
          name="sort"
          options={sortOptions}
          selectedValue={sort}
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
