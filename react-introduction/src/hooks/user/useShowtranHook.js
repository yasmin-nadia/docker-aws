import { useState, useEffect } from "react";
import axiosInstance from "../../utils/axiosInstance";
const check = localStorage.getItem("token");

const useShowtranHook = () => {
  const [loading_one, setLoading] = useState(false);
  const [responseData, setResponseData] = useState("");
  const check = localStorage.getItem("token");

  const createTransaction = () => {
    if (!check) {
      console.log("Token not found in localStorage");
      return;
    }
    console.log("useeffect ekbar kaj korlo");
    fetch(`13.38.117.51:8000/mybooks//showtransaction`, {
      method: "GET",

      headers: {
        Authorization: `Bearer ${check}`,
      },
    })
      .then((res) => res.json())
      .then((json) => {
        console.log(json.data.Transaction);
        setResponseData(json.data.Transaction);
      })
      .catch((err) => console.log(err));

    // axiosInstance
    //   .get(
    //     "/showtransaction",
    //     {
    //       headers: {
    //         Authorization: `Bearer ${check}`,
    //       },
    //     }
    //   )
    //   .then((response) => {
    //     if (response.status === 200) {
    //       return response.data;
    //     } else {
    //       throw new Error("Unauthorized access");
    //     }
    //   })
    //   .then((data) => {
    //     setLoading(false);
    //     console.log("responseData from hook success", data);
    //     setResponseData(data.data.transaction);
    //   })
    //   .catch((error) => {
    //     setLoading(false);
    //     console.error("Error from hook", error);

    //   });
  };
  useEffect(() => {
    console.log("useeffect duibar kaj korlo");
    createTransaction();
  }, []);

  return {
    createTransaction,
    loading_one,
    responseData,
  };
};

export default useShowtranHook;
