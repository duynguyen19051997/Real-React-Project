import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

import classes from "../../assets/css/SharedLayout.module.css";
import {
  BigSidebar,
  Modal,
  Navbar,
  SmallSidebar,
} from "../../components/index";

export const SharedLayout = (props) => {
  const [isShowSideBar, setIsShowSideBar] = useState(true);
  const [size, setSize] = useState(0);

  useEffect(() => {
    const resizeHandle = () => {
      setSize(window.innerWidth);
    };
    window.addEventListener("resize", resizeHandle);
    return (_) => {
      window.removeEventListener("resize", resizeHandle);
    };
  }, []);

  return (
    <main className={classes["dashboard_container"]}>
      {isShowSideBar && (
        <div className={classes["sidebar_container"]}>
          <BigSidebar />
          {size <= 1100 && (
            <Modal
              isShow={isShowSideBar}
              onClose={() => setIsShowSideBar(!isShowSideBar)}
            >
              <SmallSidebar onClose={() => setIsShowSideBar(!isShowSideBar)} />
            </Modal>
          )}
        </div>
      )}
      <div className={classes["content_container"]}>
        <Navbar onShowSidebar={() => setIsShowSideBar(!isShowSideBar)} />
        <Outlet />
      </div>
    </main>
  );
};
