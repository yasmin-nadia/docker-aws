import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaSearch, FaShoppingCart, FaUser } from "react-icons/fa";
import useSortProductHook from "../../hooks/common/useSortProductHook";
import "../../App.scss";

const Usernavbar = () => {
  const [showLoginOptions, setShowLoginOptions] = useState(false);
  const [activeLink, setActiveLink] = useState(""); // Track the active link

  const navigate = useNavigate();

  const toggleLoginOptions = () => {
    setShowLoginOptions(!showLoginOptions);
  };

  // Function to set the active link
  const handleLinkClick = (link) => {
    setActiveLink(link);
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
        <Link
          to="/"
          className={`header-link ${activeLink === "home" ? "active" : ""}`}
          onClick={() => handleLinkClick("home")}
        >
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
        <Link
          to="/sort"
          className={`header-link ${activeLink === "sort" ? "active" : ""}`}
          onClick={() => handleLinkClick("sort")}
        >
          Sort
        </Link>
      </div>
      <div>
        <Link
          to="/showselfinfo"
          className={`header-link ${activeLink === "account" ? "active" : ""}`}
          onClick={() => handleLinkClick("account")}
        >
          Account Info
        </Link>
      </div>
      <div>
        <Link
          to="/filter"
          className={`header-link ${activeLink === "filter" ? "active" : ""}`}
          onClick={() => handleLinkClick("filter")}
        ></Link>
      </div>
      <div>
        <Link
          to="/cart"
          className={`header-link ${activeLink === "cart" ? "active" : ""}`}
          onClick={() => handleLinkClick("cart")}
        >
          <FaShoppingCart /> Cart
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

export default Usernavbar;
