import { React, useState, useContext, useEffect } from "react";
import { Navigate, useParams } from "react-router-dom";
import AuthContext from "../helpers/authContext";
import MessageModal from "../uielements/messageModal";
import axios from "axios";
import "../register/register.css";
import "./dashboard.css";


export const EditProfile = (props) => {
  const  id  = props.profile._id;
  console.log(id);
  const [massage, setMassage] = useState({ text: null, error: false });
  const { userId } = useContext(AuthContext);
  const admin = localStorage.getItem("admin");
  const [disabled, setDisabled] = useState(false);
  const [data, setFormData] = useState({
    user: userId,
    bio: "",
    aboutme: "",
    yearsOfExp: "",
    frontendExperiences:[],
    backendExperiences:[],
    otherExperiences :[],
  });

  useEffect(() => {
    setFormData(props.profile);
    console.log(props.profile);
   console.log(data);
  }, []);

  const { bio, aboutme, yearsOfExp, frontendExperiences, backendExperiences, otherExperiences} = data;
  if (admin === "false") {
    return <Navigate replace to="/" />;
  }

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
   
    setDisabled(true);
    axios
      .put(process.env.REACT_APP_APP_URL + "/profiles/" + id, data)
      .then((response) => {
        if (response.status === 200) {
          setDisabled(false);
          setMassage({ text: response.data.message });
          setFormData(response.data.project);
          console.log(response.data);
        }
      })
      .catch((err) => {
        setDisabled(false);
        setMassage({
          text: err.response.data.message || "something want wrong",
          error: true,
        });
      });
  };
  const handleClear = () => {
    setMassage({ text: null, error: false });
  };

  return (
    <>
      {massage.text && <MessageModal massage={massage} onClear={handleClear} />}
      <h3>Edit profile</h3>
      <div className="register-container createproject">
        <div className="form-container col-12 ">
          <form onSubmit={onSubmit} method="post" >
            <label htmlFor="">Bio</label>
            <input
              type="text"
              value={bio}
              name="bio"
              placeholder="Bio"
              onChange={onChange}
              required
            />
              <label htmlFor="">About Me</label>
            <input
              type="text"
              value={aboutme}
              name="aboutme"
              placeholder="About me"
              onChange={onChange}
              required
            />
              <label htmlFor="">years Of Experiences</label>
            <input
              type="text"
              value={yearsOfExp}
              name="yearsOfExp"
              placeholder="years Of Experiences"
              onChange={onChange}
              required
            />
          
            <button
              type="submit"
              disabled={disabled}
              className="btn btn-primary btn-custom"
            >
              Edit project
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
