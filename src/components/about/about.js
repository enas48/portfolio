import React from 'react'
import './about.css'
import Me from '../../assets/1.jpg'
import {FaAward} from 'react-icons/fa'
import {VscFolderLibrary} from 'react-icons/vsc'
import { Link } from "react-scroll";
export const About = () => {
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
                <article className='about-card'>
                  <FaAward className='about-icon'/>
                    <h5>Experience</h5>
                    <small>2+ years Working</small>
                </article>
                <article className='about-card'>
                  <VscFolderLibrary className='about-icon'/>
                    <h5>Projects</h5>
                    <small>10+ Completed</small>
                </article>
              </div>
              <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
              </p>
              <Link to='contact' smooth={true} className='btn btn-primary'>Let's Talk</Link>
          </div>
      </div>
    </section>
  )
}
