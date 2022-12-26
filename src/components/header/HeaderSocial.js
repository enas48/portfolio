import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";
import './header.css'

export const HeaderSocial = () => {
  return (
    <div className="header-social">
      <a href="https://github.com/enas48" target="_blank" rel="noreferrer">
        <BsLinkedin />
      </a>
      <a
        href="https://www.linkedin.com/in/enas-mohammed-78a245192"
        target="_blank"
        rel="noreferrer"
      >
        <FaGithubSquare />
      </a>
    </div>
  );
};
