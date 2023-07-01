import React, { useState } from "react";
import "../Login/login.css";
import NavMin from "../../Components/Navbar/NavMin";
import f_icon from "../../Assets/Images/f_icon.png";
import g_icon from "../../Assets/Images/g_icon.png";
import { Link, useNavigate } from "react-router-dom/";
import { TextField, Alert } from "@mui/material";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [alert, setAlert] = useState(null);
  const navigate = useNavigate();

  async function registerUser(e) {
    e.preventDefault();

    const response = await fetch("http://localhost:1337/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        password,
      }),
    });

    const data = await response.json();

    if (data.status === "ok") {
      setAlert({
        severity: "success",
        message: data.message,
      });
      setTimeout(() => {
        navigate("/login");
      }, 1000);
    }
    else{
      setAlert({
        severity: "error",
        message: data.error,
      });
      setTimeout(() => {
        setAlert(false);
        
      }, 2000);
    }
  }
  return (
    <div className="page">
      {alert && (
        <div className="alert-container">
          <Alert severity={alert.severity}>{alert.message}</Alert>
        </div>
      )}
      <NavMin />
      <div className="login-wrapper">
        <img src={f_icon} alt="logo" className="login-logo" />
        <h1 className="login-title">
          Sign up for freeCodeCamp
          <br /> Learn
        </h1>
        <div className="google-login">
          <img src={g_icon} alt="google" className="google-logo" />
          <span>Continue with Google</span>
        </div>
        <div className="login-line" />
        <form className="login-form" onSubmit={registerUser}>
          <TextField
            label="Name"
            variant="outlined"
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            fullWidth
          />
          <TextField
            label="Email"
            variant="outlined"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            fullWidth
          />
          <TextField
            label="Passowrd"
            variant="outlined"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            fullWidth
          />
          <input type="submit" value="Register" className="login-btn" />
        </form>
        <div className="already-flex">
          <span className="already-flex-text">Already have an account?</span>
          <Link to="/login" className="already-flex-link">
            Log in
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
