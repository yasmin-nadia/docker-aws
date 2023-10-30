import React, { useEffect } from "react";
import useUserHook from "../hooks/admin/useGetUserHook";
import useUpdateHook from "../hooks/admin/useUpdateUserHook";
import { useNavigate } from "react-router-dom";
import "../App.scss";

const FetchUsers = () => {
  const { userData, loading } = useUserHook();
  const navigate = useNavigate();

  useEffect(() => {
    console.log("User data from useUserHook:", userData);
  }, [userData]);
  const check = localStorage.getItem("userdata");
  const userDataTwo = check === "undefined" ? null : JSON.parse(check);
  console.log("userDataTwo", userDataTwo);
  useEffect(() => {
    console.log("Loading:", loading);
  }, [loading]);

  console.log("userData", userData);
  const handleUpdateUser = () => {
    navigate("/updateuser");
  };
  const handleDeleteUser = () => {
    navigate("/deleteuser");
  };

  return (
    <div className="fetch-demo-container">
      {/* Map and render userDataTwo elements */}
      {userDataTwo ? (
        <div className="product-grid">
          {userDataTwo.map((user, index) => (
            <div className="product-item" key={index}>
              <p>Name: {user.name}</p>
              <p>Email: {user.email}</p>
              <p>Area: {user.address.area}</p>
              <p>Street Address: {user.address.streetAddress}</p>
              <p>Phone: {user.phone}</p>
              <p>Balanced Data: {user.balancedData}</p>
              <p>User Blocked: {user.userblocked}</p>
              <div className="cart-button-element">
                <button
                  className="add-to-cart-button"
                  onClick={handleUpdateUser}
                >
                  update
                </button>
                <button
                  className="add-to-cart-button"
                  onClick={handleDeleteUser}
                >
                  delete
                </button>
                
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>Data not found</p>
      )}
    </div>
  );
};

export default FetchUsers;
