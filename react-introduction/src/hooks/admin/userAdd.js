import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../utils/axiosInstance";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.css";
const useAddHook = () => {
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
      html: errorMessage, // Use 'html' property to display HTML content
      icon: "error",
    });
  };
  const createPost = (formData) => {
    setLoading(true);
    const {
      confirmPassword,
      area,
      streetAddress,
      ...formDataWithoutConfirmPassword
    } = formData;
    const updatedFormData = {
      ...formDataWithoutConfirmPassword,
      address: {
        area,
        streetAddress,
      },
    };
    console.log("updatedFormData", updatedFormData);
    axiosInstance
      .post("/createuser", updatedFormData)
      .then((response) => response.data)
      .then((data) => {
        setLoading(false);
        console.log("Successfully added user:", data);
        showSuccessAlert(JSON.stringify(data.message));
        localStorage.setItem("addusermsg", data);
        return data;
      })
      .catch((error) => {
        setLoading(false);
        console.error("Error adding user:", error);
        console.error("Error updating book:", error);
        showErrorAlert(JSON.stringify(error.response.data));
        throw error;
      });
    // .finally(() => {
    //   navigate("/useraddmsg");
    // });
  };

  return { createPost, loading };
};

export default useAddHook;
