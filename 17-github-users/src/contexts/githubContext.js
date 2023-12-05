import React, { useContext, useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { followers } from "./data/followers";
import { user as defaultUser } from "./data/user";
import { repos } from "./data/repos";

const GithubContext = React.createContext();

export const GithubProvider = ({ children }) => {
  const { user, loginWithRedirect, logout } = useAuth0();
  const [myUser, setMyUser] = useState(null);
  const [githubUser] = useState(defaultUser);
  const [githubFollowers] = useState(followers);

  useEffect(() => {
    setMyUser(user);
  }, [user]);

  return (
    <GithubContext.Provider
      value={{
        githubFollowers,
        githubUser,
        repos,
        myUser,
        loginWithRedirect,
        logout,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export const useGithubContext = () => {
  return useContext(GithubContext);
};
