import { React, useState } from "react";
import { Navigate } from "react-router-dom";
import axios from "axios";
const appurl = "http://localhost:5000";

export const AddProject = () => {
  const [formData, setFormData] = useState({
    title: "",
    url: "",
    demo: "",
    image:"",
    user:"",
  });
  const admin = localStorage.getItem("admin");
    if (admin === "false") {
      return <Navigate replace to="/" />;
    }
 
  return (
    <>
      <div>add project</div>
    </>
  );
};
