import React, { useState } from "react";
import { Nav } from "../nav/nav";
import "../register/register.css";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
export const Login = () => {
    const [formData, setFormData] = useState({
        email:'',
        password:''
    });
    const { email, password} = formData;
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
          <h1>Login</h1>
          <form onSubmit={onSubmit}>
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
              Login
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
