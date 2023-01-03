import { React, useState } from "react";
import { Navigate } from "react-router-dom";


export const AllProjects = () => {
  const admin = localStorage.getItem("admin");
    if (admin === "false") {
      return <Navigate replace to="/" />;
    }
 
  return (
    <>
      <div>all project</div>
    </>
  );
};
