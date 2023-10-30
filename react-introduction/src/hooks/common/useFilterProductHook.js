import { useState, useEffect } from "react";
import axiosInstance from "../../utils/axiosInstance";

const useFilterProductHook = () => {
  const [productData, setProductData] = useState([]);
  const [loading, setLoading] = useState(false);
  const createPost = (discountData) => {
    setLoading(true);
    console.log("discountData",discountData.discountData)
    axiosInstance
      .get("/getbook", {
        params: discountData.discountData, 
      })
      .then((resp) => resp.data)
      .then((data) => {
        setProductData(data.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
        setLoading(false);
      });
  }

  return { productData, loading ,createPost};
};

export default useFilterProductHook;
