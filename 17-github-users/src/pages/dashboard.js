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

  const { githubRepos } = useGithubContext();

  let languagesData = githubRepos.reduce((total, { language }) => {
    if (!language) return total;
    if (!total[language]) {
      total[language] = { label: language, value: 1 };
    } else {
      total[language] = {
        ...total[language],
        value: total[language].value + 1,
      };
    }
    return total;
  }, {});

  languagesData = Object.values(languagesData).sort((a, b) => {
    return a.value - b.value;
  });

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
          <Languages data={languagesData} />
          <MostPopular />
          <StarsPerLanguage data={languagesData} />
          <MostForked />
        </section>
      </section>
    </main>
  );
};
