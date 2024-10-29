import './projects.css'
import React from 'react';
import { FaCircleDot } from "react-icons/fa6";

export const Projects = () => {

  return (
    <section id="projects">
      <h2>Freelance Projects</h2>
      <div className="container projects-container">
        <div className='card projects-card'>
          <h3 className='text-center'>Eib</h3>
          <h4 className='text-primary'>Overview:</h4>
          <p>a fullstack app to collect information  with multi-step form and dashboard to view data.</p>
          <h4 className='text-primary'>Technology:</h4>
          <ul className='p-0'>
            <li><FaCircleDot className='text-primary icon-projects' /> React</li>
            <li><FaCircleDot className='text-primary icon-projects' /> css</li>
            <li><FaCircleDot className='text-primary icon-projects' /> Node js</li>
            <li><FaCircleDot className='text-primary icon-projects' /> Mongo db</li>
          </ul>
          <h4 className='text-primary'>Features:</h4>
          <ul className='p-0'>
          <li><FaCircleDot className='text-primary icon-projects' /> a multistep form to collect a lot of informations from users.</li>
          <li><FaCircleDot className='text-primary icon-projects' /> a form validation on each step.</li>
          <li><FaCircleDot className='text-primary icon-projects' /> save data to database.</li>
          <li><FaCircleDot className='text-primary icon-projects' /> dashboard so the admin of application can see the data and download it. </li>

          </ul>

        </div>
        <div className='card projects-card'>
          <h3 className='text-center'>Sayer</h3>
          <h4 className='text-primary'>Overview:</h4>
          <p>a web application designed to streamline work in the school supervision department in oman.
            help supervisor add month plan and organize their transportation to the schools.

          </p>
          <h4 className='text-primary'>Technology:</h4>
          <ul className='p-0'>
            <li><FaCircleDot className='text-primary icon-projects' /> Laravel</li>
            <li><FaCircleDot className='text-primary icon-projects' /> css</li>
            <li><FaCircleDot className='text-primary icon-projects' /> MySQL </li>
            <li><FaCircleDot className='text-primary icon-projects' /> Javascript</li>
            <li><FaCircleDot className='text-primary icon-projects' /> AJAX</li>
          </ul>
          <h4 className='text-primary'>Features:</h4>
          <ul className='p-0'>
          <li><FaCircleDot className='text-primary icon-projects' /> dynamic landing page with ability to change data from dashboard.</li>
          <li><FaCircleDot className='text-primary icon-projects' /> a multi role authentication.</li>
          <li><FaCircleDot className='text-primary icon-projects' /> view and download reports.</li>
        

          </ul>
        </div>
      </div>
    </section>
  )
}
