import "./App.css";
import React from "react";
import { Header } from "./components/header";
import { Routes, Route } from "react-router-dom";
import { Details } from "./pages/details";
import { Home } from "./pages/home";
import { About } from "./pages/about";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route exact path="/details/:id" element={<Details />} />
        <Route exact path="/about" element={<About />} />
        <Route path="/*" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
