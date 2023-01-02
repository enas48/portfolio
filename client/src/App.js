import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { setAuthToken } from "./components/helpers/setAuthToken";
import { Home } from "./components/home/home";
import { Register } from "./components/register/register";
import { Login } from "./components/login/login";
import  ProtectedRoute  from "./components/helpers/protectedRoute";
import { Dashboard } from "./components/admin/dashboard";
export const App = () => {
  //check jwt token
  const token = localStorage.getItem("token");
  if (token) {
    setAuthToken(token);
  }
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Routes>
      </Router>
    </>
  );
};
