import React from "react";
import { Outlet } from "react-router-dom";

import classes from "../../assets/css/SharedLayout.module.css";
import { BigSidebar, Navbar, SmallSidebar } from "../../components/index";

export const SharedLayout = (props) => {
  return (
    <main className={classes["dashboard_container"]}>
      <div className={classes["sidebar_container"]}>
        <SmallSidebar />
        <BigSidebar />
      </div>
      <div className={classes["content_container"]}>
        <Navbar />
        <Outlet />
      </div>
    </main>
  );
};
