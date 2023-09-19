import React from "react";
import { FormRow } from "../../components/index";
import classes from "../../assets/css/Profile.module.css";

export const Profile = (props) => {
  const changeHandle = () => {};
  return (
    <section className={classes["profile_container"]}>
      <h2>Profile</h2>
      <form className={classes["form_container"]}>
        <FormRow
          name="name"
          type="text"
          labelText="Name"
          value=""
          onChangeHandle={() => changeHandle()}
        />
        <FormRow
          name="lastName"
          type="text"
          labelText="last name"
          value=""
          onChangeHandle={() => changeHandle()}
        />
        <FormRow
          name="email"
          type="email"
          labelText="email"
          value=""
          onChangeHandle={() => changeHandle()}
        />
        <FormRow
          name="location"
          type="text"
          labelText="location"
          value=""
          onChangeHandle={() => changeHandle()}
        />
      </form>
      <button className={`btn ${classes["btn_save_changes"]}`}>
        Save changes
      </button>
    </section>
  );
};
