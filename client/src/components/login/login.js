import React, { useState } from "react";
import { Nav } from "../nav/nav";
import "../register/register.css";
import MessageModal from "../uielements/messageModal";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import axios from "axios";
import { setAuthToken } from "../helpers/setAuthToken";
const appurl = "http://localhost:5000";

export const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [massage, setMassage] = useState({ text: null, error: false });
  const { email, password } = formData;

  const onSubmit = async (e) => {
    e.preventDefault();
    const user = { email, password };
    setMassage({ text: null, error: false });
    axios
      .post(appurl + "/users/login", user)
      .then((response) => {
   console.log(response);
        if (response.status ===200) {
          //get token from response
          const token = response.data.data.token;
          console.log(response);
          //set JWT token to local
          localStorage.setItem("token", token);

          //set token to axios common header
          setAuthToken(token);

          setMassage({ text: response.data.message });
          setFormData({
            email: "",
            password: "",
          });
        }
      })
      .catch((err) =>
        setMassage({ text: err.response.data.message || "something want wrong", error: true })
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
