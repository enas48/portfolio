import { React, useState, useContext } from "react";
import "./nav.css";
import AuthContext from "../helpers/authContext";
import { Link as LinkScroll } from "react-scroll";
import { Link as LinkRouter } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { useNavigate, useLocation } from "react-router-dom";
import sun from "../../assets/icon-sun.svg";
import moon from "../../assets/icon-moon.svg";

export const Nav = (props) => {
  const { pathname } = useLocation();
  const [isNavActive, setNav] = useState(false);
  const { userId, isAdmin, logout,theme, setTheme  } = useContext(AuthContext);

  // const { user } = useAuthContext();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login", { replace: true });
  };

  const changeTheme = () => {
    if (theme === 'dark') {
      setTheme('light');
      localStorage.setItem('theme', 'light');
    } else {
      setTheme('dark');
      localStorage.setItem('theme', 'dark');
    }
  }
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
                duration={100}
                activeClass="active"
              >
                Home
              </LinkScroll>
              {/* <LinkScroll
                to="about"
                offset={-100}
                smooth={true}
                spy={true}
                activeClass="active"
              >
                About
              </LinkScroll> */}
              <LinkScroll
                to="experience"
                offset={-50}
                duration={100}
                smooth={true}
                spy={true}
                activeClass="active"
              >
                Experience
              </LinkScroll>
              <LinkScroll
                to="projects"
                offset={-50}
                duration={100}
                smooth={true}
                spy={true}
                activeClass="active"
              >
                Projects
              </LinkScroll>
              <LinkScroll
                to="portfolio"
                offset={-50}
                duration={100}
                smooth={true}
                spy={true}
                activeClass="active"
              >
                Portfolio
              </LinkScroll>
              <LinkScroll
                to="contact"
                offset={-50}
                duration={100}
                smooth={true}
                spy={true}
                activeClass="active"
              >
                Contact
              </LinkScroll>

            </>
          ) : (
            <>
              {!pathname.includes('/dashboard') && (
                <LinkRouter to="/">Home</LinkRouter>)}

            </>
          )}
        </div>
        <div className="d-flex justify-content-between w-100 align-items-top">
          {!pathname.includes('/dashboard') && (
            <div className="d-flex">
              <LinkRouter
                to="/"
                onClick={() => {
                  setNav(!isNavActive);
                }}
                className="show-ipad"
              >
                Home
              </LinkRouter>
              {isAdmin === 'true' && (
                <LinkRouter
                  to="/dashboard"
                  onClick={() => {
                    setNav(!isNavActive);
                  }}
                    className={pathname.includes('/dashboard')?'text-primary':'text-custom'}
               
                >
                  Dashboard
                </LinkRouter>
              )}
            </div>
          )}

       
          {userId ? (
            <div className="ms-auto d-flex align-items-center gap-2">
   <button className="icon-btn" onClick={changeTheme}>
            {theme === 'dark' ?
              <img src={ sun} alt="" /> :
              <img src={moon} alt="" />
              
            }
          </button>
            <button className="btn  btn-outline-danger" onClick={handleLogout}>
              Logout
            </button>
              </div>
          ) : (
            <>
              {/* <LinkRouter
              to="/register"
              onClick={() => {
                setNav(!isNavActive);
              }}
            >
              Register
            </LinkRouter> */}


              {/* <LinkRouter
                to="/login"
                onClick={() => {
                  setNav(!isNavActive);
                }}
              >
                Login
              </LinkRouter> */}
                <button className="icon-btn " onClick={changeTheme}>
            {theme === 'dark' ?
              <img src={ sun} alt="" /> :
              <img src={moon} alt="" />
            }
          </button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};
