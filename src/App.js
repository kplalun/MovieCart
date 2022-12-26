import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Cart from "./components/Cart";

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Cart" element={<Cart />} />
        <Route path="*" element={<h1>Page not Found</h1>} />
      </Routes>
    </Router>
  );
}

export default App;
