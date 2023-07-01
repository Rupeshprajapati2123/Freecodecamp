import React from "react";
import main_icon from "../../Assets/Images/main_icon.png";

const NavMin = () => {
  return (
    <div className="navMin">
      <a href="/">
        <img src={main_icon} alt="Free Code Camp" className="nav-logo" />
      </a>
    </div>
  );
};

export default NavMin;
