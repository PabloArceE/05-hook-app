import React from "react";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import AboutScree from "./AboutScree";
import HomeScreen from "./HomeScreen";
import LoginScreen from "./LoginScreen";

export const AppRouter = () => {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </div>

      <Routes>
        <Route exact path="/login" element={<LoginScreen />} />
        <Route exact path="/about" element={<AboutScree />} />
        <Route exact path="/" element={<HomeScreen />} />
      </Routes>
    </Router>
  );
};
