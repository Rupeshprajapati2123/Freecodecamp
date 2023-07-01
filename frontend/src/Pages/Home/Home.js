import React from "react";
import "./home.css";
import Nav from "../../Components/Navbar/Nav";
import { BsMicrosoft } from "react-icons/bs";
import { BsGoogle } from "react-icons/bs";
import { BsApple } from "react-icons/bs";
import { BsSpotify } from "react-icons/bs";
import { AiOutlineAmazon } from "react-icons/ai";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="page">
      <Nav />
      <div className="home-body">
        <div className="home-body-text">
          <span>Learn to code — for free.</span>
          <span>Build projects.</span>
          <span>Earn certifications.</span>
        </div>
        <div className="home-body-text-2">
          <p>
            Since 2014, more than 40,000 freeCodeCamp.org graduates have gotten
            jobs at tech companies including:
          </p>
          <div className="home-body-tags">
            <BsApple />
            <BsGoogle />
            <BsMicrosoft />
            <BsSpotify />
            <AiOutlineAmazon />
          </div>
        </div>
        <Link to="/register" className="home-sign">
          Get Started (it's free)
        </Link>
      </div>
    </div>
  );
};

export default Home;
