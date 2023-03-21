import React from "react";
import { FaMinus, FaPlus, FaTrashAlt } from "react-icons/fa";
import { BsFillCircleFill } from "react-icons/bs";

import classes from "./cart.module.css";

export const Cart = (props) => {
  return (
    <section className={classes["cart_container"]}>
      <table className={classes["cart_table"]}>
        <thead>
          <tr>
            <th>Item</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Subtotal</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className={classes["item_info"]}>
                <img
                  src="https://images2.imgbox.com/8b/13/XwC9OolK_o.jpeg"
                  alt=""
                />
                <div className={classes["info_detail"]}>
                  <p className={classes["title"]}>modern poster</p>
                  <p className={classes["color"]}>
                    Color:{" "}
                    <BsFillCircleFill
                      style={{ color: "black", fontSize: "1.1rem" }}
                    />
                  </p>
                </div>
              </div>
            </td>
            <td style={{ color: "#b0836a" }}>$30.99</td>
            <td>
              <div className={classes["quantity_action"]}>
                <button className={`btn`}>
                  <FaMinus />
                </button>
                <h2>5</h2>
                <button className={`btn`}>
                  <FaPlus />
                </button>
              </div>
            </td>
            <td style={{ color: "#b0836a" }}>$30.99</td>
            <td>
              <button className={`btn ${classes["btn_clear_item"]}`}>
                <FaTrashAlt />
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  );
};
