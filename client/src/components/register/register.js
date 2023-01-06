import React, { useState } from "react";
import { Nav } from "../nav/nav";
import "./register.css";
import MessageModal from "../uielements/messageModal";
import { RiUserFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import axios from "axios";
import { setAuthToken } from "../helpers/setAuthToken";
import { useAuthContext } from "../helpers/useAuthContext";
import { Navigate } from "react-router-dom";
// const appurl = "http://localhost:8000";
const appurl ="https://portfolio-backend-snowy-delta.vercel.app/";

export const Register = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [massage, setMassage] = useState({ text: null, error: false });
  const { username, email, password } = formData;

  //check if user already loggedin
  const { user } = useAuthContext();
  console.log(user);
  if (user) {
    return <Navigate replace to="/" />;
  }

  const onSubmit = async (e) => {
    e.preventDefault();
    const user = { username, email, password };
    setMassage({ text: null, error: false });
    axios
      .post(appurl + "/users", user)
      .then((response) => {
        console.log(response);
        if (response.status === 200) {
          //get token from response
          const token = response.data.data.token;

          //set JWT token to local
          localStorage.setItem("token", token);
          //set token to axios common header
          setAuthToken(token);

          setMassage({ text: response.data.message });
          setFormData({
            username: "",
            email: "",
            password: "",
          });
        }
      })
      .catch((err) =>
        setMassage({
          text: err.response.data.message || "something want wrong",
          error: true,
        })
      );
  };

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const handleClear = () => {
    setMassage({ text: null, error: false });
  };
  return (
    <>
      {massage.text && <MessageModal massage={massage} onClear={handleClear} />}
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
