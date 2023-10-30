import { useState, useEffect, useContext } from "react";
import axiosInstance from "../../utils/axiosInstance";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.css";
const useAddDiscountHook = (bookId) => {
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
      .post(`/adddiscount?bookId=${bookId}`, formData)
      .then((response) => response.data)
      .then((data) => {
        setLoading(false);
        console.log("Successfully added to discpunt to book:", data);
        showSuccessAlert(data.message);
        return data;
      })
      .catch((error) => {
        setLoading(false);
        console.log("Eror adding discount:", error);
        showErrorAlert(error.response.data.message);
        throw error;
      });
  };

  return { createPost, loading };
};

export default useAddDiscountHook;
