import React from "react";
import {FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import './header.css'

export const HeaderSocial = () => {
  return (
    <div className="header-social">
      <a href="https://www.linkedin.com/in/enas-mohammed-78a245192" target="_blank" rel="noreferrer">
      <FaLinkedinIn />
      </a>
      <a
        href="https://github.com/enas48"
        target="_blank"
        rel="noreferrer"
      >
        <FiGithub />
      </a>
    </div>
  );
};
