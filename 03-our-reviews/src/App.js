import "./App.css";
import { Review } from "./components/review";

function App() {
  return (
    <div className="App">
      <div className="header">
        <h1>Our Reviews</h1>
        <div className="line"></div>
      </div>
      <Review />
    </div>
  );
}

export default App;
