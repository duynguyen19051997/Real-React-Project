import React, { useEffect } from "react";
import { Search } from "./Search";
import classes from "../assets/css/AllJobsContainer.module.css";
import { Job } from "./Job";
import { useSelector, useDispatch } from "react-redux";
import { Loading } from "./index";
import { getAllJobs, showStats } from "../features/allJobs/allJobsSlice";

export const AllJobsContainer = () => {
  const { jobs, isLoading } = useSelector((store) => store.allJobs);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllJobs());
    dispatch(showStats());
  }, [dispatch]);

  return (
    <section className={classes["all_jobs_container"]}>
      <Search />
      {isLoading && (
        <div className={classes["loading_container"]}>
          <Loading />
        </div>
      )}
      {jobs.length === 0 && <h4>No jobs to display</h4>}
      {jobs.length > 0 && (
        <>
          <div className={classes["all_jobs_number"]}>
            <h3>{jobs.length} jobs found</h3>
          </div>
          <div className={classes["all_jobs_center"]}>
            {jobs.map((job, index) => (
              <Job key={index} {...job} />
            ))}
          </div>
        </>
      )}
      <div className={classes["all_jobs_paging"]}></div>
    </section>
  );
};
