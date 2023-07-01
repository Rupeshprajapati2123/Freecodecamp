const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const User = require("./models/user.model");
const Course = require("./models/course.model");
const jwt = require("jsonwebtoken");

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/freeCodeCamp");

app.post("/api/register", async (req, res) => {
  console.log(req.body);
  try {
    const user = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    });
    res.json({ status: "ok", message: "Registered" });
  } catch (err) {
    res.json({ status: "error", error: "Use Another Email" });
  }
});

app.post("/api/login", async (req, res) => {
  const user = await User.findOne({
    email: req.body.email,
    password: req.body.password,
  });

  if (user) {
    const token = jwt.sign(
      {
        name: req.body.name,
        email: req.body.email,
      },
      "secret123"
    );
    return res.json({
      status: "ok",
      user: token,
      message: "Login Successful!",
    });
  } else {
    return res.json({
      status: "error",
      user: false,
      error: "Invalid email/password",
    });
  }
});

app.get("/api/courses", async (req, res) => {
  try {
    const courses = await Course.find({});
    return res.json({ status: "ok", courses: courses });
  } catch (err) {
    console.log(err);
    return res.json({ status: "error", error: "No Courses Found" });
  }
});

app.listen(1337, () => {
  console.log("Server running on port 1337");
});
