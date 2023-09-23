import React from "react";
import { FormRow } from "../../components/index";
import classes from "../../assets/css/AddJob.module.css";
import { useDispatch, useSelector } from "react-redux";
import { Loading } from "../../components/index";
import { toast } from "react-toastify";

export const AddJob = (props) => {
  const {
    isLoading,
    company,
    position,
    jobLocation,
    jobTypeOptions,
    jobType,
    statusOptions,
    status,
    isEditing,
    editJobId,
  } = useSelector((store) => store.job);
  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();

    if (!company || !position || !jobLocation) {
      toast.warning("Please, fill out all the fields");
      return;
    }
  };

  return (
    <section className={classes["add_job_container"]}>
      <h2>{isEditing ? "Edit job" : "Add job"}</h2>
      <form className={classes["form_container"]} onSubmit={submitHandler}>
        <FormRow
          name="position"
          type="text"
          labelText="position"
          value={position}
          onChangeHandle={() => {}}
        />
        <FormRow
          name="company"
          type="text"
          labelText="company"
          value={company}
          onChangeHandle={() => {}}
        />
        <FormRow
          name="jobLocation"
          type="text"
          labelText="job location"
          value={jobLocation}
          onChangeHandle={() => {}}
        />
        <FormRow
          name="status"
          type="text"
          labelText="status"
          value=""
          onChangeHandle={() => {}}
        />
        <FormRow
          name="jobType"
          type="text"
          labelText="job type"
          value=""
          onChangeHandle={() => {}}
        />
        {!isLoading && (
          <div className={classes["action_container"]}>
            <button className={`btn ${classes["btn_submit"]}`} type="submit">
              submit
            </button>
            <button className={`btn ${classes["btn_clear"]}`} type="reset">
              clear
            </button>
          </div>
        )}
        {isLoading && <Loading />}
      </form>
    </section>
  );
};
