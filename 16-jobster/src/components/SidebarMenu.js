import React from "react";
import classes from "../assets/css/SidebarMenu.module.css";
import { BiBarChartAlt } from "react-icons/bi";
import { AiOutlineFileSearch } from "react-icons/ai";
import { BsBuildingAdd } from "react-icons/bs";
import { RiProfileLine } from "react-icons/ri";
import { useLocation, useNavigate } from "react-router-dom";

export const SidebarMenu = ({ isSmallSidebar = false, onClose }) => {
  const navigate = useNavigate();
  const location = useLocation().pathname;

  return (
    <ul className={classes["menu"]}>
      <li
        onClick={() => {
          navigate("/");
          isSmallSidebar && onClose();
        }}
        className={`${location === "/" ? `${classes["active"]}` : ""}`}
      >
        <BiBarChartAlt className={classes["icon_menu"]} />
        Stats
      </li>
      <li
        onClick={() => {
          navigate("/all-jobs");
          isSmallSidebar && onClose();
        }}
        className={`${location === "/all-jobs" ? `${classes["active"]}` : ""}`}
      >
        <AiOutlineFileSearch className={classes["icon_menu"]} />
        All jobs
      </li>
      <li
        onClick={() => {
          navigate("/add-job");
          isSmallSidebar && onClose();
        }}
        className={`${location === "/add-job" ? `${classes["active"]}` : ""}`}
      >
        <BsBuildingAdd className={classes["icon_menu"]} />
        Add job
      </li>
      <li
        onClick={() => {
          navigate("/profile");
          isSmallSidebar && onClose();
        }}
        className={`${location === "/profile" ? `${classes["active"]}` : ""}`}
      >
        <RiProfileLine className={classes["icon_menu"]} />
        Profile
      </li>
    </ul>
  );
};
