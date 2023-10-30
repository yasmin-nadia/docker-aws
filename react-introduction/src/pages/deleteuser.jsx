import react, { useEffect, useState } from "react";
import useDeleteHook from "../hooks/admin/useDeleteUserHook";
import { useForm, Controller } from "react-hook-form";
import jwtDecode from "jwt-decode";
const DeletePost = () => {
  const { deletePost, loading } = useDeleteHook();
  const check = localStorage.getItem("token");

  const decodedToken = jwtDecode(check);
  console.log("decodedToken from add book", decodedToken);
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
  const submitButtonStyles = {
    backgroundColor: "#734d26",
    color: "white",
    border: "none",
    borderRadius: "4px",
    padding: "10px 20px",
    fontSize: "16px",
    cursor: "pointer",
  };

  const handlerOnSubmit = (data) => {
    console.log("Form is submitted ", data);
    deletePost(data);
  };
  useEffect(() => {
    console.log("Errors: ", errors);
  }, [errors]);

  return (
    <div>
      <h1>Delete user</h1>
      {loading === true && <h4>Loading...</h4>}
      <form style={formStyles} onSubmit={handleSubmit(handlerOnSubmit)}>
        <div style={inputContainerStyles}>
          <label style={labelStyles}>Email:</label>
          <Controller
            name="email"
            control={control}
            rules={{
              required: "email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                message: "Invalid email address",
              },
            }}
            render={({ field }) => (
              <input
                placeholder="Enter email"
                {...field}
                style={{ border: errors.email ? "1px solid red" : "" }}
              />
            )}
          />
          {errors.email && <h5>{errors.email.message}</h5>}
        </div>

        <button type="submit" style={submitButtonStyles}>
          Delete Book
        </button>
      </form>
    </div>
  );
};
export default DeletePost;
