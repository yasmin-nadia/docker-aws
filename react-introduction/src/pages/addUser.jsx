import react, { useEffect, useState } from "react";
import useAddHook from "../hooks/admin/userAdd";
import { useForm, Controller } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import { addUser } from "../redux/slices/userslice";
const FetchUserPost = () => {
  const { createPost, loading } = useAddHook();
  const dispatch = useDispatch();
  const users = useSelector((state) => state.user.users);
  console.log("Users", users);
  const {
    handleSubmit,
    control,
    formState: { errors },
    getValues,
    watch,
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
    createPost(data);
    dispatch(addUser(data));
  };
  useEffect(() => {
    console.log("Errors: ", errors);
  }, [errors]);
  const handleImageInputChange = (e) => {
    const file = e.target.files[0]; // Get the selected file
    setSelectedImage(file); // Update the state with the selected file
  };
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div>
      <h1>Add User</h1>
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
              required: "name is required",
              validate: (value) => {
                const names = value.split(" ");
                const isValid = names.every((name) =>
                  /^[A-Z][a-z]*$/.test(name)
                );
                return isValid || "Invalid name format";
              },
            }}
            render={({ field }) => (
              <input
                placeholder="Enter author"
                {...field}
                style={{ border: errors.name ? "1px solid red" : "" }}
              />
            )}
          />
          {errors.name && <h5>{errors.name.message}</h5>}
        </div>

        <div style={inputContainerStyles}>
          <label style={labelStyles}>Password:</label>
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
        <div style={inputContainerStyles}>
          <label style={labelStyles}>Area:</label>
          <Controller
            name="area"
            control={control}
            rules={{
              required: "area is required",
              minLength: {
                value: 3,
                message: "area length must be 3",
              },
              maxLength: {
                value: 100,
                message: "Minimum length must be 100",
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
              required: "Street address is required",
              minLength: {
                value: 5,
                message: "Street address length must be 5",
              },
              maxLength: {
                value: 20,
                message: "Minimum length must be 20",
              },
            }}
            render={({ field }) => (
              <input
                placeholder="Enter Street address"
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
              required: "phone is required",
              validate: (value) => {
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
              required: "role is required",
              validate: (value) => {
                return (
                  ["user", "admin"].includes(value.toLowerCase()) ||
                  "Invalid role"
                );
              },
            }}
            render={({ field }) => (
              <input
                placeholder="Enter publisher"
                {...field}
                style={{ border: errors.role ? "1px solid red" : "" }}
              />
            )}
          />
          {errors.role && <h5>{errors.role.message}</h5>}
        </div>

        <button type="submit" style={submitButtonStyles}>
          Add Book
        </button>
      </form>
    </div>
  );
};
export default FetchUserPost;
