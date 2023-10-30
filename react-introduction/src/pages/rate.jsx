import { useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import useAddRateHook from "../hooks/user/useAddRate";
import { useNavigate, useParams } from "react-router-dom";
import "../App.scss";

const Rate = () => {
  const { bookId } = useParams();
  const [rate, setRate] = useState(0);
  const [response, setResponse] = useState();
  const { createPost,updatePost,deletePost } = useAddRateHook(bookId);

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
    const formData = { rate };
    console.log("Add Rate Form is submitted ", formData);
    createPost(formData);
  };

  const handleUpdateRateSubmit = () => {
    // Define the logic for updating the rate here
    console.log("Update Rate Form is submitted");
    const formData = { rate };
    console.log("Update Rate Form is submitted ", formData);
    updatePost(formData);
  };
  const handleDeleteRateSubmit = () => {
    // Define the logic for updating the rate here
    console.log("Delete Rate Form is submitted");
    const formData = { rate };
    console.log("Delete Rate Form is submitted ", formData);
    deletePost(formData);
  };

  return (
    <div className="fetch-demo-container">
      <div>
        <h1>Add Rate</h1>
        <form style={formStyles} onSubmit={handleAddRateSubmit}>
          <div style={inputContainerStyles}>
            <label style={labelStyles}>Rate:</label>
            <input
              type="text"
              label="rate"
              placeholder="Input rate"
              onChange={(e) => setRate(parseFloat(e.target.value))}
              style={inputStyles}
            />
          </div>

          <button
            type="button"
            onClick={handleAddRateSubmit}
            style={submitButtonStyles}
          >
            Add Rate
          </button>
        </form>
      </div>

      <div className="fetch-demo-container">
        <div>
          <h1>Update Rate</h1>
          <form style={formStyles} onSubmit={handleUpdateRateSubmit}>
            <div style={inputContainerStyles}>
              <label style={labelStyles}>Rate:</label>
              <input
                type="text"
                label="rate"
                placeholder="Update rate"
                onChange={(e) => setRate(parseFloat(e.target.value))}
                style={inputStyles}
              />
            </div>

            <button
              type="button"
              onClick={handleUpdateRateSubmit}
              style={submitButtonStyles}
            >
              Update Rate
            </button>
          </form>
        </div>
      </div>
      <div className="fetch-demo-container">
        <div>
          <h1>Delete Rate</h1>
          <form style={formStyles} onSubmit={handleDeleteRateSubmit}>

            <button
              type="button"
              onClick={handleDeleteRateSubmit}
              style={submitButtonStyles}
            >
              Delete Rate
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Rate;
