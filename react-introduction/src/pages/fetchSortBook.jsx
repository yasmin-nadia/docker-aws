import React, { useEffect } from "react";
import useSortProductHook from "../hooks/common/useSortProductHook";
import { useNavigate } from "react-router-dom";
import "../App.scss";

const FetchSortBook = () => {
  const { productData, loading } = useSortProductHook();

  useEffect(() => {
    console.log("From FetchDemo", productData);
  }, [productData]);
  console.log(" coproductData", productData);
  const navigate = useNavigate();

  return (
    <div className="fetch-demo-container">
      <h1>All Books</h1>
      <div className="product-grid">
        {productData.map((product) => (
          <div className="product-item" key={product._id}>
            <h5>{product.title}</h5>
            <p>Author: {product.author}</p>
            <img
              src={product.image[0]}
              style={{ width: "200px", height: "200px" }}
            />
            <button
              className="add-to-cart-button"
              onClick={() => navigate(`/products/${product._id}`)}
            >
              Show Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FetchSortBook;
