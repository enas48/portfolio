import { React, useState } from "react";
import { Navigate } from "react-router-dom";


export const EditProject = () => {
  const admin = localStorage.getItem("admin");
    if (admin === "false") {
      return <Navigate replace to="/" />;
    }
 
  return (
    <>
      <div>edit project</div>
    </>
  );
};