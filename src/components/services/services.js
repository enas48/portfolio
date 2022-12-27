import React from "react";
import "./services.css";
import { BiCheck } from "react-icons/bi";
export const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className="container services-conatiner">
        <div className="service">
          <div className="service-head">
            <h3>Web Development</h3>
          </div>
          <div className="service-list">
            <li>
              <BiCheck className="service-icon" />
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
            </li>
            <li>
              <BiCheck className="service-icon" />
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
            </li>
            <li>
              <BiCheck className="service-icon" />
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
            </li>
            <li>
              <BiCheck className="service-icon" />
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
            </li>

            <li>
              <BiCheck className="service-icon" />
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
            </li>
            <li>
              <BiCheck className="service-icon" />
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
            </li>
          </div>
        </div>
      </div>
    </section>
  );
};
