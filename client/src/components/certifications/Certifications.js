import './certifications.css'
import React from 'react';
import { FaCertificate } from "react-icons/fa6";
import { Link } from "react-router-dom";

export const Certifications = () => {

  return (
    <section id="certifications">
  
      <h5 className="mb-4">Certifications</h5>
      <div className="container certifications-container">
        <div className='card certifications-card'>

          <ul className='p-0'>
            <li><FaCertificate className='text-primary icon-projects' />   <Link
                          className="btn btn-primary btn-custom me-2"
                          to={`https://www.udacity.com/certificate/e/2a62ca30-f927-11ec-b6ac-cffb231896a3`}
                       target="_blank"
                       >
                          Angular Nanodegree, Udacity
                        </Link></li>

          </ul>
     

        </div>
   
      </div>
    </section>
  )
}
