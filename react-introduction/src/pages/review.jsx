import { useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import useAddReviewHook from "../hooks/user/useAddReview";
import { useNavigate, useParams } from "react-router-dom";
import "../App.scss";

const Review = () => {
  const { bookId } = useParams();
  const [reviewText, setReview] = useState(""); // Changed 'rate' to 'review'
  const [response, setResponse] = useState();
  const { createPost, updatePost, deletePost } = useAddReviewHook(bookId);

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

  const textareaStyles = {
    width: "100%", // Full width
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

  const handleAddReviewSubmit = () => {
    const formData = { reviewText };
    console.log("Add Review Form is submitted ", formData);
    createPost(formData);
  };

  const handleUpdateReviewSubmit = () => {
    // Define the logic for updating the review here
    console.log("Update Review Form is submitted");
    const formData = { reviewText };
    console.log("Update Review Form is submitted ", formData);
    updatePost(formData);
  };

  const handleDeleteReviewSubmit = () => {
    // Define the logic for deleting the review here
    console.log("Delete Review Form is submitted");
    deletePost();
  };

  return (
    <div className="fetch-demo-container">
      <div>
        <h1>Add Review</h1>
        <form style={formStyles} onSubmit={handleAddReviewSubmit}>
          <div style={inputContainerStyles}>
            <label style={labelStyles}>Review:</label>
            <textarea
              label="reviewText"
              placeholder="Input review"
              onChange={(e) => setReview(e.target.value)}
              style={textareaStyles}
            />
          </div>

          <button
            type="button"
            onClick={handleAddReviewSubmit}
            style={submitButtonStyles}
          >
            Add Review
          </button>
        </form>
      </div>

      <div className="fetch-demo-container">
        <div>
          <h1>Update Review</h1>
          <form style={formStyles} onSubmit={handleUpdateReviewSubmit}>
            <div style={inputContainerStyles}>
              <label style={labelStyles}>Review:</label>
              <textarea
                label="reviewText"
                placeholder="Update review"
                onChange={(e) => setReview(e.target.value)}
                style={textareaStyles}
              />
            </div>

            <button
              type="button"
              onClick={handleUpdateReviewSubmit}
              style={submitButtonStyles}
            >
              Update Review
            </button>
          </form>
        </div>
      </div>
      <div className="fetch-demo-container">
        <div>
          <h1>Delete Review</h1>
          <form style={formStyles} onSubmit={handleDeleteReviewSubmit}>
            <button
              type="button"
              onClick={handleDeleteReviewSubmit}
              style={submitButtonStyles}
            >
              Delete Review
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Review;
