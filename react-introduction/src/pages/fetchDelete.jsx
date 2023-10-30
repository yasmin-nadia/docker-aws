import react, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useProductDeleteHook from "../hooks/admin/userProductDelete";
const FetchDelete = () => {
  const { title } = useParams();
  const { createDelete, loading } = useProductDeleteHook(title);
  const [productTitle, setProductTitle] = useState("");

  const formStyles = {
    maxWidth: "400px",
    margin: "0 auto",
  };

  const inputContainerStyles = {
    marginBottom: "15px",
  };

  const labelStyles = {
    display: "block",
    marginBottom: "5px",
    fontWeight: "bold",
  };
  const inputStyles = {
    width: "100%",
    padding: "10px",
    fontSize: "16px",
    border: "1px solid #ccc",
    borderRadius: "4px",
    boxSizing: "border-box",
    marginBottom: "5px",
  };
  const submitButtonStyles = {
    backgroundColor: "#734d26",
    color: "white",
    border: "none",
    borderRadius: "4px",
    padding: "10px 20px",
    fontSize: "16px",
    cursor: "pointer",
  };

  const handleDeleteSubmit = (e) => {
    e.preventDefault();
    alert("Updating");
    const data = {
      title: productTitle,
    };
    createDelete(data);
  };

  return (
    <div>
      <h1>Delete product</h1>
      {loading === true && <h4>Loading...</h4>}

      
    </div>
  );
};
export default FetchDelete;
