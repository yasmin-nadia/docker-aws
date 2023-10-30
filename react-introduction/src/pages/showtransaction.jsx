import React, { useEffect,useState } from "react";
import useShowTransaction from "../hooks/admin/useShowTransacttion";
import { useNavigate } from "react-router-dom";

import "../App.scss";
const Showtransaction = () => {
  const { productData, loading } = useShowTransaction();
  console.log("transactiondata", productData);
 const check= localStorage.getItem("transactionData")
const transactionData = check === null ? [] : JSON.parse(check);
  useEffect(() => {
    
    console.log("Product data changed:", productData);
  }, [productData,loading]);
 
console.log("transactionData",transactionData)

  return (
    <div className="fetch-demo-container">
      <h1>All Transaction</h1>
      <div className="transaction-list">
      {Array.isArray(transactionData.Transactions) ? (
         transactionData.Transactions.map((transaction, index) => (
            transaction.userId && (
              <div className="transaction-item" key={index}>
                <p>Name: {transaction.userId.name}</p>
                <p>Total: {transaction.total}</p>
              </div>
            )
          ))
        ) : (
          <div>No transaction data available.</div>
        )}
      </div>
    </div>
  );
};
export default Showtransaction;