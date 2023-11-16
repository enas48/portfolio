import React, { useState, useEffect,useContext} from "react";
import SquareLoader from "react-spinners/SquareLoader";
import { Navigate } from "react-router-dom";
import axios from "axios";
import AuthContext from "../helpers/authContext";
import MessageModal from "../uielements/messageModal";
import "../portfolio/portfolio.css";
import {EditProfile} from "./editProfile";
import { AddProfile } from "./addProfile";


export function Profile() {
  const [loading, setLoading] = useState(false);
  const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "#e5958e",
    alignSelf: "center",
  };
  const [profile, setProfile] = useState(null);
  const [massage, setMassage] = useState({ text: null, error: false });
  const { userId } = useContext(AuthContext);


  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 500);
    const fetchProfile = async () => {
        try {
          const result = await axios(`${process.env.REACT_APP_APP_URL}/profiles/users/${userId}`, {
            headers: {
              Accept: "application/json",
            },
          });
     
          const data = result.data.profile;
          if(data){
            setProfile(data);
      
          }
      
        } catch (err) {
          console.log(err);
        }
      };
    
    fetchProfile();
  }, [userId]);



  const handleClear = () => {
    setMassage({ text: null, error: false });
  };
  const admin = localStorage.getItem("admin");
  if (admin === "false") {
    return <Navigate replace to="/" />;
  }

  return (
    <>
        {loading &&
      <div className="sweet-loading">
        <SquareLoader
          color="#e5958e"
          loading={loading}
          cssOverride={override}
          size={60}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </div>}
      {massage.text && <MessageModal massage={massage} onClear={handleClear} />}
     {!profile && <AddProfile/>}
     {profile && <EditProfile profile={profile}/>}
    </>
  );
}
