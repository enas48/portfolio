import React, { useState, useEffect } from "react";
import "./portfolio.css";
import axios from "axios";
// const appurl = "http://localhost:8000";
// const appurl ="https://portfolio-backend-snowy-delta.vercel.app";

export const Portfolio = () => {
  const [projects, setProjects] = useState([]);
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
      } catch (err) {
        console.log(err);
      }
    };

    fetchProjects();
  }, []);


  return (
    <section id="portfolio">
      <h5>my Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio-container">
        {projects && projects.map((item) => (
          <div className="portfolio-item" key={item._id}>
            <div className="portfolio-item-image">
              <img src={item.image} alt="" />
            </div>
            <div className="overlay">
            <h4>{item.title}</h4>
            <div className="portfolio-btn">
              <a
                href={item.url}
                className="btn btn-custom"
                target="_blank"
                rel="noreferrer"
              >
                Github
              </a>
              <a
                href={item.demo}
                className="btn btn-primary btn-custom"
                target="_blank"
                rel="noreferrer"
              >
                Live Demo
              </a>
            </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
