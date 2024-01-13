import React, { useContext, useEffect, useState } from "react";
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
  const [githubUser] = useState(defaultUser);
  const [githubFollowers] = useState(followers);
  const [githubRepos] = useState(repos);
  const [requests, setRequests] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [rateError, setRateError] = useState({ show: false, message: "" });

  const checkRequests = () => {
    axios(`${rootUrl}/rate_limit`)
      .then(({ data }) => {
        let remaining = data.rate.remaining;
        setRequests(remaining);

        if (remaining === 0) {
          toggleError(true, "Sorry, you have exceeded your hourly rate limit!");
        }
      })
      .catch((err) => console.log(err));
  };

  const toggleError = (show, message) => {
    setRateError({ show, message });
  };

  useEffect(() => {
    checkRequests();
  }, []);

  useEffect(() => {
    setMyUser(user);
  }, [user]);

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
