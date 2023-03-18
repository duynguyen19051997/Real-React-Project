import React from "react";
import { Route, Routes } from "react-router-dom";
import { Footer } from "./components/footer";
import { Header } from "./components/header";
import { Home } from "./pages/home";
import "./App.css";
import { ProductsPage } from "./pages/productsPage";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route exact path="/products" element={<ProductsPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
