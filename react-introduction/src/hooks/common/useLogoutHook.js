import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const useLogoutHook = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    localStorage.removeItem("logindata");
    localStorage.removeItem("token");
    localStorage.removeItem("responseData");
    console.log("Hooks woking");

    setTimeout(() => {
      setLoading(false);
      navigate("/");
    }, 1000);
  }, [navigate]);

  return { loading };
};

export default useLogoutHook;
