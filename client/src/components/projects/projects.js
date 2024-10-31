import './projects.css'
import React from 'react';
import { Link as LinkRouter } from "react-router-dom";
import eib from '../../assets/eib.png';
import sayer from '../../assets/sayer.png';
import { FaArrowRightLong } from "react-icons/fa6";

export const Projects = () => {

  return (
    <section id="projects">
      <h2>Freelance Projects</h2>
      <div className="container projects-container">
        <div className='card projects-card'>
          <img src={eib} alt="eib" className="w-100" />
          <div className='card-content'>
            <h3 className=''>Eib</h3>
            <p>A fullstack app to collect information  with multi-step form and dashboard to view data.</p>
            <LinkRouter className='btn btn-primary btn-custom w-auto' to="projects/eib">view more <FaArrowRightLong /></LinkRouter>
          </div>
        </div>
        <div className='card projects-card'>
          <img src={sayer} alt="Sayer" className="w-100" />
          <div className='card-content'>
            <h3 className=''>Sayer</h3>
            <p>A web application designed to streamline work in the school supervision department in Oman.
            </p>
            <LinkRouter className='btn btn-primary btn-custom w-auto' to="projects/sayer">view more <FaArrowRightLong /></LinkRouter>
          </div>
        </div>
      </div>
    </section>
  )
}
