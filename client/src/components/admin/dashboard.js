import { useState, useEffect } from "react";
import SquareLoader from "react-spinners/SquareLoader";
import { Nav } from "../nav/nav";
import "./dashboard.css";
import { Outlet } from "react-router-dom";
import Sidebar from "./sidebar";

export const Dashboard = () => {
  const [loading, setLoading] = useState(false);
  const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "#e5958e",
    alignSelf: "center",
  };
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  return (
    <>
   {loading &&
      <div className="sweet-loading">
        <SquareLoader
          color="#e5958e"
          loading={loading}
          cssOverride={override}
          size={60}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </div>}

          <Nav />
          <div className="dashboard-container">
            <Sidebar />
            <div className="dashboard-content col-lg-5">
              <Outlet />
            </div>
          </div>
        </>

  );
};
