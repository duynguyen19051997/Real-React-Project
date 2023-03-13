import React, { useState, useEffect } from "react";

import "./App.css";
import { Filter } from "./components/filter";
import { Item } from "./components/item";

import { menuData } from "../src/data";

function App() {
  const [menu, setMenu] = useState(menuData);
  const [filter, setFilter] = useState("all");
  const categoriesList = [...new Set(menuData.map((m) => m.category))];
  const categoriesOL = categoriesList.map((x, index) => {
    return { id: index + 1, name: x };
  });

  const filterHandler = (x) => {
    // if (x === "all") {
    //   setMenu(menuData);
    // } else {
    //   setMenu(menuData.filter((item) => item.category === x));
    // }
    setFilter(x);
  };

  useEffect(() => {
    if (filter !== "all") {
      setMenu(menuData.filter((item) => item.category === filter));
    } else {
      setMenu(menuData);
    }
  }, [filter]);

  return (
    <div className="App">
      <Filter
        onFilter={filterHandler}
        filter={filter}
        categories={categoriesOL}
      />
      <section className="container">
        {menu &&
          menu.length > 0 &&
          menu.map((m) => <Item key={m.id} item={m} />)}
      </section>
    </div>
  );
}

export default App;
