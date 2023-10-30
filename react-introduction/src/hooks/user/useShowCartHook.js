import { useState ,useEffect} from "react"; 
import axiosInstance from "../../utils/axiosInstance";

const check = localStorage.getItem("token");


const useShowCartHook = () => {
  const [loading_one, setLoading] = useState(false);
  const [responseData, setResponseData] = useState("");

  const showCart = () => {
    

    axiosInstance
      .get("/showcart")
      .then((response) => {response.data
        console.log("response",response)
        localStorage.setItem("showcart",JSON.stringify(response.data))
    }
        )
      .then((data) => {
        setLoading(false);
        console.log("responseData from hook success", data);
        
      })
      .catch((error) => {
        setLoading(false);
        console.error("Error from hook", error);
    
      });
  };
  useEffect(() => {
    console.log("useeffect duibar kaj korlo")
    showCart();
  }, []);
  

  return {
    showCart,
    loading_one
  };
};


export default useShowCartHook;
