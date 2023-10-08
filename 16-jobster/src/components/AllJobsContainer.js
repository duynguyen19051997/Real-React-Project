import React from "react";
import { Search } from "./Search";
import classes from "../assets/css/AllJobsContainer.module.css";
import { Job } from "./Job";

export const AllJobsContainer = () => {
  return (
    <section className={classes["all_jobs_container"]}>
      <Search />
      <Job />
    </section>
  );
};
