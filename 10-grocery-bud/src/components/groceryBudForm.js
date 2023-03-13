import React, { useState, useEffect } from "react";

import classes from "./groceryBudForm.module.css";

export const GroceryBudForm = (props) => {
  const isEdit = props.isEdit;
  const [item, setItem] = useState({
    id: 0,
    name: "",
  });

  useEffect(() => {
    if (isEdit === 1) {
      setItem(props.editedItem);
    }
  }, [isEdit, props.editedItem]);

  const changeNameHandle = (e) => {
    e.preventDefault();
    const enteredName = e.target.value;
    setItem({ ...item, name: enteredName });
  };

  const submitHandle = (e) => {
    e.preventDefault();
    if (isEdit) {
      props.onEdit(item.id, item.name);
    } else {
      props.onAdd(item.name);
    }
    setItem({ id: 0, name: "" });
  };

  return (
    <div className={classes["grocery_form"]}>
      <h1>grocery bud</h1>
      <form onSubmit={submitHandle}>
        <input
          type="text"
          className={classes["grocery_form_input"]}
          placeholder="e.g"
          value={item.name}
          onChange={changeNameHandle}
        />
        <button
          type="submit"
          className={classes["grocery_form_submit"]}
          onClick={submitHandle}
        >
          Submit
        </button>
      </form>
    </div>
  );
};
