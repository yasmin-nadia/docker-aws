import { useSelector } from "react-redux";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "../App.scss";

const CartList = () => {
  const carts = useSelector((state) => state.cart.cart_items);
  console.log("Cart", carts);

  const navigate = useNavigate(); // Get the navigate function

  if (carts.length < 1) {
    return (
      <div className="fetch-demo-container">
        <h1>No carts available</h1>
      </div>
    );
  }

  return (
    <div className="fetch-demo-container">
      <h1>Your cart</h1>
      <div className="product-grid">
        {carts.map((task) => (
          <div className="product-item" key={task.id}>
            <h5>{task.text.BookId.id}</h5>
            <p>Quantity: {task.text.BookId.quantity}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CartList;
