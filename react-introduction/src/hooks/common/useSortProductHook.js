import { useState, useEffect } from "react";
import axiosInstance from "../../utils/axiosInstance";

const useSortProductHook = (order, sortField) => {
  const [productData, setProductData] = useState([]);
  const [loading, setLoading] = useState(false);
  const createPost = () => {
    setLoading(true);
    axiosInstance
      .get(`/getbook?order=${order}&sortField=${sortField}`)
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

export default useSortProductHook;
