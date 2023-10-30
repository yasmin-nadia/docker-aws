import React, { useEffect } from "react";
import "../App.scss";

const Balancedatamsg = () => {
  console.log("Userloggedin is working");
  const responseData = localStorage.getItem("balanceData");
  console.log("responseData", responseData, "responseData");
  return (
    <div className="checkout-container">
      <h1 className="checkout-title">Balance data Status</h1>
      {responseData && <p className="checkout-message">{responseData}</p>}
    </div>
  );
};

export default Balancedatamsg;
