import React from "react";
import "./courseItem.css";

const CourseItem = ({ data }) => {
  return (
    <div className="courseItem">
      <span className="courseItem-title">{data.title}</span>
      <span className="courseItem-duration">{data.duration}</span>
    </div>
  );
};

export default CourseItem;
