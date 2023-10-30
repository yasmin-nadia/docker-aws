import react, { useEffect, useState } from "react";
import userAddBalance from "../hooks/user/useAddBalanceHook";
import { useForm, Controller } from "react-hook-form";
const Addbalance = () => {
  const { createPost, loading } = userAddBalance();
  const [productTitle, setProductTitle] = useState("");

const balancedDatamsg=localStorage.getItem("balanceData")
console.log("balancedDatamsg",balancedDatamsg)
  
  const submitButtonStyles = {
    backgroundColor: "#734d26",
    color: "white",
    border: "none",
    borderRadius: "4px",
    padding: "10px 20px",
    fontSize: "16px",
    cursor: "pointer",
  };

  const {
    handleSubmit,
    control,
    formState: { errors },
    getValues,
  } = useForm();

  const formStyles = {
    maxWidth: "400px",
    margin: "0 auto",
  };

  const inputContainerStyles = {
    marginBottom: "15px",
  };

  const labelStyles = {
    display: "block",
    marginBottom: "5px",
    fontWeight: "bold",
  };
  const inputStyles = {
    width: "100%",
    padding: "10px",
    fontSize: "16px",
    border: "1px solid #ccc",
    borderRadius: "4px",
    boxSizing: "border-box",
    marginBottom: "5px",
  };
  
  const handlerOnSubmit = (data) => {
    console.log("Form is submitted ", data);
    createPost(data);
  };
  useEffect(() => {
    console.log("Errors: ", errors);
  }, [errors]);

  return (
    <div>
      <h1>Add balance</h1>
      
      {/* {balancedDatamsg && <h4>{balancedDatamsg}</h4>} */}

      {loading === true && <h4>Loading...</h4>}
      <form style={formStyles} onSubmit={handleSubmit(handlerOnSubmit)}>
        <div style={inputContainerStyles}>
          <label style={labelStyles}>Email:</label>
          <Controller
            name="balancedData"
            control={control}
            rules={{
                required: "balancedData is required",
                validate: {
                  greaterThan100: (value) =>
                    parseFloat(value) > 100 || "Value must be greater than 100",
                  lessThan25000: (value) =>
                    parseFloat(value) < 25000 || "Value must be less than 25000",
                },
              }}
            render={({ field }) => (
              <input
                placeholder="Enter balancedData"
                {...field}
                style={{ border: errors.balancedData ? "1px solid red" : "" }}
              />
            )}
          />
          {errors.balancedData && <h5>{errors.balancedData.message}</h5>}
        </div>

        <button type="submit" style={submitButtonStyles}>
          Add balance
        </button>
      </form>
    </div>
  );
};
export default Addbalance;
