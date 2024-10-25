// src/components/Modal.jsx
import React from "react";
import Nav from "./Nav"; // Import the Nav component
import "./Modal.css"; // Import modal styles

const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null; // Don't render if not open

  return (
    <div className="modalOverlay">
      <div className="modalContent">
        <Nav onClose={onClose} /> {/* Use the Nav component */}
        <ul>
          <li>Home</li>
          <li>Buy Rigs</li>
          <li>Start Mining</li>
          {/* Add more menu items as needed */}
        </ul>
      </div>
    </div>
  );
};

export default Modal;
