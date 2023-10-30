import React, { useEffect } from "react";
import "../App.scss";
import { useNavigate } from "react-router-dom";
const Addratemsg = () => {
  console.log("Userloggedin is working");

  const responseData = localStorage.getItem("addratemsg");
  const responseData2 = localStorage.getItem("addrateerrormsg");
  console.log("responseData", responseData, "responseData");
  return (
    <div className="checkout-container">
      <h1 className="checkout-title">Add rate Status</h1>
      {responseData && <p className="checkout-message">{responseData}</p>}
      {responseData2 && <p className="checkout-message">{responseData2}</p>}
    </div>
  );
};

export default Addratemsg;
