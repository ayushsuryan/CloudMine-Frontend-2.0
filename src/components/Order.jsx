import React, { useState } from "react";
import "./Order.css";
import bronze from "../assets/bronze.svg";
import silver from "../assets/silver.svg";
import gold from "../assets/gold.svg";
import platinum from "../assets/platinum.svg";
import diamond from "../assets/diamond.svg";
import legendary from "../assets/legendary.svg";
import shadowImage from "../assets/shadow.svg";

const Order = () => {
  const [selectedRig, setSelectedRig] = useState(null);
  const [balance] = useState(70000);

  const rigs = [
    {
      id: 1,
      name: "Cubexo WKB",
      price: 60000,
      dailyReturn: "1,200",
      duration: "90 Days",
      img: bronze,
    },
    {
      id: 2,
      name: "Cubexo TRX",
      price: 80000,
      dailyReturn: "1,500",
      duration: "120 Days",
      img: silver,
    },
    {
      id: 3,
      name: "Cubexo USDT",
      price: 100000,
      dailyReturn: "2,000",
      duration: "150 Days",
      img: gold,
    },
    {
      id: 4,
      name: "Cubexo FIL",
      price: 150000,
      dailyReturn: "3,000",
      duration: "150 Days",
      img: platinum,
    },
    {
      id: 5,
      name: "Cubexo ETH",
      price: 150000,
      dailyReturn: "3,000",
      duration: "150 Days",
      img: diamond,
    },
    {
      id: 6,
      name: "Cubexo BTC",
      price: 150000,
      dailyReturn: "3,000",
      duration: "150 Days",
      img: legendary,
    },
  ];

  const handleBuyClick = (rig) => {
    setSelectedRig(rig);
  };

  const closeModal = () => {
    setSelectedRig(null);
  };

  const confirmPurchase = () => {
    alert("Purchase confirmed!");
    setSelectedRig(null);
  };

  return (
    <div className="container">
      <div className="cards-container">
        <img
          style={{ zIndex: -1 }}
          src={shadowImage}
          alt="Shadow"
          className="blurred-image"
        />
        {rigs.map((rig) => (
          <div className="card" key={rig.id}>
            <img src={rig.img} alt={rig.name} />
            <div className="right">
              <div className="right-item">
                <span>{rig.name}</span>
              </div>
              <div className="right-item">
                <span className="gray-text">Price:</span>
                <span className="red-text">{rig.price.toLocaleString()}</span>
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
            <button className="buyBtn" onClick={() => handleBuyClick(rig)}>
              Buy
            </button>
          </div>
        ))}
      </div>

      {selectedRig && (
        <div className="modal open">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            <h3>Cart</h3>
            <div className="card" key={selectedRig.id}>
              <img src={selectedRig.img} alt={selectedRig.name} />
              <div className="right">
                <div className="right-item">
                  <span>{selectedRig.name}</span>
                </div>
                <div className="right-item">
                  <span className="black-text">Price:</span>
                  <span className="red-text">
                    {selectedRig.price.toLocaleString()}
                  </span>
                </div>
                <div className="right-item">
                  <span className="black-text">Daily Return:</span>
                  <span>{selectedRig.dailyReturn}</span>
                </div>
                <div className="right-item">
                  <span className="black-text">Duration:</span>
                  <span>{selectedRig.duration}</span>
                </div>
              </div>
            </div>
            <p className="balance">
              <strong>Available Balance:</strong> {balance.toLocaleString()}
            </p>
            <button
              className="confirmBtn"
              onClick={confirmPurchase}
              disabled={balance < selectedRig.price}
            >
              Confirm Purchase
            </button>
            {balance < selectedRig.price && (
              <div>
                {" "}
                <br />
                <span className="red-text">Low Balance</span>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Order;
