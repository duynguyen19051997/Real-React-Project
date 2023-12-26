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
  Loading,
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

  const { githubRepos, isLoading } = useGithubContext();

  const languages = githubRepos.reduce(
    (total, { language, stargazers_count }) => {
      if (!language) return total;
      if (!total[language]) {
        total[language] = {
          label: language,
          value: 1,
          stars: stargazers_count,
        };
      } else {
        total[language] = {
          ...total[language],
          value: total[language].value + 1,
          stars: total[language].stars + stargazers_count,
        };
      }
      return total;
    },
    {}
  );

  const languagesData = Object.values(languages).sort((a, b) => {
    return a.value - b.value;
  });

  const { stars, forks } = githubRepos.reduce(
    (total, { stargazers_count, name, forks }) => {
      total.stars[stargazers_count] = { label: name, value: stargazers_count };
      total.forks[forks] = { label: name, value: forks };
      return total;
    },
    {
      stars: {},
      forks: {},
    }
  );

  const mostPopularData = Object.values(stars).slice(-5).reverse();
  const mostForkedData = Object.values(forks).slice(-5).reverse();

  return (
    <main className={classes["dashboard_container"]}>
      <Navbar />
      <section className={classes["dashboard_center"]}>
        <Search />
        {isLoading && <Loading />}
        {!isLoading && (
          <>
            <Intro />
            <section className={classes["info_container"]}>
              <User />
              <Followers />
            </section>
            <section className={classes["chart_container"]}>
              <Languages data={languagesData} />
              <MostPopular data={mostPopularData} />
              <StarsPerLanguage data={languagesData} />
              <MostForked data={mostForkedData} />
            </section>
          </>
        )}
      </section>
    </main>
  );
};
