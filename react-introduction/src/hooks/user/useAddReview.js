import { useState, useEffect, useContext } from "react";
import axiosInstance from "../../utils/axiosInstance";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.css";
const useAddReviewHook = (bookId) => {
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
      text: errorMessage,
      icon: "error",
    });
  };
  const createPost = (formData) => {
    setLoading(true);
    axiosInstance
      // .get(`/getbook?bookId=${productId}`)
      .post(`/addreview?bookId=${bookId}`, formData)
      .then((response) => response.data)
      .then((data) => {
        setLoading(false);
        console.log("Successfully added to cart:", data);
        // showSuccessAlert(data);
        showSuccessAlert(JSON.stringify(data.message));
        return data;
      })
      .catch((error) => {
        setLoading(false);
        showErrorAlert(JSON.stringify(error.response.data.message));
        console.error("Error adding to cart:", error);
        throw error;
      });
  };

  const updatePost = (formData) => {
    setLoading(true);
    axiosInstance
      // .get(`/getbook?bookId=${productId}`)
      .put(`/updatereview?bookId=${bookId}`, formData)
      .then((response) => response.data)
      .then((data) => {
        setLoading(false);
        console.log("Successfully added to cart:", data);
        showSuccessAlert(JSON.stringify(data.message));
        return data;
      })
      .catch((error) => {
        setLoading(false);
        showErrorAlert(JSON.stringify(error.response.data.message));
        // console.error("Error adding to cart:", error);
        throw error;
      });
  };
  const deletePost = (formData) => {
    setLoading(true);
    axiosInstance
      // .get(`/getbook?bookId=${productId}`)
      .delete(`/deletereview?bookId=${bookId}`, { data: formData })
      .then((response) => response.data)
      .then((data) => {
        setLoading(false);
        console.log("Successfully added to cart:", data);
        showSuccessAlert(JSON.stringify(data.message));
        return data;
      })
      .catch((error) => {
        setLoading(false);
        showErrorAlert(JSON.stringify(error));
        console.error("Error adding to cart:", error);
        throw error;
      });
  };

  return { createPost, updatePost, deletePost, loading };
};

export default useAddReviewHook;
