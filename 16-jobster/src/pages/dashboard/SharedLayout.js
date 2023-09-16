import React, { useState } from "react";
import { Outlet } from "react-router-dom";

import classes from "../../assets/css/SharedLayout.module.css";
import { BigSidebar, Navbar, SmallSidebar } from "../../components/index";

export const SharedLayout = (props) => {
  const [isShowBigSideBar, setIsShowBigSideBar] = useState(true);

  return (
    <main className={classes["dashboard_container"]}>
      <div className={classes["sidebar_container"]}>
        {isShowBigSideBar && <BigSidebar />}
        {/* <SmallSidebar /> */}
      </div>
      <div className={classes["content_container"]}>
        <Navbar
          onShowBigSidebar={() => {
            setIsShowBigSideBar(!isShowBigSideBar);
          }}
        />
        <Outlet />
      </div>
    </main>
  );
};
