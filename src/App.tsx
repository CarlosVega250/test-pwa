import { Link } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./About";
import Home from "./Home";

const App = () => (
  <Router>
    <Link to="/about">About</Link>
    <br />
    <Link to="/">Home</Link>
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="about" element={<About />}></Route>
    </Routes>
  </Router>    
);

export default App;