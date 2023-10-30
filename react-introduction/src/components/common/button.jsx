import React from "react";

const Button = ({ onClick }) => {
  return (
    <button
      style={{
        backgroundColor: "#005580",
        color: "white",
        fontSize: "16px",
      }}
      onClick={onClick}
    >
      Logout
    </button>
  );
};

export default Button;
