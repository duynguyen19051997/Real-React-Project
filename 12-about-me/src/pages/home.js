import React from "react";
import { Link } from "react-router-dom";

export const Home = () => {
  document.title = "Home";
  return (
    <div>
      <h2>Home Page</h2>
      <Link to="/products">Products</Link>
      <br />
      <Link to="/about-me">About Me</Link>
    </div>
  );
};
