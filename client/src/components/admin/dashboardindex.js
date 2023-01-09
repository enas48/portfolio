import React, { useState, useEffect } from "react";
import { Navigate, Link } from "react-router-dom";
import axios from "axios";
import MessageModal from "../uielements/messageModal";
import "../portfolio/portfolio.css";
import Modal from "../uielements/Modal";

export function DashboardIndex() {
  const [projects, setProjects] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [id, setId] = useState(null);
  const [massage, setMassage] = useState({ text: null, error: false });

  const fetchProjects = async () => {
    try {
      const result = await axios(`${process.env.REACT_APP_APP_URL}/projects`, {
        headers: {
          Accept: "application/json",
        },
      });
      //get user
      const data = result.data.projects;
      setProjects(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  const handleClick = (e) => {
    setId(e.target.id);
    setModalOpen(true);
  };

  const handleDelete = async (e) => {
    let projectId = e.target.id;
    setMassage({ text: null, error: false });
    try {
      const result = await axios(
        `${process.env.REACT_APP_APP_URL}/projects/${projectId}`,
        {
          method: "delete",
          headers: {
            Accept: "application/json",
          },
        }
      );
      //get user
      const data = result.data.message;
      fetchProjects();
      setMassage({ text: data, error: false });
      
    } catch (err) {
      setMassage({
        text: err.response.data.message || "something want wrong",
        error: true,
      })
    }
    console.log(e.target.id);
    setModalOpen(false);
  };
  const handleClose = () => {
    setModalOpen(false);
    setId(null);
  };
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
      <div className="table-responsive">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Title</th>
              <th scope="col">Image</th>
              <th scope="col">Github Url</th>
              <th scope="col">Live Demo</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {projects &&
              projects.map((item) => (
                <tr key={item._id}>
                  <td>{item.title}</td>
                  <td>
                    <img
                      alt="avater"
                      className="img-fluid dashboard-avater"
                      src={item.image}
                    />
                  </td>
                  <td>
                    <a href={item.url} target="_blank" rel="noreferrer">
                      Github
                    </a>
                  </td>
                  <td>
                    <a href={item.demo} target="_blank" rel="noreferrer">
                      Demo
                    </a>
                  </td>
                  <td>
                    <div className="d-flex">
                      <Link
                        className="btn btn-primary btn-custom me-2"
                        to={`edit/${item._id}`}
                      >
                        Edit
                      </Link>
                      <button
                        className="btn btn-danger "
                        id={item._id}
                        onClick={handleClick}
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      <Modal
        show={modalOpen}
        onClose={handleClose}
        id={id}
        onDelete={handleDelete}
      />
    </div>
    </>
  );
}
