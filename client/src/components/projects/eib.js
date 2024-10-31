import React, { useContext } from "react";
import AuthContext from "../helpers/authContext";
import './projects.css'
import { Nav } from "../nav/nav";
import { FaCircle, FaStar } from "react-icons/fa6";
import eib from '../../assets/eib-cover.png'
function Eib() {
  const { theme } = useContext(AuthContext);
  return (
    <div className={`App ${theme}`}>
      <Nav />
      <div className="container project m-auto">

        <div className='project-img col-md-9 mx-auto mb-2 rounded-3'>
          <img src={eib} alt="eib" className="w-100 m-auto" />
        </div>

        <div className="col-md-9 project-content">
          <h1 className='mb-3'>Eib</h1>

          <h4 className=''>Overview</h4>
          <p>a fullstack app to collect information  with multi-step form and dashboard to view data.</p>
          <h4 className=''>Technology</h4>
          <ul className='p-0 row '>
            <li className="col-6 col-md-4"><FaCircle className='text-primary icon-projects' /> React</li>
            <li className="col-6 col-md-4"><FaCircle className='text-primary icon-projects' /> css</li>
            <li className="col-6 col-md-4"><FaCircle className='text-primary icon-projects' />  Node js </li>
            <li className="col-6 col-md-4"><FaCircle className='text-primary icon-projects' />  Mongo db</li>
          </ul>
          <h4 className=''>Features</h4>
          <ul className='p-0'>
            <li className="d-flex align-items-baseline gap-1"><FaStar className='text-primary fs-6' /><p>A multistep form to collect a lot of information from users.</p></li>
            <li className="d-flex align-items-baseline gap-1"><FaStar className='text-primary fs-6' /> <p>A form validation on each step.</p></li>
            <li className="d-flex align-items-baseline gap-1"><FaStar className='text-primary fs-6' /> <p>Save data to database.</p></li>
            <li className="d-flex align-items-baseline gap-1"><FaStar className='text-primary fs-6' /> <p>Users can create a profile and update it.</p></li>
            <li className="d-flex align-items-baseline gap-1"><FaStar className='text-primary fs-6' /> <p>Dashboard so the admin of the application can see the data and download it. </p></li>

          </ul>
        </div>

      </div>
    </div>
  )
}

export default Eib
