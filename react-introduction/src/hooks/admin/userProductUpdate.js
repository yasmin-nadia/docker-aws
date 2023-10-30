import { useState, useEffect, useContext } from "react";
import axiosInstance from "../../utils/axiosInstance";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.css";
const useProductUpdateHook = (title) => {
  const [loading, setLoading] = useState(false);
  // .post(`/addrate?bookId=${bookId}`, formData)
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
  const createUpdate = (formData) => {
    setLoading(true);
    axiosInstance
      .put(`/updatebook?title=${title}`, formData)
      .then((response) => response.data)
      .then((data) => {
        setLoading(false);
        showSuccessAlert(JSON.stringify(data.message));
        console.log("Successfully Updated book:", data.message);
        return data;
      })
      .catch((error) => {
        setLoading(false);
        console.error("Error updating book:", error);
        showErrorAlert(JSON.stringify(error.response.data));
        throw error;
      });
  };
  return { createUpdate, loading };
};

export default useProductUpdateHook;
