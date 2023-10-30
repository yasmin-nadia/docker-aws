import { useState, useEffect, useContext } from "react";
import axiosInstance from "../../utils/axiosInstance";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.css";
const useProductPostHook = () => {
  const [loading, setLoading] = useState(false);
  console.log("hook working");
  const showSuccessAlert = (message) => {
    Swal.fire({
      title: "Success",
      text: message,
      icon: "success",
    });
  };

  const showErrorAlert = (errorMessage) => {
    Swal.fire({
      title: "Error",
      html: errorMessage, // Use 'html' property to display HTML content
      icon: "error",
    });
  };
  const createPost = (formData) => {
    setLoading(true);
    axiosInstance
      .post("/addbook", formData)
      .then((response) => response.data)
      .then((data) => {
        setLoading(false);
        console.log("Successfully added book:", data);
        showSuccessAlert(JSON.stringify(data));
        return data;
      })
      .catch((error) => {
        setLoading(false);
        console.error("Error added book:", error);
        showErrorAlert(JSON.stringify(error.response.data));
        throw error;
      });
  };
  return { createPost, loading };
};

export default useProductPostHook;
