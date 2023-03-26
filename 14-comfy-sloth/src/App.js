import React from "react";
import { Route, Routes } from "react-router-dom";
import { Footer } from "./components/footer";
import { Header } from "./components/header";
import { Home } from "./pages/home";
import { ProductsPage } from "./pages/productsPage";
import { ProductDetailPage } from "./pages/productDetailPage";
import { CartPage } from "./pages/cartPage";
import { AboutPage } from "./pages/aboutPage";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route exact path="/products" element={<ProductsPage />} />
        <Route path="/products/:productId" element={<ProductDetailPage />} />
        <Route exact path="/cart" element={<CartPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
