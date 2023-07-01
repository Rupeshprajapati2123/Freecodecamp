import React, { useState, useEffect } from "react";
import "./courses.css";
import NavMin from "../../Components/Navbar/NavMin";
import CourseItem from "../../Components/CourseItem/CourseItem";
import { useNavigate } from "react-router-dom";
import { Alert } from "@mui/material";
import jwt from "jsonwebtoken";

const Courses = () => {
  const [coursesData, setCoursesData] = useState([]);
  const [alert, setAlert] = useState(null);
  const navigate = useNavigate();

  async function populateCourses() {
    const req = await fetch("http://localhost:1337/api/courses");
    const data = await req.json();

    if (data.status === "ok") {
      setCoursesData(data.courses);
    } else {
      setAlert({
        severity: "error",
        message: data.error,
      });
      setTimeout(() => {
        setAlert(false);
      }, 2000);
    }
  }
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const user = jwt.decode(token);
      if (!user) {
        localStorage.removeItem("token");
        navigate("/login");
      } else {
        populateCourses();
      }
    }
  }, [navigate]);
  
  return (
    <div className="page">
      {alert && (
        <div className="alert-container">
          <Alert severity={alert.severity}>{alert.message}</Alert>
        </div>
      )}
      <NavMin />
      <div className="courses-page">
        <h1>Welcome to freeCodeCamp</h1>
        <p>
          "I have not failed, I've just found 10,000 ways <br />
          that won't work." <br />
          <span>- Thomas A. Edison</span>
        </p>
        <div className="courses-flex">
          {coursesData.map((item, id) => {
            return <CourseItem key={id} data={item} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Courses;
