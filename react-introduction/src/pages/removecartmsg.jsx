
import React, { useEffect } from "react";
import "../App.scss";

const Removecartmsg = () => {
  console.log("Userloggedin is working");
  const responseData = localStorage.getItem("removecartmsg");
  console.log("responseData", responseData, "responseData");
  return (
    <div className="checkout-container">
      <h1 className="checkout-title">Remove cart Status</h1>
      {responseData && <p className="checkout-message">{responseData}</p>}
    </div>
  );
};

export default Removecartmsg;
