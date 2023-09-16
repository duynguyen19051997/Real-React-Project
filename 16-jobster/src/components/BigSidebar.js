import React from "react";
import classes from "../assets/css/BigSidebar.module.css";
import { Logo } from "./Logo";
import { BiBarChartAlt } from "react-icons/bi";
import { AiOutlineFileSearch } from "react-icons/ai";
import { BsBuildingAdd } from "react-icons/bs";
import { RiProfileLine } from "react-icons/ri";
import { useLocation, useNavigate } from "react-router-dom";

export const BigSidebar = () => {
  const navigate = useNavigate();
  const location = useLocation().pathname;

  return (
    <aside className={classes["big_aside_container"]}>
      <div style={{ padding: "1rem" }}>
        <Logo />
      </div>
      <ul className={classes["menu"]}>
        <li
          onClick={() => {
            navigate("/");
          }}
          className={`${location === "/" ? `${classes["active"]}` : ""}`}
        >
          <BiBarChartAlt className={classes["icon_menu"]} />
          Stats
        </li>
        <li
          onClick={() => {
            navigate("/all-jobs");
          }}
          className={`${
            location === "/all-jobs" ? `${classes["active"]}` : ""
          }`}
        >
          <AiOutlineFileSearch className={classes["icon_menu"]} />
          All jobs
        </li>
        <li
          onClick={() => {
            navigate("/add-job");
          }}
          className={`${location === "/add-job" ? `${classes["active"]}` : ""}`}
        >
          <BsBuildingAdd className={classes["icon_menu"]} />
          Add job
        </li>
        <li
          onClick={() => {
            navigate("/profile");
          }}
          className={`${location === "/profile" ? `${classes["active"]}` : ""}`}
        >
          <RiProfileLine className={classes["icon_menu"]} />
          Profile
        </li>
      </ul>
    </aside>
  );
};
