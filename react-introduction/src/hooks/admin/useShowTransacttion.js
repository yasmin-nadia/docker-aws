import { useState, useEffect, useContext } from "react";

import axiosInstance from "../../utils/axiosInstance";
const useShowTransaction = () => {
  const [productData, setProductData] = useState([]);
  const [loading, setLoading] = useState(false);

  console.log("userproducthook is working");

  useEffect(() => {
    setLoading(true);
    axiosInstance
      .get("/showalltransaction")
      .then((resp) => resp.data)
      .then((data) => {
        console.log("Fetched Data ", data);
        setProductData(data.data);
        localStorage.setItem(
            "transactionData",
            JSON.stringify(data.data)
          );
        setLoading(false);
        console.log("axiosInstance is working");
        return data;
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
      })
      .finally(() => {
       
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    console.log("From product hook ", productData);
  }, [productData]);

  return { productData, loading };
};

export default useShowTransaction;
