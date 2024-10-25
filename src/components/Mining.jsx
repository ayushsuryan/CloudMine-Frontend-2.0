// src/pages/Mining.jsx
import React, { useState, useEffect } from "react";
import "./Mining.css";
import shadowImage from "../assets/shadow.svg";
import animationData from "../assets/animation.json";
import Lottie from "lottie-react";
import Nav from "../components/Nav"; // Import the Nav component
import Modal from "../components/Modal"; // Import the Modal component

const Mining = () => {
  const [isAnimated, setIsAnimated] = useState(false);
  const [segment, setSegment] = useState([0, 180]); // Initial segment for the first 6 seconds
  const [isMining, setIsMining] = useState(false); // Track mining state
  const [isModalOpen, setIsModalOpen] = useState(false); // State for modal

  const handleReconnect = () => {
    if (isMining) {
      // Stop mining
      setIsMining(false);
      setIsAnimated(false); // Stop animation
      setSegment([0, 180]); // Reset to initial segment
    } else {
      // Start mining
      setIsMining(true);
      setIsAnimated(true);
    }
  };

  const openModal = () => {
    setIsModalOpen(true); // Open modal
  };

  const closeModal = () => {
    setIsModalOpen(false); // Close modal
  };

  // Switch to the looping segment after the initial segment completes
  useEffect(() => {
    if (isAnimated && segment[0] === 0 && segment[1] === 180) {
      const timer = setTimeout(() => {
        // Change to loop segment after first segment plays once
        setSegment([180, 240]);
      }, 6000); // 6000 ms for 6 seconds

      return () => clearTimeout(timer); // Clear timeout if component unmounts or segment changes
    }
  }, [isAnimated, segment]);

  return (
    <div
      className="container"
      style={{
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#252433",
        color: "#fff",
        margin: 0,
        position: "relative",
      }}
    >
      {isAnimated ? (
        <Lottie
          animationData={animationData}
          play
          loop={segment[0] === 180} // Enable loop only for the looping segment
          initialSegment={segment}
          style={{
            position: "absolute",
            width: "100%",
            height: "408px",
            top: "100px",
            left: "50%",
            transform: "translateX(-50%)",
          }}
        />
      ) : (
        <img
          src={shadowImage}
          alt="Shadow"
          style={{
            position: "absolute",
            width: "100%",
            height: "408px",
            top: "100px",
            left: "50%",
            transform: "translateX(-50%)",
          }}
        />
      )}
      <Nav onOpen={openModal} /> {/* Pass openModal to Nav */}
      <div className="bottomContainer">
        <div className="contract">
          <h2>Fil shoot contract</h2>
          <p>
            Price per share: <span style={{ color: "#ff6600" }}>$7.00</span>
          </p>
          <p>Estimated monthly income: 0.00033 FIL</p>
        </div>

        <div className="level">
          <span>LV3</span>
          <span>x 330%</span>
          <button
            className="button"
            onClick={handleReconnect}
            style={{
              background: isMining
                ? "red"
                : "linear-gradient(180deg, #4de1ff 0%, #327fa6 100%)",
            }}
          >
            {isMining ? "Stop Mining" : "Start Mining"}
          </button>
        </div>
      </div>
      {/* Modal component with isOpen state */}
      <Modal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default Mining;
