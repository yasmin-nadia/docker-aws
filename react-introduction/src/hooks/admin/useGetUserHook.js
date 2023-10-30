import { useState, useEffect } from "react";
import axiosInstance from "../../utils/axiosInstance";

const useUserHook = () => {
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const token = localStorage.getItem("token");
    const axiosConfig = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    axiosInstance
      .get("/getuser", axiosConfig)
      .then((resp) => {
        console.log("API response:", resp.data);
        localStorage.setItem(
          "userdata",
          JSON.stringify(resp.data.message.users)
        );
        setUserData(resp.data.message.users);
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []); // The empty dependency array makes this effect run only once when the component mounts.

  return { userData, loading };
};

export default useUserHook;
