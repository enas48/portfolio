import { React, useState, useContext } from "react";
import { Navigate } from "react-router-dom";
import AuthContext from "../helpers/authContext";
import MessageModal from "../uielements/messageModal";
import axios from "axios";
import "../register/register.css";
import "./dashboard.css";
// const appurl = "http://localhost:8000";
const appurl ="https://portfolio-backend-snowy-delta.vercel.app/";
export const AddProject = () => {
  const [massage, setMassage] = useState({ text: null, error: false });
  const { userId } = useContext(AuthContext);
  const [image, setImage] = useState("");
  const admin = localStorage.getItem("admin");
  const [disabled, setDisabled] = useState(false);
  const [data, setFormData] = useState({
    title: "",
    url: "",
    demo: "",
    userId,
  });
  const { title, url, demo } = data;
  if (admin === "false") {
    return <Navigate replace to="/" />;
  }
  const onImageChange = (e) => {
    setImage(e.target.files[0]);
  };
  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    for (var key in data) {
      formData.append(key, data[key]);
    }
    formData.append("image", image);
    setDisabled(true);
    axios
      .post(appurl + "/projects", formData)
      .then((response) => {
        if (response.status === 200) {
          setDisabled(false);
          setMassage({ text: response.data.message });
          setFormData({
            title: "",
            url: "",
            demo: "",
            userId: userId,
          });
          setImage("");
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
  const handleClear = () => {
    setMassage({ text: null, error: false });
  };

  return (
    <>
      {massage.text && <MessageModal massage={massage} onClear={handleClear} />}
      <h3>Add project</h3>
      <div className="register-container createproject">
        <div className="form-container col-12 ">
          <form onSubmit={onSubmit} method="post" encType="multipart/form-data">
            <input
              type="text"
              value={title}
              name="title"
              placeholder="project title"
              onChange={onChange}
              required
            />
            <input
              type="text"
              value={url}
              name="url"
              placeholder="project url"
              onChange={onChange}
              required
            />
            <input
              type="text"
              value={demo}
              name="demo"
              placeholder="project demo"
              onChange={onChange}
              required
            />
            <input type="file" name="image" onChange={onImageChange} />
            <button type="submit" disabled={disabled} className="btn btn-primary">
              Add project
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
