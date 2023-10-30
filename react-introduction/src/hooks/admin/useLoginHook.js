import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../pages/AuthContext";
import axiosInstance from "../../utils/axiosInstance";
import { login } from "../../redux/slices/lognslice";
import { useSelector, useDispatch } from "react-redux";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.css";
const useLoginHook = (token, userId, newPassword, oldPassword) => {
  const [loading, setLoading] = useState(false);
  const [responseData, setResponseData] = useState();
  // const [logindata, setIsLoggedIn] = useState();
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
      html: errorMessage,
      icon: "error",
    });
  };
  const navigate = useNavigate();
  const dispatch = useDispatch();
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
          showSuccessAlert(data.message);
          localStorage.setItem("logindata", data.data.role);
          localStorage.setItem("token", token);
          dispatch(login(data.data.role));
        }
        console.log("Successfully logged in:", data);
        localStorage.setItem("responseData", data.message);
      })
      .catch((error) => {
        setLoading(false);
        showErrorAlert(error.response.data.message);
        console.error("Error adding user:", error);
      });
  };
  const forgetPassword = (formData) => {
    setLoading(true);
    console.log("formData", formData);
    axiosInstance
      .post("/forgetpassword", formData)
      .then((response) => response.data)
      .then((data) => {
        setLoading(false);
        if (data.success) {
          const token = data.data.token;
          showSuccessAlert(data);
        }
        console.log("Successfully clicked forget password", data);
      })
      .catch((error) => {
        // showErrorAlert(JSON.stringify(error.response.data.message));
        console.error("Error forgetting password:", error);
      });
  };
  const onResetPassword = () => {
    setLoading(true);
    console.log("On eset submit working");
    //.put(`/updatebook?title=${title}`, formData)
    console.log("newPassword, oldPassword", newPassword, oldPassword);
    axiosInstance
      .post(
        `/resetpassword?token=${token}&userId=${userId}&newPassword=${newPassword}&oldPassword=${oldPassword}`
      )
      .then((response) => response.data)
      .then((data) => {
        setLoading(false);
        console.log("newPassword, oldPassword", newPassword, oldPassword);
        if (data.success) {
          const token = data.data.token;
        }
        showSuccessAlert(JSON.stringify(data.message));
        console.log("Successfully changed the password", data);
      })
      .catch((error) => {
        showErrorAlert(JSON.stringify(error.response.data.message));
        console.error("Error changing the password:", error);
      });
  };

  return { createLogin, loading, forgetPassword, onResetPassword };
};

export default useLoginHook;
