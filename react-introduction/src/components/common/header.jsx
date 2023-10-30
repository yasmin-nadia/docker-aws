import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Button from "./button";
import "../../App.scss";
import { FaSearch, FaShoppingCart, FaUser } from "react-icons/fa";
const Header = () => {
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
          Search
        </Link>
      </div>
      <div>
        <Link to="/sort" className="header-link">
          Sort
        </Link>
      </div>
      {/* <div>
        <Link to="/createuser" className="header-link">
          Create new user
        </Link>
      </div>
      <div>
        <Link to="/createbook" className="header-link">
          Add product
        </Link>
      </div>
      <div>
        <Link to="/updatebook" className="header-link">
          Update product
        </Link>
      </div>
      <div>
        <Link to="/deletebook" className="header-link">
          Delete product
        </Link>
      </div> */}
      {/* <div>
        <Link to="/userlist" className="header-link">
          Show user
        </Link>
      </div>
      <div>
        <Link to="/showtransaction" className="header-link">
          Show transaction
        </Link>
      </div> */}

      {/* <Button /> */}
      <div>
        <Link to="/filter" className="header-link">
          Filter
        </Link>
      </div>
      <div>
        <Link to="/fileupload" className="header-link">
          Fileupload
        </Link>
      </div>
      <div>
        <Link to="/createbook" className="header-link">
          Add Product
        </Link>
      </div>
    </div>
  );
};

export default Header;
