import react, { useEffect, useState } from "react";
import useUpdateHook from "../hooks/admin/useUpdateUserHook";
import { useForm, Controller } from "react-hook-form";
import jwtDecode from "jwt-decode";
const UpdatePost = () => {
  const { updatePost, loading } = useUpdateHook();
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
    updatePost(data);
  };
  useEffect(() => {
    console.log("Errors: ", errors);
  }, [errors]);

  return (
    <div>
      <h1>Update user</h1>
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

        <div style={inputContainerStyles}>
          <label style={labelStyles}>Name:</label>
          <Controller
            name="name"
            control={control}
            rules={{
              validate: (value) => {
                if (value) {
                  const names = value.split(" ");
                  const isValid = names.every((name) =>
                    /^[A-Z][a-z]*$/.test(name)
                  );
                  return isValid || "Invalid name format";
                }
                return true;
              },
            }}
            render={({ field }) => (
              <input
                placeholder="Enter name"
                {...field}
                style={{ border: errors.name ? "1px solid red" : "" }}
              />
            )}
          />
          {errors.name && <h5>{errors.name.message}</h5>}
        </div>

        <div style={inputContainerStyles}>
          <label style={labelStyles}>Area:</label>
          <Controller
            name="area"
            control={control}
            rules={{
              validate: (value) => {
                if (value) {
                  return (
                    value >= 20 || "Area must be greater than or equal to 20"
                  );
                }
                return true; 
              },
            }}
            render={({ field }) => (
              <input
                placeholder="Enter area"
                {...field}
                style={{ border: errors.area ? "1px solid red" : "" }}
              />
            )}
          />
          {errors.area && <h5>{errors.area.message}</h5>}
        </div>

        <div style={inputContainerStyles}>
          <label style={labelStyles}>Street Address:</label>
          <Controller
            name="streetAddress"
            control={control}
            rules={{
              validate: (value) => {
                if (value) {
                  return (
                    (value.length >= 5 && value.length <= 20) ||
                    "Street address must be between 5 and 20 characters"
                  );
                }
                return true; 
              },
            }}
            render={({ field }) => (
              <input
                placeholder="Enter streetAddress"
                {...field}
                style={{ border: errors.streetAddress ? "1px solid red" : "" }}
              />
            )}
          />
          {errors.streetAddress && <h5>{errors.streetAddress.message}</h5>}
        </div>
        <div style={inputContainerStyles}>
          <label style={labelStyles}>Phone:</label>
          <Controller
            name="phone"
            control={control}
            rules={{
              validate: (value) => {
                if (value) {
                  const validPrefixes = [
                    "013",
                    "014",
                    "015",
                    "016",
                    "017",
                    "018",
                    "019",
                  ];
                  const isValid =
                    value.length === 11 &&
                    validPrefixes.includes(value.substr(0, 3));
                  return isValid || "Invalid phone number format";
                }
                return true;
              },
            }}
            render={({ field }) => (
              <input
                placeholder="Enter phone"
                {...field}
                style={{ border: errors.phone ? "1px solid red" : "" }}
              />
            )}
          />
          {errors.phone && <h5>{errors.phone.message}</h5>}
        </div>
        <div style={inputContainerStyles}>
          <label style={labelStyles}>Role:</label>
          <Controller
            name="role"
            control={control}
            rules={{
              validate: (value) => {
                if (value) {
                  return (
                    ["user", "admin"].includes(value.toLowerCase()) ||
                    "Invalid role"
                  );
                }
                return true; // Optional field, no validation if empty
              },
            }}
            render={({ field }) => (
              <input
                placeholder="Enter role"
                {...field}
                style={{ border: errors.role ? "1px solid red" : "" }}
              />
            )}
          />
          {errors.role && <h5>{errors.role.message}</h5>}
        </div>

        <button type="submit" style={submitButtonStyles}>
          Update Book
        </button>
      </form>
    </div>
  );
};
export default UpdatePost;
