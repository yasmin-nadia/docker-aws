import { useState, useEffect, useContext } from "react";

import axiosInstance from "../../utils/axiosInstance";

const useUpdateHook = () => {
  const [loading, setLoading] = useState(false);
  const token = localStorage.getItem("token");
  const axiosConfig = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const updatePost = (formData) => {
    if (formData.area && formData.streetAddress) {
      formData = {
        ...formData,
        address: {
          area: formData.area,
          streetAddress: formData.streetAddress,
        },
      };
    }
    setLoading(true);
    axiosInstance
      .put("/updateuser", formData, axiosConfig)
      .then((response) => response.data)
      .then((data) => {
        setLoading(false);
        console.log("Successfully updated user:", data);
        return data;
      })
      .catch((error) => {
        setLoading(false);
        console.error("Error updating user:", error);
        throw error;
      });
  };

  return { updatePost, loading };
};

export default useUpdateHook;
