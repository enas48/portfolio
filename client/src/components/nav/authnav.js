import { React, useState } from "react";
import "./nav.css";

import { Link as LinkScroll } from "react-scroll";
import { Link as LinkRouter } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { Navigate } from "react-router-dom";

export const AuthNav = (props) => {
  const [isNavActive, setNav] = useState(false);
  const handleLogout = () => {
    localStorage.clear();
    return <Navigate replace to="/" />;
  };
  return (
    <nav>
      <button
        className="hamburger"
        onClick={() => {
          setNav(!isNavActive);
        }}
      >
        <GiHamburgerMenu />
      </button>
      <div className={isNavActive ? "menu active" : "menu"}>
        <div className="menu-link">
          {props.home ? (
            <>
              <LinkScroll
                to="header"
                smooth={true}
                spy={true}
                activeClass="active"
              >
                Home
              </LinkScroll>
              <LinkScroll
                to="about"
                offset={-100}
                smooth={true}
                spy={true}
                activeClass="active"
              >
                About
              </LinkScroll>
              <LinkScroll
                to="experience"
                offset={-100}
                smooth={true}
                spy={true}
                activeClass="active"
              >
                Experience
              </LinkScroll>
              <LinkScroll
                to="portfolio"
                offset={-100}
                smooth={true}
                spy={true}
                activeClass="active"
              >
                Portfolio
              </LinkScroll>
              <LinkScroll
                to="contact"
                offset={-100}
                smooth={true}
                spy={true}
                activeClass="active"
              >
                Contact
              </LinkScroll>
            </>
          ) : (
            <LinkRouter to="/">Home</LinkRouter>
          )}
        </div>
        <div>
          <LinkRouter
            to="/"
            onClick={() => {
              setNav(!isNavActive);
            }}
            className="show-ipad"
          >
            Home
          </LinkRouter>

          <button className="btn" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
};
