import React from "react";

import { FaCircle } from "react-icons/fa";

import classes from "./productsFilter.module.css";

export const ProductsFilter = (props) => {
  return (
    <section className={classes["products_filter_container"]}>
      <form className={classes["filter_form"]}>
        <div className={classes["form_control"]}>
          <input
            type="text"
            name="search"
            placeholder="Search"
            className={classes["search_input"]}
          />
        </div>
        <div className={classes["form_control"]}>
          <h5>categories</h5>
          <button
            className={`btn ${classes["btn_filter"]} ${classes["active"]}`}
          >
            All
          </button>
          <button className={`btn ${classes["btn_filter"]}`}>Office</button>
          <button className={`btn ${classes["btn_filter"]}`}>
            Living room
          </button>
          <button className={`btn ${classes["btn_filter"]}`}>kitchen</button>
          <button className={`btn ${classes["btn_filter"]}`}>bedroom</button>
          <button className={`btn ${classes["btn_filter"]}`}>dinning</button>
          <button className={`btn ${classes["btn_filter"]}`}>kids</button>
        </div>
        <div className={classes["form_control"]}>
          <h5>companies</h5>
          <select>
            <option defaultValue="0">All</option>
            <option defaultValue="1">Macos</option>
            <option defaultValue="2">Liddy</option>
            <option defaultValue="3">ikea</option>
            <option defaultValue="4">caressa</option>
          </select>
        </div>
        <div className={classes["form_control"]}>
          <h5>colors</h5>
          <div className={classes["color_option"]}>
            <button className={`btn ${classes["btn_filter"]}`}>All</button>
            <button className={`btn ${classes["btn_filter"]}`}>
              <FaCircle
                className={classes["color_icon"]}
                style={{ color: "#ff7e7e" }}
              />
            </button>
            <button className={`btn ${classes["btn_filter"]}`}>
              <FaCircle
                className={classes["color_icon"]}
                style={{ color: "#7eff7e" }}
              />
            </button>
            <button className={`btn ${classes["btn_filter"]}`}>
              <FaCircle
                className={`${classes["color_icon"]} ${classes["active_color"]}`}
                style={{ color: "#7e7eff" }}
              />
            </button>
            <button className={`btn ${classes["btn_filter"]}`}>
              <FaCircle
                className={classes["color_icon"]}
                style={{ color: "#7e7e7e" }}
              />
            </button>
            <button className={`btn ${classes["btn_filter"]}`}>
              <FaCircle
                className={classes["color_icon"]}
                style={{ color: "#ffdb7e" }}
              />
            </button>
          </div>
        </div>
        <div className={classes["form_control"]}>
          <h5>prices</h5>
          <p>$1000</p>
          <input type="range" name="price" min="0" max="32000" />
        </div>
        <div
          className={`${classes["form_control"]} ${classes["form_control_inline"]}`}
        >
          <p>Free shipping</p>
          <input type="checkbox" name="free_shipping"></input>
        </div>
        <div className={classes["form_control_inline"]}>
          <button className={`btn ${classes["btn_clear_filter"]}`}>
            Clear filter
          </button>
        </div>
      </form>
    </section>
  );
};
