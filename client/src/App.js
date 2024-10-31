import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { setAuthToken } from "./components/helpers/setAuthToken";
import { Home } from "./components/home/home";
// import { Register } from "./components/register/register";
import { Login } from "./components/login/login";
import ProtectedRoute from "./components/helpers/protectedRoute";
import { Dashboard } from "./components/admin/dashboard";
import { AddProject } from "./components/admin/addProject";
import { AllProjects } from "./components/admin/projects";
import { EditProject } from "./components/admin/editProject";
import {DashboardIndex} from "./components/admin/dashboardindex";
import { Profile } from "./components/admin/profile";
import {Notfound} from "./components/notfoud/Notfound"
import AuthVerify from "./components/helpers/AuthVerify";
import AuthContext from "./components/helpers/authContext";
import Sayer from "./components/projects/sayer";
import Eib from "./components/projects/eib";

export const App = () => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [userId, setUserid] = useState(localStorage.getItem("id"));
  const [admin, setAdmin] = useState(localStorage.getItem("admin"));
  const [role, setRole] = useState(false);
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    if (admin === "true") {
      setRole(true);
    } else {
      setRole(false);
    }
    if (localStorage.getItem('theme')) {
      setTheme(localStorage.getItem('theme'))
    } else {
      localStorage.setItem('theme', theme);
    }
  }, [admin,role,theme]);

  const login = (data) => {
    localStorage.setItem("token", data.token);
    localStorage.setItem("id", data._id);
    localStorage.setItem("admin", data.isAdmin);
    setRole(data.isAdmin);
    setToken(localStorage.getItem("token"));
    setUserid(localStorage.getItem("id"));
    setAdmin(localStorage.getItem("admin"));
  };

  const logout = () => {
    setToken(null);
    setUserid(null);
    setAdmin(null);
    localStorage.clear();
  };

  //check jwt token
  if (token) {
    setAuthToken(token);
  }

  return (
    <AuthContext.Provider
      value={{
        loggedIn: !!token,
        token: token,
        userId: userId,
        isAdmin: admin,
        login: login,
        logout: logout,
        theme:theme,
        setTheme:setTheme
      }}
    >
      <>
        <Router>
          <Routes>
            <Route path="/" element={<Home onLogout={logout} />} />
            <Route
              path="dashboard"
              element={
                <ProtectedRoute isAllowed={!!token && role}>
                  <Dashboard onLogout={logout} />
                </ProtectedRoute>
              }
            >
              <Route path="/dashboard" element={<DashboardIndex />} />
              <Route path="Profile" element={<Profile />} />
              <Route path="addproject" element={<AddProject />} />
              <Route path="allprojects" element={<AllProjects />} />
              <Route path="edit/:id" element={<EditProject />} />
            </Route>

            <Route path="login" element={<Login onLogin={login} />} />
            <Route path="projects/sayer" element={<Sayer  />} />
            <Route path="projects/eib" element={<Eib />} />
            {/* <Route path="register" element={<Register />} /> */}

            <Route path="*" element={<Notfound />} />
            
          </Routes>
          <AuthVerify logOut={logout}/>
        </Router>
      </>
 
    </AuthContext.Provider>
  );
};
