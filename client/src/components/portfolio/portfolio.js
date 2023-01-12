import React, { useState, useEffect } from "react";
import "./portfolio.css";
import axios from "axios";


export const Portfolio = () => {
  const [projects, setProjects] = useState([]);
  const [filteredProjects, setFilteredProjects]= useState([]);
  const [active, setActive]=useState('all');
  const [animate, setAnimate]=useState(false);
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const result = await axios(`${process.env.REACT_APP_APP_URL}/projects`, {
          headers: {
            Accept: "application/json",
          },
        });
        const data = result.data.projects;
        setProjects(data);
        setFilteredProjects(data);  
      } catch (err) {
        console.log(err);
      }
    };

    fetchProjects();
  }, []);

  const filterProjects=(e)=>{
    let tag=e.target.id;
    setActive(e.target.id);
    setAnimate(true);
    if(tag === 'all'){
      setFilteredProjects(projects);  
    }else{
      const filteredProjects= projects.filter(project=>project.tags.map((tag)=>tag.text).includes(tag));
      setFilteredProjects(filteredProjects);
    }  

  }
  const tags=['all', 'html', 'css', 'javascript', 'jquery', 'react', 'redux', 'angular', 'php', 'laravel', 'nodejs' ];


  return (
    <section id="portfolio">
      <h5>my Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio-container">
        <div className="tags-container  col-lg-8">
                {tags.map((item, i)=>(
                    <button onClick={filterProjects} key={i} className={`btn btn-primary btn-custom ${active === item ?'active':''}`} id={item}>
                      {item[0].toUpperCase() +  item.slice(1)}
                      </button>
               
                ))}
        </div>
        <div className="project-container">
        {filteredProjects && filteredProjects.map((item) => (
          <div className={`portfolio-item ${animate ?'active':''}`} key={item._id}>
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
      </div>
    </section>
  );
};
