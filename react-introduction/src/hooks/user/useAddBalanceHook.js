import { useState, useEffect, useContext } from "react";
import axiosInstance from "../../utils/axiosInstance";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.css";
const userAddBalance = () => {
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

  const navigate = useNavigate();
  const createPost = (formData) => {
    formData.balancedData = parseFloat(formData.balancedData);
    setLoading(true);
    axiosInstance
      .put("/addbalance", formData)
      .then((response) => {
        response.data;
        console.log("response", response);
        showSuccessAlert(response.data.message);
        localStorage.setItem("balanceData", response.data.message);
      })
      .then((data) => {
        setLoading(false);

        console.log("Successfully added to balance:", data);
        return data;
      })
      .catch((error) => {
        setLoading(false);
        console.error("Error adding to balance:", error);
        // const errorMessage = error.response?.data?.error || "An error occurred";
        showErrorAlert(error);
        throw error;
      });
    // .finally(() => {
    //   navigate("/addbalancemsg");
    //   // }
    // });
  };
  return { createPost, loading };
};

export default userAddBalance;
