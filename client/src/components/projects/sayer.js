import React, { useContext,useEffect } from "react";
import AuthContext from "../helpers/authContext";
import './projects.css'
import { Nav } from "../nav/nav";
import { FaCircle , FaStar } from "react-icons/fa6";
import sayer from '../../assets/sayer-cover.png'


function Sayer() {
  const { theme } = useContext(AuthContext);
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className={`App ${theme}`}>
      <Nav />
      <div className="container project m-auto">

        <div className='project-img col-md-9 mx-auto mb-2 rounded-3'>
          <img src={sayer} alt="sayer" className="w-100 m-auto" />
        </div>

        <div className="col-md-9 project-content">
          <h1 className='mb-3'>Sayer</h1>

          <h4 className=''>Overview</h4>
          <p>a web application designed to streamline work in the school supervision department in Oman.
            Help the supervisor add a month plan and organize their transportation to the schools.

          </p>
          <h4 className=''>Technology</h4>
          <ul className='p-0 row '>
            <li className="col-6 col-md-4"><FaCircle  className='text-primary icon-projects' /> Laravel</li>
            <li className="col-6 col-md-4"><FaCircle  className='text-primary icon-projects' /> css</li>
            <li className="col-6 col-md-4"><FaCircle  className='text-primary icon-projects' /> MySQL </li>
            <li className="col-6 col-md-4"><FaCircle  className='text-primary icon-projects' /> Javascript</li>
            <li className="col-6 col-md-4"><FaCircle  className='text-primary icon-projects' /> AJAX</li>
          </ul>
          <h4 className=''>Features</h4>
          <ul className='p-0'>
            <li className="d-flex align-items-baseline gap-1"><FaStar className='text-primary fs-6 icon-style' /><p> Dynamic landing page with ability to change data from dashboard.</p></li>
            <li className="d-flex align-items-baseline gap-1"><FaStar className='text-primary fs-6 icon-style' /> <p>A multi-role authentication.</p></li>
            <li className="d-flex align-items-baseline gap-1"><FaStar className='text-primary fs-6 icon-style' /> <p>Every month, a supervision plan can be created.</p></li>
            <li className="d-flex align-items-baseline gap-1"><FaStar className='text-primary fs-6 icon-style' /> <p>Every month, a driver's plan can be created  with automatic distribution to schools.</p></li>
            <li className="d-flex align-items-baseline gap-1"><FaStar className='text-primary fs-6 icon-style' /> <p>Supervisors can select drivers to go to the school.</p></li>
            <li className="d-flex align-items-baseline gap-1"><FaStar className='text-primary fs-6 icon-style' /> <p>View and download reports.</p></li>

          </ul>
        </div>

      </div>
    </div>
  )
}

export default Sayer
