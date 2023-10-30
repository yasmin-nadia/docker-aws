import React, { useEffect } from "react";
import "../App.scss";

const Addusermsg = () => {
  console.log("Add user is working");
  const responseData = localStorage.getItem("addusermsg");
  console.log("responseData", responseData, "responseData");
  return (
    <div className="checkout-container">
      <h1 className="checkout-title">Add user Status</h1>
      {responseData && <p className="checkout-message">{responseData}</p>}
    </div>
  );
};

export default Addusermsg;
