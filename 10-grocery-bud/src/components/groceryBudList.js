import React from "react";

import classes from "./groceryBudList.module.css";
import deleteIcon from "../../src/delete.svg";
import editIcon from "../../src/edit.svg";

export const GroceryBudList = (props) => {
  const items = props.items;

  const removeHandle = (id, e) => {
    e.preventDefault();
    props.onRemove(id);
  };

  const editHandle = (id, e) => {
    props.onGet(id);
    e.preventDefault();
  };

  const clearItemsHandle = (e) => {
    e.preventDefault();
    props.onClear();
  };

  return (
    <div className={classes["grocery_list"]}>
      {items &&
        items.length > 0 &&
        items.map((i) => (
          <article key={i.id} className={classes["grocery_item"]}>
            <p>{i.name}</p>
            <button
              className={classes["btn"]}
              onClick={(e) => editHandle(i.id, e)}
            >
              <img src={editIcon} alt="Edit" />
            </button>
            <button
              className={classes["btn"]}
              onClick={(e) => removeHandle(i.id, e)}
            >
              <img src={deleteIcon} alt="Delete" />
            </button>
          </article>
        ))}
      {items && items.length > 0 && (
        <div className={classes["clear_items"]}>
          <button
            className={classes["btn_clear_items"]}
            onClick={clearItemsHandle}
          >
            Clear Items
          </button>
        </div>
      )}
    </div>
  );
};
