import React  from "react";
import { Nav } from "../nav/nav";

import "./dashboard.css";
import { Outlet } from "react-router-dom";
import Sidebar from "./sidebar";

export const Dashboard = () => {
 

  return (
    <>
      <Nav />
      <div className="dashboard-container">
      <Sidebar/>
        <div className="dashboard-content">
          <Outlet />
        </div>
    
      </div>
    </>
  );
  
};
