import { React, useState, useContext, useEffect } from "react";
import SquareLoader from "react-spinners/SquareLoader";
import { Navigate } from "react-router-dom";
import AuthContext from "../helpers/authContext";
import MessageModal from "../uielements/messageModal";
import axios from "axios";
import "../register/register.css";
import "./dashboard.css";
import {TextInput} from "../uielements/TextInput";
import { TagInput } from "../uielements/tagInput";

export const EditProfile = (props) => {
  const [loading, setLoading] = useState(false);
  const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "#e5958e",
    alignSelf: "center",
  };
  const  id  = props.profile._id;
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
    const profile =props.profile;
    setFormData({...profile,user:userId});
  }, []);

  const addFrontExp=(tag)=>{
    setFormData(
      (prevState) => ({
        ...prevState,
        frontendExperiences:tag,
      }))

  }
  const addBackExp=(tag)=>{
    setFormData(
      (prevState) => ({
        ...prevState,
        backendExperiences:tag,
      }))

  }
  const addOtherExp=(tag)=>{
    setFormData(
      (prevState) => ({
        ...prevState,
        otherExperiences:tag,
      }))

  }

  const { bio, aboutme, yearsOfExp} = data;
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
    setMassage({ text: null});
    setDisabled(true);
    axios
      .put(process.env.REACT_APP_APP_URL + "/profiles/" + id, data)
      .then((response) => {
        if (response.status === 200) {
          setDisabled(false);
          setMassage({ text: response.data.message });
          setFormData({...response.data.profile,user:userId});
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
      <h3>Edit profile</h3>
      <div className="register-container createproject">
        <div className="form-container col-12 ">
          <form onSubmit={onSubmit} method="post" >
            <TextInput name="bio" value={bio} onChange={onChange} placeholder="Bio"/>
            <TextInput name="aboutme" value={aboutme} onChange={onChange} placeholder="About Me"/>
            <TextInput name="yearsOfExp" value={yearsOfExp} onChange={onChange} placeholder="years Of Experiences"/>
            <TagInput onAddTag={addFrontExp} tags={data.frontendExperiences} placeholder="Edit Frontend Experiences"/>
              <TagInput onAddTag={addBackExp} tags={data.backendExperiences} placeholder="Edit Backend Experiences"/>
              <TagInput onAddTag={addOtherExp} tags={data.otherExperiences} placeholder="Edit Other Experiences"/>
            <button
              type="submit"
              disabled={disabled}
              className="btn btn-primary btn-custom"
            >
              <span className="btn-text">
              Edit profile
              </span>
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
