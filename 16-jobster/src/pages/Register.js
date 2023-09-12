import React, { useState } from "react";
import classes from "../assets/css/Register.module.css";
import { FormRow, Logo } from "../components/index";
import { toast } from "react-toastify";
import { useSelector, useDispatch } from "react-redux";
import { loginUser, registerUser } from "../features/user/userSlice";

const initialValue = {
  name: "",
  email: "",
  password: "",
  isMember: false,
};

export const Register = (props) => {
  const [member, setMember] = useState(initialValue);
  const dispatch = useDispatch();
  const { isLoading, user } = useSelector((store) => store.user);

  const submitHandler = (e) => {
    e.preventDefault();
    const { name, email, password, isMember } = member;
    if (!email || !password || (!name && !isMember)) {
      toast.warning("Please fill out all fields!");
      return;
    }
    if (isMember) {
      dispatch(loginUser({ email: email, password: password }));
      return;
    }
    dispatch(registerUser({ name, email, password }));
  };

  const changeHandle = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setMember({ ...member, [name]: value });
  };

  const toggleMember = (e) => {
    setMember({
      ...initialValue,
      isMember: !member.isMember,
    });
  };

  return (
    <div className={classes["register_container"]}>
      <Logo />
      <h2>{member.isMember ? "Login" : "Register"}</h2>
      <form onSubmit={submitHandler} className={classes["form_container"]}>
        {!member.isMember && (
          <FormRow
            name="name"
            type="text"
            labelText="Name"
            value={member.name}
            onChangeHandle={changeHandle}
          />
        )}
        <FormRow
          name="email"
          type="email"
          labelText="Email"
          value={member.email}
          onChangeHandle={changeHandle}
        />
        <FormRow
          name="password"
          type="password"
          labelText="Password"
          value={member.password}
          onChangeHandle={changeHandle}
        />
        <div className={classes["form_control"]}>
          <button type="submit" className={`btn ${classes["btn_submit"]}`}>
            Submit
          </button>
          <button type="submit" className={`btn ${classes["btn_demo"]}`}>
            Demo App
          </button>
        </div>
        <div className={classes["content"]}>
          <p>{!member.isMember ? "Already a member?" : "Not a member yet?"}</p>
          <button
            type="reset"
            className={`btn ${classes["btn_change"]}`}
            onClick={toggleMember}
          >
            {!member.isMember ? "Login" : "Register"}
          </button>
        </div>
      </form>
    </div>
  );
};
