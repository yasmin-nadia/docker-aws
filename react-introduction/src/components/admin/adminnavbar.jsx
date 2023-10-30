import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Button from "../common/button";
import "../../App.scss";
import {
  FaSearch,
  FaShoppingCart,
  FaUser,
  FaPlus,
  FaSort,
  FaList,
  FaSlidersH,
  FaMoneyBill,
  FaBriefcase,
  FaFilter,
} from "react-icons/fa";
const Adminnavbar = () => {
  const [showLoginOptions, setShowLoginOptions] = useState(false);
  const [activeLink, setActiveLink] = useState(""); // Track the active link
  const toggleLoginOptions = () => {
    setShowLoginOptions(!showLoginOptions);
  };
  return (
    <div className="header-container">
      <img
        className="header-logo"
        title="Design for you"
        alt="Designs"
        src="https://t3.ftcdn.net/jpg/00/59/63/30/240_F_59633034_GHlAAALTnXLdBeLPpEQWjzZhsad3QtNX.jpg"
      />
      <div>
        <Link to="/" className="header-link">
          HOME
        </Link>
      </div>
      <div className="header-dropdown">
        <div
          className={`header-link ${activeLink === "login" ? "active" : ""}`}
          onClick={toggleLoginOptions}
        >
          <FaUser /> &#9662;
        </div>
        {showLoginOptions && (
          <div className="dropdown-content">
            <Link to="/login/admin" className="header-link">
              Login as Admin
            </Link>
            <Link to="/login/user" className="header-link">
              Login as User
            </Link>
          </div>
        )}
      </div>
      <div>
        <Link to="/search" className="header-link">
          <FaSearch />
        </Link>
      </div>
      <div>
        <Link to="/createuser" className="header-link">
          Add User
        </Link>
      </div>
      <div>
        <Link to="/createbook" className="header-link">
          Add Product
        </Link>
      </div>
      <div>
        <Link to="/userlist" className="header-link">
          Show User
        </Link>
      </div>
      <div>
        <Link to="/sort" className="header-link">
          <FaSort /> Sort
        </Link>
      </div>
      <div>
        <Link to="/alltheusers" className="header-link">
          Show Users
        </Link>
      </div>
      <div>
        <Link to="/updatediscount" className="header-link">
          Update Discount
        </Link>
      </div>
      <div>
        <Link to="/filter" className="header-link">
          <FaFilter />
        </Link>
      </div>
      <div>
        <Link to="/showtransactionlist" className="header-link">
          <FaBriefcase />
        </Link>
      </div>
      <div>
        <Link to="/logout/admin" className="header-link">
          Logout
        </Link>
      </div>
    </div>
  );
};

export default Adminnavbar;
