import React, { useEffect, useState } from "react";
import useShowtranHook from "../hooks/user/useShowtranHook";
import { useNavigate } from "react-router-dom";

import "../App.scss";
const Showselftransaction = () => {
  const { responseData, loading } = useShowtranHook();
  console.log("responseData of self transaction", responseData);
  useEffect(() => {
    console.log("Product data changed:", responseData);
  }, [responseData, loading]);

  return (
    <div className="fetch-demo-container">
      <h1>Transaction</h1>
      <div className="transaction-list">
        {responseData ? (
          <div className="transaction-item">
            <p>Cart ID: {responseData.cartId}</p>
            <p>User ID: {responseData.userId}</p>
            <p>Total: {responseData.total}</p>
          </div>
        ) : (
          <div>No transaction data available.</div>
        )}
      </div>
    </div>
  );
};
export default Showselftransaction;
