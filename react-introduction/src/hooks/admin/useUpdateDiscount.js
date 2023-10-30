import { useState, useEffect, useContext } from "react";
import axiosInstance from "../../utils/axiosInstance";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.css";
const useUpdateDiscountHook = () => {
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
  const createPost = (formData) => {
    setLoading(true);
    axiosInstance
      // .get(`/getbook?bookId=${productId}`)
      .put(`/updatediscount`, formData)
      .then((response) => response.data)
      .then((data) => {
        setLoading(false);
        console.log("Successfully added to discount to book:", data);
        showSuccessAlert(JSON.stringify(data.message));
        return data;
      })
      .catch((error) => {
        console.log("Error adding discount:", error);
        showErrorAlert(JSON.stringify(error.response.data.message));
        setLoading(false);

        throw error;
      });
  };

  return { createPost, loading };
};

export default useUpdateDiscountHook;
