import React, { useState } from "react";
import "./Home.css";
import heroImage from "../assets/hero.svg";
import rupee from "../assets/rupee.svg";
import arrow from "../assets/arrow.svg";
import deposit from "../assets/deposit.svg";
import withdraw from "../assets/withdraw.svg";

const Home = () => {
  const [balance, setBalance] = useState("70,000");
  const [isExpanded, setIsExpanded] = useState(false);
  const [isDepositModalOpen, setIsDepositModalOpen] = useState(false);
  const [isWithdrawModalOpen, setIsWithdrawModalOpen] = useState(false);
  const [inputAmount, setInputAmount] = useState("");

  const toggleContainer = () => {
    setIsExpanded(!isExpanded);
  };

  const handleDeposit = () => {
    console.log("Deposited:", inputAmount);
    setIsDepositModalOpen(false);
    setInputAmount("");
  };

  const handleWithdraw = () => {
    console.log("Withdrew:", inputAmount);
    setIsWithdrawModalOpen(false);
    setInputAmount("");
  };

  const handleNumberClick = (number) => {
    setInputAmount((prev) => prev + number);
  };

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

      {!isExpanded ? (
        <div
          style={{
            zIndex: 1,
            width: "90%",
            position: "absolute",
            bottom: "150px",
          }}
          className="bottomContainer"
          onClick={toggleContainer}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "20px 15px",
            }}
            className="contract"
          >
            <img src={rupee} alt="cash" />
            <h2>{balance} INR</h2>
            <img style={{ width: "30px" }} src={arrow} alt="cash" />
          </div>
        </div>
      ) : (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
            height: "300px",
            position: "absolute",
            bottom: "70px",
            zIndex: 1,
            width: "80%",
          }}
          className="bottomContainer"
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "20px 15px",
            }}
            className="contract"
            onClick={() => setIsDepositModalOpen(true)}
          >
            <img style={{ width: "40px" }} src={deposit} alt="cash" />
            <h2>Deposit</h2>
            <img style={{ width: "30px" }} src={arrow} alt="cash" />
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "20px 15px",
            }}
            className="contract"
            onClick={() => setIsWithdrawModalOpen(true)}
          >
            <img style={{ width: "40px" }} src={withdraw} alt="cash" />
            <h2>Withdraw</h2>
            <img style={{ width: "30px" }} src={arrow} alt="cash" />
          </div>
        </div>
      )}

      {/* Deposit Modal */}
      {isDepositModalOpen && (
        <div className="modalBackground">
          <div
            className="modalContent"
            style={{ height: "auto", width: "80%" }}
          >
            <button
              className="closeButton"
              onClick={() => setIsDepositModalOpen(false)}
            >
              ×
            </button>
            <h3>Deposit Amount</h3>
            <input
              type="text"
              value={inputAmount}
              readOnly
              placeholder="Enter amount"
              className="inputField"
            />
            <div className="numberPad">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, null, 0, null].map((num, index) =>
                num !== null ? (
                  <button
                    key={index}
                    onClick={() => handleNumberClick(num)}
                    className="numberButton"
                  >
                    {num}
                  </button>
                ) : (
                  <div key={index} className="emptyButton" />
                )
              )}
            </div>
            <button onClick={handleDeposit} className="actionButton">
              Deposit
            </button>
          </div>
        </div>
      )}

      {/* Withdraw Modal */}
      {isWithdrawModalOpen && (
        <div className="modalBackground">
          <div
            className="modalContent"
            style={{ height: "auto", width: "80%" }}
          >
            <button
              className="closeButton"
              onClick={() => setIsWithdrawModalOpen(false)}
            >
              ×
            </button>
            <h3>Withdraw Amount</h3>
            <input
              type="text"
              value={inputAmount}
              readOnly
              placeholder="Enter amount"
              className="inputField"
            />
            <button onClick={handleWithdraw} className="actionButton">
              Withdraw
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
