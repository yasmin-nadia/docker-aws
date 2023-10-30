import { useState, useEffect, useContext } from "react";

import axiosInstance from "../../utils/axiosInstance";

const useDeleteHook = () => {
  const [loading, setLoading] = useState(false);
  const token = localStorage.getItem("token");
  console.log("UseDeleteHook token", token);
  const axiosConfig = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };

  const deletePost = (formData) => {
    setLoading(true);
    axiosInstance
      .delete("/deleteuser", { data: formData })
      .then((response) => response.data)
      .then((data) => {
        setLoading(false);
        console.log("Successfully deleted user:", data);
        return data;
      })
      .catch((error) => {
        setLoading(false);
        console.error("Error deleted user:", error);
        throw error;
      });
  };

  return { deletePost, loading };
};

export default useDeleteHook;
