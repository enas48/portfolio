import React, { useState } from "react";
import { Nav } from "../nav/nav";
import "./register.css";
import { RiUserFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
export const Register = () => {
    const [formData, setFormData] = useState({
        username:'',
        email:'',
        password:''
    });
    const {username, email, password} = formData;
    const onSubmit=(e)=>{
        e.preventDefault();
        console.log(formData)
    }
    const onChange=(e)=>{
        setFormData((prevState)=>({
            ...prevState,
            [e.target.name]:e.target.value
        }))
    }
  return (
    <>
      <Nav />
      <div className="container register-container">
        <div className="form-container col-12 col-md-6 col-lg-5">
          <h1>Register</h1>
          <form onSubmit={onSubmit}>
            <div className="wrap">
              <div className="icon">
                <RiUserFill />
              </div>
              <input
                type="text"
                name="username"
                value={username}
                placeholder="Username"
                onChange={onChange}
                required
              />
            </div>
            <div className="wrap">
              <div className="icon">
                <MdEmail />
              </div>
              <input
                type="email"
                value={email}
                name="email"
                placeholder="Email"
                onChange={onChange}
                required
              />
            </div>
            <div className="wrap">
              <div className="icon">
                <RiLockPasswordFill />
              </div>
              <input
                type="password"
                name="password"
                value={password}
                placeholder="Password"
                onChange={onChange}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Register
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
