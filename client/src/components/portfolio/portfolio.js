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

  //   {
  //     id: 1,
  //     image: img1,
  //     title: "this is title",
  //     github: "http",
  //     demo: "http",
  //   },
  //   {
  //     id: 2,
  //     image: img1,
  //     title: "this is title2",
  //     github: "http",
  //     demo: "http",
  //   },
  //   {
  //     id: 3,
  //     image: img1,
  //     title: "this is title3",
  //     github: "http",
  //     demo: "http",
  //   },
  //   {
  //     id: 4,
  //     image: img1,
  //     title: "this is title4",
  //     github: "http",
  //     demo: "http",
  //   },

  //   {
  //     id: 5,
  //     image: img1,
  //     title: "this is title5",
  //     github: "http",
  //     demo: "http",
  //   },
  //   {
  //     id: 6,
  //     image: img1,
  //     title: "this is title6",
  //     github: "http",
  //     demo: "http",
  //   },
  // ];
  return (
    <section id="portfolio">
      <h5>my Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio-container">
        {projects.map((item) => (
          <div className="portfolio-item" key={item._id}>
            <div className="portfolio-item-image">
              <img src={item.image} alt="" />
            </div>
            <h4>{item.title}</h4>
            <div className="portfolio-btn">
              <a
                href={item.url}
                className="btn"
                target="_blank"
                rel="noreferrer"
              >
                Github
              </a>
              <a
                href={item.demo}
                className="btn btn-primary"
                target="_blank"
                rel="noreferrer"
              >
                Live Demo
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
