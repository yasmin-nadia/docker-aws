import react, { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import useLoginHook from "../hooks/admin/useLoginHook";
import { useParams, useNavigate } from "react-router-dom";

const PasswordReset = () => {
  const { token, userId } = useParams();
  const {
    handleSubmit,
    control,
    formState: { errors },
    getValues,
    watch,
  } = useForm();
  const [newPassword, setNewPassword] = useState();
  const [oldPassword, setOldPassword] = useState();
  const { onResetPassword } = useLoginHook(
    token,
    userId,
    newPassword,
    oldPassword
  );

  const onSubmit_one = (data) => {
    console.log("pass data", data);
    const { password, confirmPassword } = data;
    setNewPassword(password);
    setOldPassword(confirmPassword);
    onResetPassword();
  };
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

  const submitButtonStyles = {
    backgroundColor: "#734d26",
    color: "white",
    border: "none",
    borderRadius: "4px",
    padding: "10px 20px",
    fontSize: "16px",
    cursor: "pointer",
  };

  return (
    <div>
      <h1>Reset Password</h1>
      <form style={formStyles} onSubmit={handleSubmit(onSubmit_one)}>
        <div style={inputContainerStyles}>
          <label style={labelStyles}>New Password:</label>
          <Controller
            name="password"
            control={control}
            rules={{
              required: "password is required",
              validate: (value) => {
                const uppercaseRegex = /[A-Z]/;
                const lowercaseRegex = /[a-z]/;
                const specialCharRegex =
                  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

                const digitRegex = /\d/;

                if (
                  uppercaseRegex.test(value) &&
                  lowercaseRegex.test(value) &&
                  specialCharRegex.test(value) &&
                  digitRegex.test(value) &&
                  value.length >= 8
                ) {
                  return true; // Password meets the criteria
                } else {
                  return "Password must meet the criteria"; // Validation error message
                }
              },
            }}
            render={({ field }) => (
              <input
                placeholder="Enter password"
                type="password"
                {...field}
                style={{ border: errors.password ? "1px solid red" : "" }}
              />
            )}
          />
          {errors.password && <h5>{errors.password.message}</h5>}
        </div>
        <div style={inputContainerStyles}>
          <label style={labelStyles}>Confirm password:</label>
          <Controller
            name="confirmPassword"
            control={control}
            rules={{
              required: "Confirm password is required",
              validate: (value) =>
                value == watch("password") || "Both passwords doesn't match",
            }}
            render={({ field }) => (
              <input
                placeholder="Confirm your password"
                type="password"
                {...field}
                style={{
                  border: errors.confirmPassword ? "1px solid red" : "",
                }}
              />
            )}
          />
          {errors.confirmPassword && <h5>{errors.confirmPassword.message}</h5>}
        </div>

        <button type="submit" style={submitButtonStyles}>
          Reset Password
        </button>
      </form>
    </div>
  );
};

export default PasswordReset;
