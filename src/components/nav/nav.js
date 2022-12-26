import React from "react";
import "./nav.css";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import { BiMessageSquareDetail } from "react-icons/bi";
import { Link, animateScroll as scroll } from "react-scroll";
export const Nav = () => {
  return (
    <nav>
      <Link to="header" smooth={true} spy={true} activeClass="active" >
        <AiOutlineHome />
      </Link>
      <Link to="about" smooth={true} spy={true} activeClass="active" >
        <AiOutlineUser />
      </Link>
      <Link to="experience" smooth={true} spy={true} activeClass="active">
        <BiBook />
      </Link>
      <Link to="services" smooth={true} spy={true} activeClass="active">
        <RiServiceLine />
      </Link>
      <Link to="contact" smooth={true} spy={true} activeClass="active">
        <BiMessageSquareDetail />
      </Link>
    </nav>
  );
};
