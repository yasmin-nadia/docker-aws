import { useState, useEffect, useContext } from "react";
import axiosInstance from "../../utils/axiosInstance";

const useCheckoutHook = () => {
  const [loading_one, setLoading] = useState(false);
  const [responseData, setResponseData] = useState("");
  const check = localStorage.getItem("token");

  const createCheckout = () => {
    console.log("Hook token");

    setLoading(true);
    fetch(`13.38.117.51:8000/mybooks/checkout`, {
      method: "POST",
      body: JSON.stringify({}),
      headers: {
        Authorization: `Bearer ${check}`,
      },
    })
      .then((res) => res.json())
      .then((json) => {
        console.log(json.message);
        setResponseData(json.message);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    createCheckout();
  }, []);

  return {
    createCheckout,
    loading_one,
    responseData,
  };
};

export default useCheckoutHook;

// import { useState, useEffect, useContext } from "react";
// import axiosInstance from "../../utils/axiosInstance";

// const useCheckoutHook = () => {
//   const [loading_one, setLoading] = useState(false);
//   const [responseData, setResponseData] = useState("");
//   const check = localStorage.getItem("token");
//   // let data_r;
//   // console.log(responseData);
//   useEffect(() => {
//     //   console.log("responseData from hook:", responseData);
//     // }, [responseData]);
//     console.log(responseData);
//     const createCheckout = () => {
//       console.log("Hook token");

//       setLoading(true);
//       fetch(`http://127.0.0.1:8001/mybooks/checkout`, {
//         method: "POST",
//         body: JSON.stringify({}),
//         headers: {
//           Authorization: `Bearer ${check}`,
//         },
//       })
//         .then((res) => res.json())
//         .then((json) => {
//           console.log(json.message);
//           setResponseData(json.message);
//         })
//         .catch((err) => console.log(err));
//     };
//     // axiosInstance
//     //   .post(
//     //     "/checkout",
//     //     {},
//     //     {
//     //       headers: {
//     //         authorization: `Bearer ${check}`,
//     //       },
//     //     }
//     //   )
//     //   .then((response) => response.data)
//     //   .then((data) => {
//     //     setLoading(false);
//     //     setResponseData(data.response.data.message);
//     //     console.log("responseData from hook success", responseData);
//     //     console.log("Successfully checked out:", data.response.data.message);
//     //     // data_r = data.response.data.message;
//     //     // return data;
//     //   })
//     //   .catch((error) => {
//     //     setLoading(false);
//     //     setResponseData(error.response.data.message);
//     //     console.log(
//     //       "responseData from hook error",
//     //       error.response.data.message
//     //     );
//     //     // console.error(
//     //     //   "Checking out failed:",
//     //     //   error.response.data.message,
//     //     //   "data_r",
//     //     //   data_r
//     //     // );
//     //     // data_r = error.response.data.message;
//     //     // throw error;
//     //   });
//   }, []);

//   return {
//     createCheckout,
//     loading_one,
//     // data_r,
//     responseData,
//   };
// };

// export default useCheckoutHook;
