import { useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import useAddDiscountHook from "../hooks/admin/useAddDiscount";
import { useNavigate, useParams } from "react-router-dom";
import "../App.scss";

const Adddiscount = () => {
  const { bookId } = useParams();
  const [discountId, setDiscount] = useState(0);
  const [response, setResponse] = useState();
  const { createPost} = useAddDiscountHook(bookId);

  const formStyles = {
    maxWidth: "400px",
    margin: "0 auto",
  };

  const inputContainerStyles = {
    marginBottom: "15px",
  };

  const labelStyles = {
    display: "block",
    marginBottom: "5px",
    fontWeight: "bold",
  };

  const inputStyles = {
    width: "100%",
    padding: "10px",
    fontSize: "16px",
    border: "1px solid #ccc",
    borderRadius: "4px",
    boxSizing: "border-box",
    marginBottom: "5px",
  };

  const submitButtonStyles = {
    backgroundColor: "#734d26",
    color: "white",
    border: "none",
    borderRadius: "4px",
    padding: "10px 20px",
    fontSize: "16px",
    cursor: "pointer",
  };

  const handleAddRateSubmit = () => {
    const formData = {discountId };
    console.log("Add discount Form is submitted ", formData);
    createPost(formData);
  };

 

  return (
    <div className="fetch-demo-container">
      <div>
        <h1>Add Discount</h1>
        <form style={formStyles} onSubmit={handleAddRateSubmit}>
          <div style={inputContainerStyles}>
            <label style={labelStyles}>Rate:</label>
            <input
              type="text"
              label="discountId"
              placeholder="Input discountId"
              onChange={(e) => setDiscount(e.target.value)}
              style={inputStyles}
            />
          </div>

          <button
            type="button"
            onClick={handleAddRateSubmit}
            style={submitButtonStyles}
          >
            Add Discount
          </button>
        </form>
      </div>

      </div>
  );
};

export default Adddiscount;
