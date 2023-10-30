import { useSelector } from "react-redux";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import useLoginHook from "../hooks/admin/useLoginHook";
import { useAuth } from "./AuthContext";

import "../App.scss";

const Userloggedin = () => {
  console.log("Userloggedin is working");
  const responseData = localStorage.getItem("responseData");
  console.log("responseData", responseData, "responseData");
  return (
    <div className="checkout-container">
      <h1 className="checkout-title">Login Status</h1>
      {responseData && <p className="checkout-message">{responseData}</p>}
    </div>
  );
};

export default Userloggedin;
