import React from "react";
import "./App.css";
import { Cart } from "./components/cart";
import { Header } from "./components/header";
import { useCartContext } from "./Context/cartContext";

function App() {
  const { isLoading } = useCartContext();
  console.log("APP");

  return (
    <div className="App">
      {isLoading && (
        <div className="Loading">
          <h3>Loading...</h3>
        </div>
      )}
      {!isLoading && <Header />}
      {!isLoading && <Cart />}
    </div>
  );
}

export default App;
