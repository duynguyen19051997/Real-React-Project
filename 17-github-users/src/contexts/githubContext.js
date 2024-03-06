import React, { useCallback, useContext, useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { followers } from "./data/followers";
import { user as defaultUser } from "./data/user";
import { repos } from "./data/repos";
import axios from "axios";

const GithubContext = React.createContext();
const rootUrl = "https://api.github.com";

export const GithubProvider = ({ children }) => {
  const { user, loginWithRedirect, logout } = useAuth0();
  const [myUser, setMyUser] = useState(null);
  const [githubUser, setGithubUser] = useState(defaultUser);
  const [githubFollowers, setGithubFollowers] = useState(followers);
  const [githubRepos, setGithubRepos] = useState(repos);
  const [requests, setRequests] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [rateError, setRateError] = useState({ show: false, message: "" });

  const checkRequests = useCallback(() => {
    axios(`${rootUrl}/rate_limit`)
      .then(({ data }) => {
        let remaining = data.rate.remaining;
        setRequests(remaining);

        if (remaining === 0) {
          toggleError(true, "Sorry, you have exceeded your hourly rate limit!");
        }
      })
      .catch((err) => console.log(err));
  }, []);

  const searchGithubUser = useCallback(
    async (userName) => {
      setIsLoading(true);
      const response = await axios(`${rootUrl}/users/${userName}`).catch(
        (err) => {
          console.log(err);
        }
      );

      if (response) {
        setGithubUser(response.data);
        const { login, followers_url } = response.data;

        await Promise.allSettled([
          axios(`${rootUrl}/users/${login}/repos?per_page=100`),
          axios(`${followers_url}?per_page=100`),
        ])
          .then((results) => {
            const status = "fulfilled";
            if (results[0].status === status) {
              setGithubRepos(results[0].value.data);
            }
            if (results[1].status === status) {
              setGithubFollowers(results[1].value.data);
            }
          })
          .catch((err) => {
            console.log(err);
          });

        toggleError(false, "");
      } else {
        toggleError(true, "there is no user with that username");
      }
      checkRequests();
      setIsLoading(false);
    },
    [checkRequests]
  );

  const toggleError = (show, message) => {
    setRateError({ show, message });
  };

  useEffect(() => {
    checkRequests();
  }, [checkRequests]);

  useEffect(() => {
    searchGithubUser("duynguyen19051997");
  }, [searchGithubUser]);

  return (
    <GithubContext.Provider
      value={{
        githubFollowers,
        githubUser,
        githubRepos,
        requests,
        myUser,
        isLoading,
        loginWithRedirect,
        logout,
        searchGithubUser,
        rateError,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export const useGithubContext = () => {
  return useContext(GithubContext);
};
