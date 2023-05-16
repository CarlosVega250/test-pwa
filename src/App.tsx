import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
const About = lazy(() => import("./About"));
const Home = lazy(() => import("./Home"));

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="about" element={<About />}></Route>
    </Routes>
  </Router>    
);

export default App;