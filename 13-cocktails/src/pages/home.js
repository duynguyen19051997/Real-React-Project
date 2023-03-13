import React from "react";
import CocktailList from "../components/cocktailList";
import { CocktailSearch } from "../components/cocktailSearch";

export const Home = () => {
  return (
    <section>
      <CocktailSearch />
      <CocktailList />
    </section>
  );
};
