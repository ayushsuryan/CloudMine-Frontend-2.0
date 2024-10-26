import React from "react";
import "./Order.css";
import bronze from "../assets/bronze.svg";
import silver from "../assets/silver.svg";
import gold from "../assets/gold.svg";
import platinum from "../assets/platinum.svg";
import diamond from "../assets/diamond.svg";
import legendary from "../assets/legendary.svg";
import shadowImage from "../assets/shadow.svg";

const Order = () => {
  // Array of objects representing each card's data
  const rigs = [
    {
      id: 1,
      name: "Cubexo Bronze",
      price: "60,000",
      dailyReturn: "1,200",
      duration: "90 Days",
      img: bronze,
    },
    {
      id: 2,
      name: "Cubexo Silver",
      price: "80,000",
      dailyReturn: "1,500",
      duration: "120 Days",
      img: silver,
    },
    {
      id: 3,
      name: "Cubexo Gold",
      price: "100,000",
      dailyReturn: "2,000",
      duration: "150 Days",
      img: gold,
    },
    {
      id: 4,
      name: "Cubexo Platinum",
      price: "150,000",
      dailyReturn: "3,000",
      duration: "150 Days",
      img: platinum,
    },
    {
      id: 5,
      name: "Cubexo Diamon",
      price: "150,000",
      dailyReturn: "3,000",
      duration: "150 Days",
      img: diamond,
    },
    {
      id: 6,
      name: "Cubexo Platinum",
      price: "150,000",
      dailyReturn: "3,000",
      duration: "150 Days",
      img: legendary,
    },

    // Add more rig objects as needed
  ];

  return (
    <div className="container">
      <div className="blurred-image-container">
        <img src={shadowImage} alt="Shadow" className="blurred-image" />
      </div>
      <div className="cards-container">
        {rigs.map((rig) => (
          <div className="card" key={rig.id}>
            <img src={rig.img} alt={rig.name} />
            <div className="right">
              <div className="right-item">
                <span>{rig.name}</span>
              </div>
              <div className="right-item">
                <span className="gray-text">Price:</span>
                <span className="red-text">{rig.price}</span>
              </div>
              <div className="right-item">
                <span className="gray-text">Daily Return:</span>
                <span>{rig.dailyReturn}</span>
              </div>
              <div className="right-item">
                <span className="gray-text">Duration:</span>
                <span>{rig.duration}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Order;
