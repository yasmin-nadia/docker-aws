// import React from "react";
// import useLogoutHook from "../hooks/common/useLogoutHook";

// const Logout = () => {
//   const { loading } = useLogoutHook();

//   return (
//     <div>
//       Logging out...
//       {loading && <p>Loading...</p>}
//     </div>
//   );
// };

// export default Logout;
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../redux/slices/lognslice";
const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.removeItem("logindata");
    localStorage.removeItem("token");
    localStorage.removeItem("responseData");

    navigate("/");
  }, []);

  return <div>Logging out...</div>;
};

export default Logout;
