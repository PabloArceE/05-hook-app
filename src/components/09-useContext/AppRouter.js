import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import AboutScree from "./AboutScree";
import HomeScreen from "./HomeScreen";
import LoginScreen from "./LoginScreen";
import Error404Screen from "./404Screen";
import NavBar from "./NavBar";

export const AppRouter = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route exact path="/login" element={<LoginScreen />} />
        <Route exact path="/about" element={<AboutScree />} />
        <Route exact path="/" element={<HomeScreen />} />
        <Route path="*" element={<Error404Screen />} />              
      </Routes>
    </Router>
  );
};
