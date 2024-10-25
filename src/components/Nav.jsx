// src/components/Nav.jsx
import React from "react";
import hamburger from "../assets/hamburger.svg";
import closeIcon from "../assets/closeIcon.svg"; // Ensure this is imported
import "./Nav.css";

const Nav = ({ onClose, onOpen }) => {
  return (
    <div className="nav">
      <div className="title">Cloud Mining</div>
      <img
        src={onClose ? closeIcon : hamburger} // Use close icon if onClose is provided
        alt="menu-icon"
        onClick={onClose ? onClose : onOpen} // Call onOpen or onClose function when clicked
        style={{ cursor: "pointer" }}
      />
    </div>
  );
};

export default Nav;
