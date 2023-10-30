import React, { useEffect } from "react";
import jwtDecode from "jwt-decode";
import { useParams, useNavigate } from "react-router-dom";
import "../App.scss";

const ShowSelfInfo = () => {
  const check = localStorage.getItem("token");
  const decodedToken = jwtDecode(check);
const navigate=useNavigate()
const navigateToShowTransaction = () => {
  navigate("/showtransaction"); 
};
const handleaddbalance = () => {
  navigate("/addbalance"); 
};
const showcart = () => {
  navigate("/showselfcart"); 
};
  return (
    <div className="checkout-container">
      <div className="product-item">
        <h2>User Information</h2>
        <p>Name: {decodedToken.id.name}</p>
        <p>Address: {decodedToken.id.address.streetAddress}, {decodedToken.id.address.area}</p>
        <p>Balance: {decodedToken.id.balancedData}</p>
        <p>Cart ID: {decodedToken.id.cartId}</p>
        <p>Transaction ID: {decodedToken.id.transactionId}</p>
        <p>Phone: {decodedToken.id.phone}</p>
        <p>Role: {decodedToken.role}</p>
        <button
                  className="add-to-cart-button"
                  onClick={handleaddbalance}
                >
                  Add balance
                </button> 
                <button
                  className="add-to-cart-button"
                  onClick={navigateToShowTransaction}
                >
                  View transaction
                </button> 
                <button
                  className="add-to-cart-button"
                  onClick={showcart}
                >
                  View cart
                </button> 

      </div>
    </div>
  );
};

export default ShowSelfInfo;

