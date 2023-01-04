import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { setAuthToken } from "./components/helpers/setAuthToken";
import { Home } from "./components/home/home";
import { Register } from "./components/register/register";
import { Login } from "./components/login/login";
import  ProtectedRoute  from "./components/helpers/protectedRoute";
import { Dashboard } from "./components/admin/dashboard";
import { AddProject } from "./components/admin/addProject";
import { AllProjects } from "./components/admin/projects";
import { EditProject } from "./components/admin/editProject";
import { AuthProvider } from "./components/helpers/authProvider";
export const App = () => {

  //check jwt token
  const token = localStorage.getItem("token");
  if (token) {
    setAuthToken(token);
  }

  return (
    
    <AuthProvider>
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
          >
              <Route path='addproject' element={<AddProject />} /> {/*A nested route!*/}
              <Route path='allprojects' element={<AllProjects />} /> {/*A nested route!*/}
              <Route path='editproject/:id' element={<EditProject />} /> {/*A nested route!*/} 
            </Route>
       
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Routes>
      </Router>
    </>
    </AuthProvider>
  );
};
