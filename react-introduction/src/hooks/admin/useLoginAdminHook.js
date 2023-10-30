import { useState, useEffect, useContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import axiosInstance from "../../utils/axiosInstance";
import { login } from "../../redux/slices/lognslice";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.css";
const useLoginAdminHook = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
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
  const createLogin = (formData) => {
    setLoading(true);
    console.log("formData", formData);
    axiosInstance
      .post("/login", formData)
      .then((response) => response.data)
      .then((data) => {
        setLoading(false);
        if (data.success) {
          const token = data.data.token;
          // setIsLoggedIn(true);
          showSuccessAlert(data.message);

          localStorage.setItem("logindata", data.data.role);
          localStorage.setItem("token", token);
          dispatch(login(data.data.role));
        }

        console.log("Successfully logged in:", data);
        localStorage.setItem("responseData", data.message);
        return data;
      })
      .catch((error) => {
        setLoading(false);
        showErrorAlert(error.response.data.message);
        console.error("Error adding user:", error);
        throw error;
      })
      .finally(() => {
        navigate("/userloggedin");
      });
  };

  return { createLogin, loading };
};

export default useLoginAdminHook;
