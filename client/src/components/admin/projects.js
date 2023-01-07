import  React, { useState , useEffect} from "react";
import { Navigate,Link } from "react-router-dom";
import axios from "axios";
import "../portfolio/portfolio.css"
// const appurl = "http://localhost:8000";
// const appurl ="https://portfolio-backend-snowy-delta.vercel.app";

export const AllProjects = () => {
    const[projects, setProjects] = useState([]);
 
    useEffect(() => {
      const fetchProjects = async () => {
        try {
  
          const result = await axios(`${process.env.REACT_APP_APP_URL}/projects`, {
            headers: {
              Accept: "application/json",
            },
          });
          //get user
          const data = result.data.projects;
          setProjects(data);
          console.log(data); 
       
        } catch (err) {
          console.log(err);
   
        }
      };

      fetchProjects();
  }, []);
  const admin = localStorage.getItem("admin");
  if (admin === "false") {
    return <Navigate replace to="/" />;
  }
  return (
    <>
      <h2>All projects</h2>
      <br/>
      <div className="container portfolio-container">
        {projects.map((item) => (
          <div className="portfolio-item" key={item._id}>
            <div className="portfolio-item-image">
              <img src={item.image} alt="" />
            </div>
            <h4>{item.title}</h4>
            <div className="portfolio-btn">
            <Link className="btn btn-primary" to={`edit/${item._id}`}>Edit</Link>
              
              <a
                href={item.demo}
                className="btn btn-danger "
                target="_blank"
                rel="noreferrer"
              >
                Delete
              </a>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
