import React, { useCallback, useContext, useEffect, useState } from "react";
import axios from "axios";

const initialCocktails = {
  items: [],
  search: "",
  isLoading: false,
};

const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";
const CocktailsContext = React.createContext(initialCocktails);

const CocktailsProvider = (props) => {
  const [items, setItems] = useState([]);
  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = useCallback(() => {
    setIsLoading(true);
    axios
      .get(`${url}${search}`)
      .then((response) => {
        const data = response.data.drinks;
        if (data && data.length > 0) {
          setItems(
            data.map((x) => {
              const {
                idDrink,
                strDrink,
                strCategory,
                strAlcoholic,
                strGlass,
                strInstructions,
                strDrinkThumb,
              } = x;
              return {
                id: idDrink,
                name: strDrink,
                category: strCategory,
                glass: strGlass,
                instructions: strInstructions,
                src: strDrinkThumb,
                alcoholic: strAlcoholic,
              };
            })
          );
        } else {
          setItems([]);
        }
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
        console.error(err);
      });
  }, [search]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <CocktailsContext.Provider value={{ items, isLoading, search, setSearch }}>
      {props.children}
    </CocktailsContext.Provider>
  );
};

export const useCocktailsContext = () => {
  return useContext(CocktailsContext);
};

export { CocktailsContext, CocktailsProvider };
