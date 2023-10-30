import { useState, useEffect } from "react";
import axiosInstance from "../../utils/axiosInstance";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.css";
const useProductDeleteHook = (title) => {
  const [loading, setLoading] = useState(false);
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
  const createDelete = (formData) => {
    setLoading(true);
    axiosInstance
      .delete(`/deletebook?title=${title}`, { data: formData })
      .then((response) => response.data)
      .then((data) => {
        setLoading(false);
        console.log("Successfully deleted book:", data);
        showSuccessAlert(JSON.stringify(data.message));
        return data;
      })
      .catch((error) => {
        setLoading(false);
        console.error("Error deleted book:", error);
        showErrorAlert(JSON.stringify(error.response.data));
        throw error;
      });
  };
  return { createDelete, loading };
};

export default useProductDeleteHook;
