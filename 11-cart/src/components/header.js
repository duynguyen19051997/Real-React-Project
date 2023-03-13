import React from "react";
import { AiOutlineShopping } from "react-icons/ai";
import { useCartContext } from "../Context/cartContext";

import classes from "./header.module.css";

export const Header = (props) => {
  const { amount } = useCartContext();

  return (
    <nav className={classes["nav"]}>
      <div className={classes["header"]}>
        <h3>Use Reducer & Context</h3>
        <div className={classes["header_icon"]}>
          <AiOutlineShopping className={classes["icon"]} />
          <div className={classes["number"]}>
            <p>{amount}</p>
          </div>
        </div>
      </div>
    </nav>
  );
};
