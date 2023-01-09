import React from 'react'
import './header.css'
import Cv from '../../assets/cv.pdf'
import Me from '../../assets/1.png'
import {HeaderSocial} from './HeaderSocial'
import { Link, animateScroll as scroll } from "react-scroll";
import {BsArrowUpSquareFill} from 'react-icons/bs';
export const Header = () => {
  return (
    <header id='header'>
      <div className='container header-container'>
        <div>
        <h1>Hello, I'm Enas</h1>
        <h5 className='text-light'>Fullstack Developer</h5>
        <p>I like building a responsive and scalable web applications.</p>
        <div className='cv'>
          <a href={Cv} download className='btn btn-custom'>Download Cv</a>
          <Link to='contact' smooth={true} className='btn btn-primary btn-custom'>Let's Talk</Link>
        </div>
        <HeaderSocial/>
        </div>
        <div className='me'>
          <img src={Me} alt="me"/>
        </div>
    

     
      </div>
      <button className='btn btn-outline scroll-top btn-custom' onClick={()=>{scroll.scrollToTop()}} ><BsArrowUpSquareFill/></button>
    </header>
  )
}
