import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../utils/axiosInstance";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.css";
const useAddRateHook = (bookId) => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
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
      .post(`/addrate?bookId=${bookId}`, formData)
      .then((response) => response.data)
      .then((data) => {
        setLoading(false);
        console.log("Successfully added to cart:", data);
        localStorage.setItem("addratemsg", data.message);
        //   showErrorAlert(JSON.stringify(error));
        showSuccessAlert(JSON.stringify(data.message));
        // localStorage.setItem("addrateerrormsg",error.response.data.error)
        // return data;
      })
      .catch((error) => {
        setLoading(false);
        // localStorage.setItem("addrateerrormsg", error.response.data.error);
        // localStorage.setItem("addrateerrormsg", errorMessage);
        console.log("error adding cart:", error);
        const errorMessage = error.response?.data?.error || "An error occurred";
        showErrorAlert(JSON.stringify(error.response.data.error));
      });
    // .finally(() => {
    //   navigate("/addratemsg");
    // });
  };

  const updatePost = (formData) => {
    setLoading(true);
    axiosInstance
      // .get(`/getbook?bookId=${productId}`)
      .put(`/updaterate?bookId=${bookId}`, formData)
      .then((response) => response.data)
      .then((data) => {
        setLoading(false);
        console.log("Successfully added to cart:", data);
        showSuccessAlert(JSON.stringify(data.message));
        return data;
      })
      .catch((error) => {
        setLoading(false);
        showErrorAlert(JSON.stringify(error.message));
        // console.error("Error adding to cart:", error);
        throw error;
      });
  };
  const deletePost = (formData) => {
    setLoading(true);
    axiosInstance
      // .get(`/getbook?bookId=${productId}`)
      .delete(`/deleterate?bookId=${bookId}`, { data: formData })
      .then((response) => response.data)
      .then((data) => {
        setLoading(false);
        showSuccessAlert(JSON.stringify(data));
        console.log("Successfully added to cart:", data);
        return data;
      })
      .catch((error) => {
        setLoading(false);
        showErrorAlert(JSON.stringify(error.message));
        // console.error("Error adding to cart:", error);
        throw error;
      });
  };

  return { createPost, updatePost, deletePost, loading };
};

export default useAddRateHook;
