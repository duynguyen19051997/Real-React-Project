import "./App.css";
import { FeaturedProducts } from "./components/featuredProducts";
import { Footer } from "./components/footer";
import { Header } from "./components/header";
import { MainHome } from "./components/mainHome";
import { Services } from "./components/services";

function App() {
  return (
    <div className="App">
      <Header />
      <MainHome />
      <FeaturedProducts />
      <Services />
      <Footer />
    </div>
  );
}

export default App;
