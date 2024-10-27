import React from 'react'
import './footer.css'
import { Link } from "react-scroll";
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
export const Footer = () => {
  return (
    <footer>

      <ul className='permalinks'>
        <li>
          <Link to="header" smooth={true} duration={100} >Home</Link>
        </li>
        <li>
          <Link to="about" smooth={true} duration={100}>About</Link>
        </li>
        <li>
          <Link to="experience" smooth={true} duration={100}>Experience</Link>
        </li>
        <li>
          <Link to="projects" smooth={true} duration={100}>Projects</Link>
        </li>
        <li>
          <Link to="portfolio" smooth={true} duration={100}>Portfolio</Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={100}>Contact</Link>
        </li>
      </ul>
      <div className='footer-social'>
        <a href="https://www.linkedin.com/in/enas-mohammed-78a245192"
          target="_blank"
          rel="noreferrer">
          <FaLinkedinIn />
        </a>
        <a
          href="https://github.com/enas48"
          target="_blank"
          rel="noreferrer">
          <FiGithub />
        </a>
      </div>
      <div className="footer-copyright">
        <p className='mb-0'>     &copy; {new Date().getFullYear()}. All rights reserved.</p>

      </div>
    </footer>
  )
}
