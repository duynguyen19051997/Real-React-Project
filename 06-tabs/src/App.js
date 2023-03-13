import React, { useState, useEffect } from "react";

import "./App.css";
import { Experience } from "./components/experience";
import { LeftMenu } from "./components/leftMenu";

import { tabsData } from "./data.js";

function App() {
  const companiesList = [...new Set(tabsData.map((m) => m.companyName))];
  const companiesOL = companiesList.map((x, index) => {
    return { id: index + 1, name: x };
  });

  const [menuActive, setMenuActive] = useState(tabsData[0].companyName);
  const [tab, setTab] = useState({});
  const clickMenuHandle = (x) => {
    setMenuActive(x);
  };

  useEffect(() => {
    setTab(tabsData.find((x) => x.companyName === menuActive));
  }, [menuActive]);

  return (
    <div className="App">
      <div className="title">
        <h1>experience</h1>
        <div className="line"></div>
      </div>
      <section className="container">
        <LeftMenu
          companies={companiesOL}
          onClickLeftMenu={clickMenuHandle}
          menuActive={menuActive}
        />
        <Experience tab={tab} />
      </section>
    </div>
  );
}

export default App;
