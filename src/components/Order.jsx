import React from "react";
import "./Order.css";
import rigImage from "../assets/test.svg";
import shadowImage from "../assets/shadow.svg";

const Order = () => {
  return (
    <div className="container">
      <div className="blurred-image-container">
        <img src={shadowImage} alt="Shadow" className="blurred-image" />
      </div>
      <div className="cards-container">
        <div className="card">
          <img src={rigImage} alt="rigImage" />
          <div className="right">
            <div className="right-item">
              <span>Heading:</span>
            </div>
            <div className="right-item">
              <span className="gray-text">Heading:</span>
              <span className="red-text">Lorem, ipsum</span>
            </div>
            <div className="right-item">
              <span className="gray-text">Heading:</span>
              <span>Lorem, ipsum</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;
