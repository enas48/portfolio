import  React, { useState , useEffect} from "react";
import { Navigate,Link } from "react-router-dom";
import axios from "axios";
import "../portfolio/portfolio.css"
import DataTable from 'react-data-table-component';
export  function DashboardIndex() {
    const[projects, setProjects] = useState([]);
    const columns = [
        {
            name: 'Title',
            selector: row => row.title,
            sortable: true,
        },
        {
            name: 'Image',
            selector: row => (
                <img
                  alt="avater"
                  className="img-thumbnail img-fluid dashboard-avater my-2"
                  src={row.image}
                />
              ),
        },
        {
            name: 'Demo',
            selector: row => row.demo,
        },
        {
            name: 'Url',
            selector: row => row.url,
        },
        {
            nam: "#",
            cell: (row) => (
                <>
              <Link className="btn btn-primary me-2" to={`edit/${row._id}`}>
 Edit
              </Link>
                  <a
                  href={row.demo}
                  className="btn btn-danger "
                  target="_blank"
                  rel="noreferrer"
                  id={row._id}
                >
                  Delete
                </a>
                </>
            ),
          },
    ]
    useEffect(() => {
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
          console.log(data); 
       
        } catch (err) {
          console.log(err);
   
        }
      };

      fetchProjects();
  }, []);
  const admin = localStorage.getItem("admin");
  if (admin === "false") {
    return <Navigate replace to="/" />;
  }
  return (
    <div className="">
          <DataTable className="table"
            columns={columns}
            data={projects}
    
        />
    </div>
  )
}
