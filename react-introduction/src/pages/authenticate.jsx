import { Navigate, Outlet, useLocation } from "react-router-dom";
import jwtDecode from "jwt-decode";

const Authenticate = () => {
  const location = useLocation();
  const check = localStorage.getItem("token");
  
  const decodedToken = jwtDecode(check);
  console.log("decodedToken", decodedToken);
  console.log("token", check, "location", location);

  if (check && decodedToken && decodedToken.role === "user") {
    return <Outlet />;
  } else {
    return <Navigate to="/login/user" />;
  }
};

export default Authenticate;
