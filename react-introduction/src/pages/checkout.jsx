import { useLocation } from "react-router-dom";
import useCheckoutHook from "../hooks/user/useCheckoutHook";
import { useEffect } from "react";
import "../App.scss";

function ShowCheckout() {
  const { responseData } = useCheckoutHook();

  useEffect(() => {
    console.log(responseData);
  }, [responseData]);

  return (
    <div className="checkout-container">
      <h1 className="checkout-title">Checkout Status</h1>
      {responseData && <p className="checkout-message">{responseData}</p>}
    </div>
  );
}

export default ShowCheckout;
