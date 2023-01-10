import React from "react";
import "./experience.css";
import { BsPatchCheckFill } from "react-icons/bs";
export const Experience = (props) => {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>
      <div className="container experience-container">
        <div className="frontend-exp">
          <h3>Frontend Development</h3>
          <div className="experience-content">
            {props.profile.length !== 0 && props.profile[0]?.frontendExperiences
              ? props.profile[0]?.frontendExperiences.map((item) => (
                  <div className="expeience-details" key={item.id}>
                    <BsPatchCheckFill className="exp-icon" />
                    <h4>{item.text}</h4>
                  </div>
                ))
              : ""}
          </div>
        </div>
        <div className="backend-exp">
          <h3>Backend Development</h3>
          <div className="experience-content">
            {props.profile.length !== 0 && props.profile[0]?.backendExperiences
              ? props.profile[0]?.backendExperiences.map((item) => (
                  <div className="expeience-details" key={item.id}>
                    <BsPatchCheckFill className="exp-icon" />
                    <h4>{item.text}</h4>
                  </div>
                ))
              : ""}
          </div>
        </div>
        <div className="other-exp">
          <h3>Other Experience</h3>
          <div className="experience-content">
            {props.profile.length !== 0 && props.profile[0]?.otherExperiences
              ? props.profile[0]?.otherExperiences.map((item) => (
                  <div className="expeience-details" key={item.id}>
                    <BsPatchCheckFill className="exp-icon" />
                    <h4>{item.text}</h4>
                  </div>
                ))
              : ""}
          </div>
        </div>
      </div>
    </section>
  );
};
