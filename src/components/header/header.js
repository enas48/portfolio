import React from 'react'
import './header.css'
import Cv from '../../assets/cv.pdf'
import Me from '../../assets/1.jpg'
import {HeaderSocial} from './HeaderSocial'
import { Link, animateScroll as scroll } from "react-scroll";
import {BsArrowUpSquareFill} from 'react-icons/bs';
export const Header = () => {
  return (
    <header id='header'>
      <div className='container header-container'>
        <h5>Hello I'm</h5>
        <h1>Enas Mohammed</h1>
        <h5 className='text-light'>Fullstack Developer</h5>
        <div className='cv'>
          <a href={Cv} download className='btn'>Download Cv</a>
          <Link to='contact' smooth={true} className='btn btn-primary'>Let's Talk</Link>
        </div>
        <div className='me'>
          <img src={Me} alt="me"/>
        </div>
        <Link to='contact' smooth={true} className='scrol-down'>Scroll Down</Link>
        <HeaderSocial/>
        <button className='btn btn-outline scroll-top' onClick={()=>{scroll.scrollToTop()}} ><BsArrowUpSquareFill/></button>
      </div>
   
    </header>
  )
}
