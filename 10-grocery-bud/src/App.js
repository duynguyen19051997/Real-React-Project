import React, { useState, useEffect } from "react";
import { GroceryBudForm } from "./components/groceryBudForm";
import { GroceryBudList } from "./components/groceryBudList";
import { ErrorMessage } from "./components/errorMessage";

import "./App.css";

function App() {
  const [items, setItems] = useState([]);
  const [errorResult, setErrorResult] = useState(-1);
  const [message, setMessage] = useState("");
  const [isEdit, setIsEdit] = useState(0);
  const [editedItem, setEditedItem] = useState({ id: 0, name: "" });

  const addItemHandle = (name) => {
    if (name !== "") {
      setItems((prevItem) => [
        ...prevItem,
        { id: Math.random().toString(), name: name },
      ]);
      setMessage("Add item successful!");
      setErrorResult(1);
    } else {
      setErrorResult(0);
      setMessage("Add item failed!");
    }
  };

  const clearItemHandle = () => {
    setItems([]);
    setErrorResult(2);
    setMessage("Clear items successful!");
  };

  const removeItemHandle = (id) => {
    const removedItem = items.find((x) => x.id === id);
    setItems((prevItem) => prevItem.filter((x) => x.id !== id));
    setErrorResult(3);
    setMessage(`Remove ${removedItem.name} successful`);
  };

  const editItemHandle = (id, name) => {
    const edited = items.find((x) => x.id === id);
    if (edited.name !== name) {
      setItems((prevItem) => {
        const index = prevItem.findIndex((x) => x.id === id);
        prevItem[index].name = name;
        return prevItem;
      });
      setErrorResult(4);
      setMessage("Update successful!");
    } else {
      setErrorResult(0);
      setMessage("Don't change!");
    }
    setIsEdit(0);
  };

  const getItemHandle = (id) => {
    setEditedItem(items.find((x) => x.id === id));
    setIsEdit(1);
  };

  useEffect(() => {
    let timer;
    if (errorResult > -1) {
      timer = setTimeout(() => {
        setErrorResult(-1);
      }, 5000);
    }
    return () => clearTimeout(timer);
  }, [errorResult]);

  return (
    <div className="App">
      {errorResult > -1 && (
        <ErrorMessage errorResult={errorResult} message={message} />
      )}
      {isEdit === 0 ? (
        <GroceryBudForm
          onAdd={addItemHandle}
          isEdit={isEdit}
          editedItem={{ id: 0, name: "" }}
        />
      ) : (
        <GroceryBudForm
          onEdit={editItemHandle}
          isEdit={isEdit}
          editedItem={editedItem}
        />
      )}
      <GroceryBudList
        items={items}
        onClear={clearItemHandle}
        onRemove={removeItemHandle}
        onGet={getItemHandle}
      />
    </div>
  );
}

export default App;
