// src/components/Modal.jsx
import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import Nav from "./Nav"; // Import the Nav component
import "./Modal.css"; // Import modal styles

const Modal = ({ isOpen, onClose }) => {
  const navigate = useNavigate(); // Initialize useNavigate

  if (!isOpen) return null; // Don't render if not open

  const handleNavigation = (path) => {
    navigate(path); // Navigate to the specified path
    onClose(); // Close the modal after navigation
  };

  return (
    <div className="modalOverlay">
      <div className="modalContent">
        <Nav onClose={onClose} /> {/* Use the Nav component */}
        <ul>
          <li onClick={() => handleNavigation("/home")}>Home</li>
          <li onClick={() => handleNavigation("/order")}>Buy Rigs</li>
          <li onClick={() => handleNavigation("/mining")}>Start Mining</li>
          {/* Add more menu items as needed */}
        </ul>
      </div>
    </div>
  );
};

export default Modal;
