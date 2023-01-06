import React, { useState } from "react";
import { Nav } from "../nav/nav";
import "../register/register.css";
import MessageModal from "../uielements/messageModal";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import axios from "axios";
import { setAuthToken } from "../helpers/setAuthToken";
import { useNavigate, Navigate } from "react-router-dom";
import { useAuthContext } from "../helpers/useAuthContext";
// const appurl = "http://localhost:8000";
const appurl ="https://portfolio-backend-snowy-delta.vercel.app";

export const Login = (props) => {
  let navigate = useNavigate();
  const [disabled, setDisabled] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [massage, setMassage] = useState({ text: null, error: false });
  const { email, password } = formData;

  //check if user already loggedin
  const { user } = useAuthContext();
  if (user) {
    return <Navigate replace to="/" />;
  }

  const onSubmit = async (e) => {
    e.preventDefault();
    const user = { email, password };
    setMassage({ text: null, error: false });
    setDisabled(true);
    axios
      .post(appurl + "/users/login", user)
      .then((response) => {
        console.log(response);
        if (response.status === 200) {
          setDisabled(false);
          props.onLogin(response.data.data);
          const token = response.data.data.token;
          const admin = response.data.data.isAdmin;
          setAuthToken(token);
          setMassage({ text: response.data.message });
          setFormData({
            email: "",
            password: "",
          });

          if (admin) {
            return navigate("/dashboard", { replace: true });
          } else {
            return navigate("/", { replace: true });
          }
        }
      })
      .catch((err) =>{
        setDisabled(false);
        setMassage({
          text: err.response.data.message || "something want wrong",
          error: true,
        })}
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
            <button type="submit" disabled={disabled} className="btn btn-primary">
              Login
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
