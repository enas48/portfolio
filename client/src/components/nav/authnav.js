import { React, useState ,useEffect} from "react";
import "./nav.css";
import { useAuthContext } from "../helpers/useAuthContext";
import { Link as LinkScroll } from "react-scroll";
import { Link as LinkRouter } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { useNavigate  } from "react-router-dom";

export const AuthNav = (props) => {
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
          
            <LinkRouter to="/">Home</LinkRouter>

            <LinkRouter
              to="/dashboard"
              onClick={() => {
                setNav(!isNavActive);
              }}
            >
              Dashboard
            </LinkRouter>
      
      
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
