import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import classes from "./cocktailDetails.module.css";
import { Loading } from "./loading";

const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

export const CocktailDetails = (props) => {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [cocktail, setCocktail] = useState(null);

  const getCocktail = useCallback(() => {
    setIsLoading(true);
    axios
      .get(`${url}${id}`)
      .then((response) => {
        const data = response.data.drinks;
        if (data && data.length > 0) {
          setCocktail(
            data.map((x) => {
              const {
                idDrink,
                strDrink,
                strCategory,
                strAlcoholic,
                strGlass,
                strInstructions,
                strDrinkThumb,
                strIngredient1,
                strIngredient2,
                strIngredient3,
                strIngredient4,
                strIngredient5,
                strIngredient6,
                strIngredient7,
                strIngredient8,
                strIngredient9,
                strIngredient10,
                strIngredient11,
                strIngredient12,
                strIngredient13,
                strIngredient14,
                strIngredient15,
              } = x;

              const arrIngredients = [
                strIngredient1,
                strIngredient2,
                strIngredient3,
                strIngredient4,
                strIngredient5,
                strIngredient6,
                strIngredient7,
                strIngredient8,
                strIngredient9,
                strIngredient10,
                strIngredient11,
                strIngredient12,
                strIngredient13,
                strIngredient14,
                strIngredient15,
              ];
              return {
                id: idDrink,
                name: strDrink,
                category: strCategory,
                glass: strGlass,
                instructions: strInstructions,
                src: strDrinkThumb,
                alcoholic: strAlcoholic,
                ingredients: arrIngredients.join(" "),
              };
            })[0]
          );
        } else {
          setCocktail(null);
        }
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
        console.error(err);
      });
  }, [id]);

  useEffect(() => {
    getCocktail();
  }, [getCocktail]);

  if (isLoading) {
    return <Loading />;
  }

  if (cocktail) {
    return (
      <section className={classes["details_area"]}>
        <div className={classes["img_area"]}>
          <img src={cocktail.src} alt={cocktail.name} />
        </div>
        <div className={classes["content_area"]}>
          <table>
            <tbody>
              <tr>
                <td>
                  <p className={classes["label"]}>Name</p>
                </td>
                <td>
                  <p className={classes["content"]}>{cocktail.name}</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p className={classes["label"]}>category</p>
                </td>
                <td>
                  <p className={classes["content"]}>{cocktail.category}</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p className={classes["label"]}>info</p>
                </td>
                <td>
                  <p className={classes["content"]}>{cocktail.alcoholic}</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p className={classes["label"]}>glass</p>
                </td>
                <td>
                  <p className={classes["content"]}>{cocktail.glass}</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p className={classes["label"]}>instructions</p>
                </td>
                <td>
                  <p className={classes["content"]}>{cocktail.instructions}</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p className={classes["label"]}>ingredients</p>
                </td>
                <td>
                  <p className={classes["content"]}>{cocktail.ingredients}</p>
                </td>
              </tr>
              <tr>
                <td colSpan="2">
                  <Link to={"/"} className={classes["btn_back_home"]}>
                    back home
                  </Link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    );
  }

  return (
    <div className={classes["not_found"]}>
      <h3>No cocktails</h3>
      <Link to={"/"} className={classes["btn_back_home"]}>
        back home
      </Link>
    </div>
  );
};
