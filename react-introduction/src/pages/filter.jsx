import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import useFilterProductHook from "../hooks/common/useFilterProductHook";
import "../App.scss";

const Filter = () => {
  const [price, setPriceField] = useState();
  const [priceFlow, setPriceFlow] = useState();
  const navigate = useNavigate();
  const { productData, loading, createPost } = useFilterProductHook();

  const handleSortValueChange = (event) => {
    setPriceField(event.target.value);
  };

  const handleSortFlowChange = (event) => {
    setPriceFlow(event.target.value);
  };

  const handleUpdateSubmit = (e) => {
    e.preventDefault();
    const discountData = {
      price,
      priceFlow,
    };
    createPost({ discountData });
  };

  return (
    <div>
      <form onSubmit={handleUpdateSubmit}>
        <div className="header-dropdown">
          <label className="header-link-two">Price:</label>
          <input
            className="header-link-two"
            type="text"
            value={price}
            onChange={handleSortValueChange}
            placeholder="Enter price"
          />
          <select
            className="header-link-two"
            value={priceFlow}
            onChange={handleSortFlowChange}
          >
            <option value="lower">Lower</option>
            <option value="upper">Upper</option>
          </select>
          <button
            type="submit"
            className="header-link-two"
            onSubmit={handleUpdateSubmit}
          >
            Submit
          </button>
        </div>
      </form>

      <div className="show-product-detail">
        {loading === true && <h4>Loading...</h4>}
        {/* <h1>Product Details</h1> */}
        {productData && Array.isArray(productData) && productData.length > 0 ? (
          <div className="product-grid-two">
            {productData.map((product) => (
              <div className="product-item" key={product._id}>
                <h4>Product Title: {product.title}</h4>
                <p>Author: {product.author}</p>
                <p>Price: ${product.price}</p>
                <p>Stock: {product.stock} in stock</p>
                <p>Genres: {product.genre.join(", ")}</p>
              </div>
            ))}
          </div>
        ) : (
          <p>No products available.</p>
        )}
      </div>
    </div>
  );
};

export default Filter;
