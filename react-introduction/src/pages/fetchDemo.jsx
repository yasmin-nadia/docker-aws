import React, { useEffect, useState } from "react";
import useProductHook from "../hooks/common/userProductHook";
import { useNavigate } from "react-router-dom";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import "../App.scss";

const FetchDemo = () => {
  const { productData, loading } = useProductHook();
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 4;

  // Handle previous page
  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  // Handle next page
  const handleNextPage = () => {
    // Implement logic to determine if there are more products to show on the next page
    // For now, we'll just increment the page number.
    setCurrentPage(currentPage + 1);
  };

  // Check if productData is available and not loading
  if (loading) {
    return <div>Loading...</div>;
  }

  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;
  const productsToDisplay = productData.slice(startIndex, endIndex);

  return (
    <div className="fetch-demo-container">
      <h1>All Books</h1>
      <div className="product-grid">
        {productsToDisplay.map((product) => (
          <div className="product-item" key={product._id}>
            <h5>{product.title}</h5>
            <p>Author: {product.author}</p>
            {/* <img
              src={product.image[0]}
              style={{ width: "200px", height: "200px" }}
            /> */}
            <button
              className="add-to-cart-button"
              onClick={() => navigate(`/products/${product._id}`)}
            >
              Show Details
            </button>
          </div>
        ))}
      </div>
      <div className="pagination">
        <button onClick={handlePreviousPage} disabled={currentPage === 1}>
          <FiChevronLeft /> Previous
        </button>
        <button onClick={handleNextPage}>
          Next <FiChevronRight />
        </button>
      </div>
    </div>
  );
};
export default FetchDemo;
