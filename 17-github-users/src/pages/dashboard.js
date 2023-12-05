import React, { useEffect } from "react";
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
import { useGithubContext } from "../contexts/githubContext";
import { useNavigate } from "react-router-dom";

export const Dashboard = () => {
  const { myUser } = useGithubContext();
  const navigate = useNavigate();

  // useEffect(() => {
  //   if (!myUser) {
  //     navigate("/register");
  //   }
  // }, [myUser, navigate]);

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
