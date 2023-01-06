import React  from "react";
import { Nav } from "../nav/nav";

import "./dashboard.css";
import { Outlet, Link } from "react-router-dom";

export const Dashboard = () => {
 

  return (
    <>
      <Nav />
      <div className="dashboard-container">
        <div className="sidebar">  
        <Link to="/dashboard/allprojects">All Projects</Link>
         <Link to="/dashboard/addproject">Add Project</Link>
         </div>
        <div className="dashboard-content">
          <Outlet />
        </div>
      </div>
    </>
  );
  
};
