
import React, { useEffect } from "react";
import "../App.scss";

const Addcartmsg = () => {
  console.log("Userloggedin is working");
  const responseData = localStorage.getItem("addcartmsg");
  console.log("responseData", responseData, "responseData");
  return (
    <div className="checkout-container">
      <h1 className="checkout-title">Remove cart Status</h1>
      {responseData && <p className="checkout-message">{responseData}</p>}
    </div>
  );
};

export default Addcartmsg;
