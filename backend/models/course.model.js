const mongoose = require("mongoose");

const Course = new mongoose.Schema(
  {
    title: { type: String, required: true },
    duration: { type: String, required: true },
  },
  {
    collection: "course-data",
  }
);

const model = mongoose.model("CourseData", Course);
module.exports = model;
