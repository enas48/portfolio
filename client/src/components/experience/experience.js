import React from "react";
import "./experience.css";
import { BsPatchCheckFill } from "react-icons/bs";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { MdWork } from "react-icons/md";

export const Experience = (props) => {
  return (
    <section id="experience">
      <h2>My Experience</h2>
      <div className="timeline-container">
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work present"
            contentStyle={{ background: "#e5958e", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  #e5958e" }}
            date="2022 - present"
            iconStyle={{ background: "#e5958e", color: "#fff" }}
            icon={<MdWork />}
          >
            <h3 className="vertical-timeline-element-title mb-1 ">Team leader</h3>
            <h4 className="vertical-timeline-element-subtitle">
              Sphinx Publishing Company
            </h4>
            <ul className="ps-0">
              <li className="d-flex">
                <span>&bull;&nbsp;</span>
                <span>
                  Delegated tasks to team members according to project
                  requirements and employee strengths.
                </span>
              </li>
              <li className="d-flex">
                <span>&bull;&nbsp;</span>
                <span>
                  offer the support and guidance to assist developers at the
                  code level.
                </span>
              </li>
            </ul>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Jan 2022 - Feb 2022"
            iconStyle={{ background: "#e5958e", color: "#fff" }}
            icon={<MdWork />}
          >
            <h3 className="vertical-timeline-element-title mb-1">Technical Support</h3>
            <h4 className="vertical-timeline-element-subtitle">
            The ministry of education in Oman.
            </h4>
            <ul className="ps-0">
              <li className="d-flex">
                <span>&bull;&nbsp;</span>
                <span>
                Resolve problems that face teachers in the marking system and hardware problems.
                </span>
              </li>
            </ul>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2020 - 2022"
            iconStyle={{ background: "#e5958e", color: "#fff" }}
            icon={<MdWork />}
          >
            <h3 className="vertical-timeline-element-title mb-1">Web Developer</h3>
            <h4 className="vertical-timeline-element-subtitle">
              Sphinx Publishing Company
            </h4>
            <ul className="ps-0">
              <li className="d-flex">
                <span>&bull;&nbsp;</span>
                <span>
                Worked on digital learning objects (DLO) and developed interactive and responsive exercises.
                </span>
              </li>
              <li className="d-flex">
                <span>&bull;&nbsp;</span>
                <span>
                Developed a backend system for (EST) test to organize proctors in each trial using Laravel.
                </span>
              </li>
            </ul>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
      <h5 className="mb-4">What Skills I Have</h5>
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
