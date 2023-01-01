import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Home } from "./components/home/home";
import { Register } from "./components/register/register";
import { Login } from "./components/login/login";
export const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Routes>
          <Route path="/login" element={<Login />} />
        </Routes>
        <Routes>
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>
    </>
  );
};
