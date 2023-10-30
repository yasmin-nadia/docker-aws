import { useSelector } from "react-redux";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useSortProductHook from "../hooks/common/useSortProductHook";
import "../App.scss";

const Sort = () => {
  const [sortingOption, setSortingOption] = useState("default");
  const [sortField, setSortField] = useState("");
  const [order, setOrder] = useState("");
  const [sortField2, setSortField2] = useState("");
  const [order2, setOrder2] = useState("");
  //   const [productData, setProductData] = useState([]);
  //   const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { productData, loading, createPost } = useSortProductHook(
    order,
    sortField
  );
  //   if (sortField && order) {
  //     const { productData, loading } = useSortProductHook(order, sortField);
  //     if (sortField && order) {
  //         const { productData, loading } = useSortProductHook(order, sortField);
  //         setProductData(productData);
  //         setLoading(loading);
  //       }
  //   }
  const handleSortingChange = (event) => {
    setSortingOption(event.target.value);
    if (event.target.value === "ascending") {
      setOrder("asc");
    } else if (event.target.value === "descending") {
      setOrder("desc");
    }
  };

  const handleSortFieldChange = (event) => {
    setSortField(event.target.value);
  };

  useEffect(() => {
    if (sortField && order) {
      createPost();
    }
  }, [sortField, order]);

  console.log("productData", productData);

  return (
    <div>
      <div className="header-dropdown">
        <label className="header-link-two">Sort By:</label>
        <select
          className="header-link-two"
          value={sortingOption}
          onChange={handleSortingChange}
        >
          <option value="ascending">Ascending</option>
          <option value="descending">Descending</option>
        </select>
        <select
          className="header-link-two"
          value={sortField}
          onChange={handleSortFieldChange}
        >
          <option value="price">Price</option>
          <option value="stock">Stock</option>
          <option value="title">Title</option>
        </select>
      </div>

      <div className="show-product-detail">
        {loading === true && <h4>Loading...</h4>}
        {/* <h1>ProductDetails</h1> */}
        {productData && Array.isArray(productData) && productData.length > 0 ? (
          <div className="product-grid-two">
            {productData.map((product) => (
              <div className="product-item" key={product._id}>
                {/* <img src={product.image[0]} style={{ width: "200px", height: "200px" }} /> */}
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

export default Sort;
