import React from 'react'
import './header.css'
import Cv from '../../assets/cv3.pdf'
import Me from '../../assets/1.png'
import {HeaderSocial} from './HeaderSocial'
import { Link, animateScroll as scroll } from "react-scroll";
import {BsArrowUpSquareFill} from 'react-icons/bs';
export const Header = (props) => {
  return (
    <header id='header'>
      <div className='container header-container row'>
        <div className='d-flex flex-column gap-2 col-md-6'>
        <h1 >Hello, I'm <span className='text-primary'>Enas Mohammed</span></h1>
        <div className='typewriter'>
        <h5 >Fullstack Developer</h5>
        </div>
        {(props.profile.length!==0 &&props.profile[0]?.bio) ?<p>{props.profile[0]?.bio}</p>:<p>I like building a responsive and scalable web applications.</p>}
    
        <div >
          <a href={Cv} download className='btn btn-custom mb-3'>Download Cv</a>
          {/* <Link to='contact' smooth={true} className='btn btn-primary btn-custom'>Let's Talk</Link> */}
        </div>
        <HeaderSocial/>
        </div>
        <div className='me col-lg-6'>
          <img src={Me} alt="me"/>
        </div>
    

     
      </div>
      <button className='btn btn-outline scroll-top' onClick={()=>{ window.scrollTo(0, 0)}} ><BsArrowUpSquareFill className='icon'/></button>
    </header>
  )
}
