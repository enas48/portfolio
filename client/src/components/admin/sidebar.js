import React, { useState } from "react";
import "./sidebar.css";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineDashboard } from "react-icons/ai";
import {AiOutlineProject} from 'react-icons/ai';
export default function Sidebar() {
  const [isNavActive, setNav] = useState(false);
  return (
    <div className={isNavActive ? "sidebar active" : "sidebar"}>
        <div className="sidebar-menu">
        <Link
            to="/"
            onClick={() => {
              setNav(!isNavActive);
            }}
    
          >
            Home
          </Link>
        
      <button
        className="hamburger"
        onClick={() => {
          setNav(!isNavActive);
        }}
      >
        <GiHamburgerMenu />
      </button>
      </div>
      <div className="sidebar-links">
        <Link to="/dashboard">
           <span className="sidebar-icon"  data-toggle="tooltip" data-placement="right" title="Dashboard"><AiOutlineDashboard/></span>
          <span className="sidebar-txt">Dashboard</span>
        </Link>
        <Link to="/dashboard/addproject">
        <span className="sidebar-icon" data-toggle="tooltip" data-placement="right" title="Projects"><AiOutlineProject/></span> 
          <span className="sidebar-txt">Add Project</span>
        </Link>
      </div>
    </div>
  );
}
