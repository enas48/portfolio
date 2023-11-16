import { React, useState, useContext, useEffect ,useRef} from "react";
import SquareLoader from "react-spinners/SquareLoader";
import { Navigate } from "react-router-dom";
import AuthContext from "../helpers/authContext";
import MessageModal from "../uielements/messageModal";
import axios from "axios";
import "../register/register.css";
import "./dashboard.css";
import { TextInput } from "../uielements/TextInput";
import { TagInput } from "../uielements/tagInput";

export const AddProject = () => {
  const [loading, setLoading] = useState(false);
  const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "#e5958e",
    alignSelf: "center",
  };
  const [massage, setMassage] = useState({ text: null, error: false });
  const { userId } = useContext(AuthContext);
  const [image, setImage] = useState("");
  const admin = localStorage.getItem("admin");
  const [disabled, setDisabled] = useState(false);
  const imageInputRef = useRef();
  const [data, setFormData] = useState({
    title: "",
    url: "",
    demo: "",
    userId,
    tags:[]
  });
  const addTags=(tag)=>{
    setFormData(
      (prevState) => ({
        ...prevState,
        tags: JSON.stringify(tag)
      }))
  }
  const { title, url, demo } = data;
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);

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
  
    setMassage({ text: null});
    const formData = new FormData();
    for (var key in data) {
      formData.append(key, data[key]);
    }

    formData.append("image", image);
    setDisabled(true);

    axios
      .post(process.env.REACT_APP_APP_URL + "/projects", formData)
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
          imageInputRef.current.value = "";
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
      <h3>Add project</h3>
      <div className="register-container createproject">
        <div className="form-container col-12  ">
          <form onSubmit={onSubmit} method="post" encType="multipart/form-data">
            <TextInput
              name="title"
              value={title}
              onChange={onChange}
              placeholder="Project Title"
            />
            <TextInput
              name="url"
              value={url}
              onChange={onChange}
              placeholder="Project Url"
            />
            <TextInput
              name="demo"
              value={demo}
              onChange={onChange}
              placeholder="Project Demo"
            />
              <TagInput onAddTag={addTags} placeholder="Add Tags"/>
            <label htmlFor="">Choose Image</label>
            <input type="file" name="image"   ref={imageInputRef}  onChange={onImageChange} required/>
            <button
              type="submit"
              disabled={disabled}
              className="btn btn-primary btn-custom"
            >
              <span className="btn-text">
              Add project
              </span>
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
