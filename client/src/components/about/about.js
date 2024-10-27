import React from 'react'
import './about.css'
import Me from '../../assets/1.jpg'
import {FaAward} from 'react-icons/fa'
import { Link } from "react-scroll";
export const About = (props) => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className='container about-container'>
          <div className='about-me'>
              <div className='about-me-img'>
                  <img src={Me} alt="me"/>
              </div>
          </div>
          <div className='about-content'>
              <div className='about-cards'>
                <div className='about-card'>
                  <FaAward className='about-icon'/>
                    <h5>Experience</h5>
                    {(props.profile.length!==0 &&props.profile[0]?.yearsOfExp) ?<small>{new Date().getFullYear() - 2021}+ years Working</small>: <small>2+ years Working</small>}
                   
                </div>
               
              </div>
              {(props.profile.length!==0 &&props.profile[0]?.aboutme) ?<p>{props.profile[0]?.aboutme}</p>: <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab blanditiis illum accusantium esse? Sint ab nisi, ipsam corrupti repudiandae esse architecto perspiciatis nemo, consequatur, harum excepturi. Magni incidunt aliquam nihil?</p>}
{/*             
              <Link to='contact' smooth={true} className='btn btn-primary btn-custom'>Let's Talk</Link> */}
            <h4 className='text-primary mb-3'>Education</h4>
            <div className='education-card'>
              <span className='line'></span>
              <span className='triangle-right'></span>
              <h5>Bachelor of Engineering</h5>
              <p className='text-small m-0'>2012-2017</p>
              <p className='m-0'> communcation and Electronics department.</p>
              <p className='m-0'>Alexandria university.</p>

            </div>
          </div>
      </div>
    </section>
  )
}
