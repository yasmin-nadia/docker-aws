import { useSelector } from "react-redux";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../App.scss";

const UserList = () => {
  const users = useSelector((state) => state.user.users);
  console.log("User", users);

  const navigate = useNavigate(); 

  if (users.length < 1) {
    return (
      <div className="fetch-demo-container">
        <h1>No users available</h1>
      </div>
    );
  }

  return (
    <div className="fetch-demo-container">
      <h1>All Users</h1>
      <div className="product-grid">
        {users.map((task) => (
          <div className="product-item" key={task.id}>
            <h5>{task.text.name}</h5>
            <p>Email: {task.text.email}</p>
            <button
              className="add-to-cart-button"
              onClick={() =>
                navigate(`/userdetails`, {
                  replace: true,
                  state: {
                    id: task.id,
                  },
                })
              }
            >
              Show Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserList;
