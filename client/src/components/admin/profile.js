import React, { useState, useEffect,useContext} from "react";
import { Navigate, Link } from "react-router-dom";
import axios from "axios";
import AuthContext from "../helpers/authContext";
import MessageModal from "../uielements/messageModal";
import "../portfolio/portfolio.css";
import {EditProfile} from "./editProfile";
import { AddProfile } from "./addProfile";


export function Profile() {
  const [profile, setProfile] = useState(null);
  const [massage, setMassage] = useState({ text: null, error: false });
  const { userId } = useContext(AuthContext);


  useEffect(() => {
    const fetchProfile = async () => {
        console.log(userId);
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
      {massage.text && <MessageModal massage={massage} onClear={handleClear} />}
    <div className="container">
        {profile &&<EditProfile profile={profile}/>}
        {!profile &&<AddProfile/>}

 
    </div>
    </>
  );
}
