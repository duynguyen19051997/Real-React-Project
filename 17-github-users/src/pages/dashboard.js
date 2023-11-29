import React from "react";
import classes from "../assets/css/Dashboard.module.css";
import {
  Followers,
  Intro,
  Languages,
  MostForked,
  MostPopular,
  Navbar,
  Search,
  StarsPerLanguage,
  User,
} from "../components";

export const Dashboard = () => {
  return (
    <main className={classes["dashboard_container"]}>
      <Navbar />
      <section className={classes["dashboard_center"]}>
        <Search />
        <Intro />
        <section className={classes["info_container"]}>
          <User />
          <Followers />
        </section>
        <section className={classes["chart_container"]}>
          <Languages />
          <MostPopular />
          <StarsPerLanguage />
          <MostForked />
        </section>
      </section>
    </main>
  );
};
