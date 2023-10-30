import axios from "axios";
const token = localStorage.getItem("token");
console.log("UseDeleteHook token", token);
const axiosInstance = axios.create({
  baseURL: "http://13.38.117.51:8000/mybooks",
  headers: {
    "Content-Type": "application/json",

    Authorization: `Bearer ${token}`,
  },
  timeout: 5000,
});

export default axiosInstance;
