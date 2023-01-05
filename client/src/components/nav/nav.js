import { React, useState ,useEffect} from "react";
import "./nav.css";
import { useAuthContext } from "../helpers/useAuthContext";
import { Link as LinkScroll } from "react-scroll";
import { Link as LinkRouter } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { useNavigate } from "react-router-dom";

export const Nav = (props) => {
  const [isNavActive, setNav] = useState(false);
  const { user } = useAuthContext();
  const navigate = useNavigate();
  console.log(user)

  const [loggedin,setloggedin]=useState(false);
  useEffect(() => {
    const token =localStorage.getItem('token');
    if(token){
      setloggedin(true);
    }

  }, []);
  const handleLogout = () => {
    localStorage.clear();
    setloggedin(false)
    navigate('../login', { replace: true })
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
            <>
            <LinkRouter to="/">Home</LinkRouter>
       
          </>
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
          {loggedin && user?.isAdmin==="true" && (
            <LinkRouter
              to="/dashboard"
              onClick={() => {
                setNav(!isNavActive);
              }}
            >
              Dashboard
            </LinkRouter>
          )}
          {loggedin ? (
            <button className="btn" onClick={handleLogout}>
              Logout
            </button>
          ) : (
            <>
              <LinkRouter
                to="/register"
                onClick={() => {
                  setNav(!isNavActive);
                }}
              >
                Register
              </LinkRouter>
              <LinkRouter
                to="/login"
                onClick={() => {
                  setNav(!isNavActive);
                }}
              >
                Login
              </LinkRouter>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};
