import Navbar from "./components/Navbar";
import Home from "./components/Home";
import CategoryMenu from "./components/CategoryMenu";
import FoodItems from "./components/FoodItems";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Navbar />
      <main>
        <div id="home">
          <Home />
        </div>
        <CategoryMenu />
        <div id="dishes">
          <FoodItems />
        </div>
      </main>
      {/* <Cart /> */}

      <Router>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
