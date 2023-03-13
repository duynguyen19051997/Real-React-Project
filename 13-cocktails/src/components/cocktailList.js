import React from "react";
import { useCocktailsContext } from "../contexts/cocktailsContext";
import CocktailItem from "./cocktailItem";
import classes from "./cocktailList.module.css";
import { Loading } from "./loading";

const CocktailList = (props) => {
  const { items, isLoading } = useCocktailsContext();

  return (
    <section className={classes["cocktail_list_area"]}>
      <h2>cocktails</h2>
      {isLoading && <Loading />}
      {!isLoading && items.length < 1 && (
        <div className={classes["not_found"]}>
          <h3>No cocktails matched your search credentials</h3>
        </div>
      )}
      {!isLoading && items.length > 0 && (
        <div className={classes["cocktail_center"]}>
          {items.map((x) => (
            <CocktailItem key={x.id} {...x} />
          ))}
        </div>
      )}
    </section>
  );
};

export default CocktailList;
