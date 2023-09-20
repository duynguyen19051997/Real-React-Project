import React from "react";
import { FormRow } from "../../components/index";
import classes from "../../assets/css/AddJob.module.css";

export const AddJob = (props) => {
  return (
    <section className={classes["add_job_container"]}>
      <h2>Add job</h2>
      <form className={classes["form_container"]} onSubmit={() => {}}>
        <FormRow
          name="position"
          type="text"
          labelText="position"
          value=""
          onChangeHandle={() => {}}
        />
        <FormRow
          name="company"
          type="text"
          labelText="company"
          value=""
          onChangeHandle={() => {}}
        />
        <FormRow
          name="jobLocation"
          type="text"
          labelText="job location"
          value=""
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
        <div className={classes["action_container"]}>
          <button className={`btn ${classes["btn_submit"]}`} type="submit">
            submit
          </button>
          <button className={`btn ${classes["btn_clear"]}`} type="reset">
            clear
          </button>
        </div>
      </form>
    </section>
  );
};
