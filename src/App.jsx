// src/App.jsx
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home"; // Import Home page
import Mining from "./components/Mining"; // Import Mining page
import Modal from "./components/Modal"; // Import Modal component
import Nav from "./components/Nav"; // Import Nav component
import "./App.css"; // Import global styles

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); // State for modal
  const [isModalActive, setIsModalActive] = useState(false); // Track if the modal is active

  const openModal = () => {
    setIsModalOpen(true);
    setIsModalActive(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setIsModalActive(false);
  };

  return (
    <Router>
      <div className="app-container">
        {" "}
        {/* Wrap in a container */}
        <Nav onOpen={openModal} isModal={isModalActive} />
        <div className="routes">
          {" "}
          {/* Add class for routes */}
          <Routes>
            <Route path="/Home" element={<Home />} />
            <Route path="/mining" element={<Mining />} />
          </Routes>
        </div>
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal} />
    </Router>
  );
};

export default App;
