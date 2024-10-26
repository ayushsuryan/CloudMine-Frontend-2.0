// src/pages/Home.jsx
import React from "react";
import "./Home.css";
import heroImage from "../assets/hero.svg";
import rupee from "../assets/rupee.svg";
import arrow from "../assets/arrow.svg";
const Home = () => {
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
      <img
        src={heroImage}
        alt="Shadow"
        style={{
          position: "absolute",
          width: "100%",
          height: "90vh",
          top: "-50px",
          left: "50%",
          transform: "translateX(-50%)",
        }}
      />
      <div style={{ zIndex: 1, width: "90%%" }} className="bottomContainer">
        <div
          style={{ display: "flex", alignItems: "center" }}
          className="contract"
        >
          <img src={rupee} alt="cash" />
          <h2>Deposit / Withdraw</h2>

          <img style={{ width: "30px" }} src={arrow} alt="cash" />
        </div>
      </div>
    </div>
  );
};

export default Home;
