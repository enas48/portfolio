import React from "react";
import "./experience.css";
import { BsPatchCheckFill } from "react-icons/bs";
export const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>
      <div className="container experience-container">
        <div className="frontend-exp">
          <h3>Frontend Development</h3>
          <div className="experience-content">
            <div className="expeience-details">
              <BsPatchCheckFill className="exp-icon" />
              <h4>HTML</h4>
            </div>
            <div className="expeience-details">
              <BsPatchCheckFill className="exp-icon" />
              <h4>CSS</h4>
            </div>
            <div className="expeience-details">
              <BsPatchCheckFill className="exp-icon" />
              <h4>JavaScript</h4>
            </div>
            <div className="expeience-details">
              <BsPatchCheckFill className="exp-icon" />
              <h4>Bootstrap</h4>
            </div>
            <div className="expeience-details">
              <BsPatchCheckFill className="exp-icon" />
              <h4>Jquery</h4>
            </div>
            <div className="expeience-details">
              <BsPatchCheckFill className="exp-icon" />
              <h4>React</h4>
            </div>
            <div className="expeience-details">
              <BsPatchCheckFill className="exp-icon" />
              <h4>Angular</h4>
            </div>
          </div>
        </div>
        <div className="backend-exp">
        <h3>Backend Development</h3>
          <div className="experience-content">
        <div className="expeience-details">
              <BsPatchCheckFill className="exp-icon" />
              <h4>Node JS</h4>
            </div>
            <div className="expeience-details">
              <BsPatchCheckFill className="exp-icon" />
              <h4>MongoDB</h4>
            </div>
            <div className="expeience-details">
              <BsPatchCheckFill className="exp-icon" />
              <h4>PHP</h4>
            </div>
            <div className="expeience-details">
              <BsPatchCheckFill className="exp-icon" />
              <h4>Laravel</h4>
            </div>
            <div className="expeience-details">
              <BsPatchCheckFill className="exp-icon" />
              <h4>MYSQL</h4>
            </div>
          </div>
        </div>
        <div className="other-exp">
        <h3>Other Experience</h3>
          <div className="experience-content">
          <div className="expeience-details">
              <BsPatchCheckFill className="exp-icon" />
              <h4>Git version control</h4>
            </div>
            <div className="expeience-details">
              <BsPatchCheckFill className="exp-icon" />
              <h4>Microsoft Office</h4>
            </div>
            <div className="expeience-details">
              <BsPatchCheckFill className="exp-icon" />
              <h4>Adobe Photoshop</h4>
            </div>
            <div className="expeience-details">
              <BsPatchCheckFill className="exp-icon" />
              <h4>Adobe illustrator</h4>
            </div>
            </div>
        </div>
      </div>
    </section>
  );
};
