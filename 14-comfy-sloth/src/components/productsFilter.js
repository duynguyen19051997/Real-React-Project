import React from "react";
import { FaCheck } from "react-icons/fa";

import classes from "./productsFilter.module.css";
import { useFiltersContext } from "../contexts/filterContext";
import { formatPrice, getUniqueValues } from "../utils/helpers";
import { ALL_FILTER_DEFAULTS } from "../actions/filterActions";

export const ProductsFilter = (props) => {
  const { filters, all_products, updateFilters, clearFilters } =
    useFiltersContext();
  const arrCategories = getUniqueValues(all_products, "category");
  const arrCompanies = getUniqueValues(all_products, "company");
  const arrColors = getUniqueValues(all_products, "colors", false);

  return (
    <section className={classes["products_filter_container"]}>
      <form
        className={classes["filter_form"]}
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <div className={classes["form_control"]}>
          <input
            type="text"
            name="text"
            placeholder="Search"
            className={classes["search_input"]}
            value={filters.text}
            onChange={updateFilters}
          />
        </div>
        <div className={classes["form_control"]}>
          <h5>categories</h5>
          {arrCategories.length > 0 &&
            arrCategories.map((x, index) => {
              return (
                <button
                  key={index}
                  className={`btn ${classes["btn_filter"]} ${
                    filters.category === x ? classes["active"] : ""
                  }`}
                  type="button"
                  name="category"
                  onClick={updateFilters}
                  value={x}
                >
                  {x}
                </button>
              );
            })}
        </div>
        <div className={classes["form_control"]}>
          <h5>companies</h5>
          <select
            value={filters.company}
            name="company"
            onChange={updateFilters}
          >
            {arrCompanies.length > 0 &&
              arrCompanies.map((x, index) => (
                <option key={index} defaultValue={x}>
                  {x}
                </option>
              ))}
          </select>
        </div>
        <div className={classes["form_control"]}>
          <h5>colors</h5>
          <div className={classes["color_option"]}>
            <button
              className={`btn ${classes["btn_filter"]} ${
                filters.color === ALL_FILTER_DEFAULTS ? classes["active"] : ""
              }`}
              type="button"
              name="color"
              onClick={updateFilters}
              data-color={ALL_FILTER_DEFAULTS}
            >
              All
            </button>
            {arrColors.length > 0 &&
              arrColors.map((x, index) => {
                return (
                  <button
                    key={index}
                    className={`btn ${classes["btn_color"]}`}
                    style={{
                      backgroundColor: x,
                    }}
                    type="button"
                    name="color"
                    onClick={updateFilters}
                    data-color={x}
                  >
                    <FaCheck
                      style={{
                        color: `${x === filters.color ? "white" : x}`,
                        fontWeight: "bolder",
                      }}
                    />
                  </button>
                );
              })}
          </div>
        </div>
        <div className={classes["form_control"]}>
          <h5>prices</h5>
          <p>{formatPrice(filters.price)}</p>
          <input
            type="range"
            name="price"
            min={filters.min_price}
            max={filters.max_price}
            value={filters.price}
            onChange={updateFilters}
          />
        </div>
        <div
          className={`${classes["form_control"]} ${classes["form_control_inline"]}`}
        >
          <p>Free shipping</p>
          <input
            type="checkbox"
            name="free_shipping"
            value={filters.free_shipping}
            onChange={updateFilters}
          ></input>
        </div>
        <div className={classes["form_control_inline"]}>
          <button
            className={`btn ${classes["btn_clear_filter"]}`}
            onClick={(e) => {
              e.preventDefault();
              clearFilters();
            }}
          >
            Clear filter
          </button>
        </div>
      </form>
    </section>
  );
};
