import { Routes, Route } from "react-router-dom";
import "./App.css";
import { About } from "./pages/about";
import { Home } from "./pages/home";
import { Products } from "./pages/products";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/about-me" element={<About />}></Route>
        <Route path="/products/:proId" element={<Products />}></Route>
        <Route path="*" index element={<Home />}></Route>
      </Routes>
    </div>
  );
}

export default App;
