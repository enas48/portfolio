import { React, useState, useContext } from "react";
import SquareLoader from "react-spinners/SquareLoader";
import { Navigate} from "react-router-dom";
import AuthContext from "../helpers/authContext";
import MessageModal from "../uielements/messageModal";
import axios from "axios";
import "../register/register.css";
import "./dashboard.css";
import {TextInput} from "../uielements/TextInput";
import { TagInput } from "../uielements/tagInput";

export const AddProfile = () => {
  const [loading, setLoading] = useState(false);
  const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "#e5958e",
    alignSelf: "center",
  };
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
  const { bio, aboutme, yearsOfExp} = data;
  if (admin === "false") {
    return <Navigate replace to="/" />;
  }
  const addFrontExp=(tag)=>{
    setFormData({...data,frontendExperiences:tag})

  }
  const addBackExp=(tag)=>{
    setFormData({...data,backendExperiences:tag})
  }
  const addOtherExp=(tag)=>{
    setFormData({...data,otherExperiences:tag})
  }
  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));

  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setMassage({ text: null});
    setLoading(true);
    setDisabled(true);
    axios
      .post(process.env.REACT_APP_APP_URL + "/profiles", data)
      .then((response) => {
        if (response.status === 200) {
          setLoading(false);
          setDisabled(false);
          setMassage({ text: response.data.message });
          return <Navigate replace to="/dashboard/profile" />;
        }
      })
      .catch((err) =>{
      setDisabled(false);
      setLoading(false);
        setMassage({
          text: err.response.data.message || "something want wrong",
          error: true,
        })}
      );
  };
  const handleClear = () => {
    setMassage({ text: null, error: false });
  };

  return (
    <>
          {loading && (
        <div className="sweet-loading">
          <SquareLoader
            color="#e5958e"
            loading={loading}
            cssOverride={override}
            size={60}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      )}
      {massage.text && <MessageModal massage={massage} onClear={handleClear} />}
      <h3>Add Profile</h3>
      <div className="register-container createproject">
        <div className="form-container col-12  ">
          <form onSubmit={onSubmit} method="post" >
            <TextInput name="bio" value={bio} onChange={onChange} placeholder="Bio"/>
            <TextInput name="aboutme" value={aboutme} onChange={onChange} placeholder="About Me"/>
            <TextInput name="yearsOfExp" value={yearsOfExp} onChange={onChange} placeholder="years Of Experiences"/>
              <TagInput onAddTag={addFrontExp} placeholder="Add Frontend Experiences"/>
              <TagInput onAddTag={addBackExp} placeholder="Add Backend Experiences"/>
              <TagInput onAddTag={addOtherExp} placeholder="Add Other Experiences"/>
            <button type="submit" disabled={disabled} className="btn btn-primary btn-custom">
            <span className="btn-text">
              Add Profile
              </span>
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
