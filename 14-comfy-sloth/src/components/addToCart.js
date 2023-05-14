import React, { useState } from "react";
import { FaMinus, FaPlus, FaCheck } from "react-icons/fa";

import classes from "./addToCart.module.css";

export const AddToCart = ({ singleProduct = {} }) => {
  const { colors = [] } = singleProduct;
  const [amount, setAmount] = useState(1);
  const [mainColor, setMainColor] = useState(colors[0]);

  const incrementAmountHandle = (event) => {
    event.preventDefault();
    setAmount((prevState) => {
      if (prevState < singleProduct.stock) {
        return prevState + 1;
      }
      return prevState;
    });
  };

  const decreaseAmountHandle = (event) => {
    event.preventDefault();
    setAmount((prevState) => {
      if (prevState > 1) {
        return prevState - 1;
      }
      return prevState;
    });
  };

  return (
    <div className={classes["action"]}>
      <div className={classes["action_colors"]}>
        <span className={classes["label"]}>Colors:</span>
        {singleProduct.colors &&
          singleProduct.colors.map((x, index) => {
            return (
              <button
                key={index}
                className={`btn ${classes["btn_color"]}`}
                style={{
                  backgroundColor: x,
                }}
                onClick={(event) => {
                  event.preventDefault();
                  setMainColor(x);
                }}
              >
                <FaCheck
                  style={{
                    color: `${
                      x === mainColor
                        ? `${x === "white" ? "#ab7a5f" : "white"}`
                        : x
                    }`,
                    fontWeight: "bolder",
                  }}
                />
              </button>
            );
          })}
      </div>
      <div className={classes["action_amount"]}>
        <button
          className={`btn`}
          onClick={decreaseAmountHandle}
          disabled={amount === 1}
        >
          <FaMinus />
        </button>
        <h3>{amount}</h3>
        <button
          className={`btn`}
          onClick={incrementAmountHandle}
          disabled={singleProduct.stock === amount}
        >
          <FaPlus />
        </button>
      </div>
      {singleProduct.stock > 0 && (
        <button className={`btn ${classes["btn_detail"]}`}>Add to cart</button>
      )}
    </div>
  );
};
