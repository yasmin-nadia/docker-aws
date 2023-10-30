import react, { useEffect, useState } from "react";
import useProductPostHook from "../hooks/admin/userProductAdd";
import { useForm, Controller } from "react-hook-form";
import jwtDecode from "jwt-decode";
const FetchPost = () => {
  const { createPost, loading } = useProductPostHook();

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
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState("");

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
  };

  const handleSubmittwo = async () => {
    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND}/files/upload-file`,
        {
          method: "POST",
          body: formData,
        }
      );
      console.log("resonse", response);

      if (response.ok) {
        const imageInfo = await response.json();
        if (imageInfo && imageInfo.filename) {
          const productData = {
            ...getValues(),
            image: imageInfo.filename,
          };
          console.log("productData", productData);
          createPost(productData);
        }
      } else {
        console.log("Cannot upload the data");
        setMessage("File upload failed. Please try again.");
      }
    } catch (err) {
      console.error("Error uploading the data", err);
      setMessage("An error occurred. Please try again later.");
    }
  };
  const handleCombinedSubmit = async (data) => {
    // Do any processing that you want for form data here
    data.price = parseInt(data.price, 10);
    data.stock = parseInt(data.stock, 10);
    data.pages = parseInt(data.pages, 10);
    data.genre = data.genre.split(",").map((genre) => genre.trim());
    console.log("Form is submitted ", data);

    // Now, perform the file upload
    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND}/files/upload-file`,
        {
          method: "POST",
          body: formData,
        }
      );

      console.log("Response status:", response.status);

      if (response.ok) {
        const imageInfo = await response.json();
        if (imageInfo && imageInfo.filename) {
          const productData = {
            ...data, // Use the processed data from the form
            image: imageInfo.filename,
          };
          console.log("Product Data:", productData);
          createPost(productData);
        }
      } else {
        console.log("Cannot upload the data");
        setMessage("File upload failed. Please try again.");
      }
    } catch (err) {
      console.error("Error uploading the image", err);
      setMessage("An error occurred while uploading the image.");
    }
  };

  const handlerOnSubmit = (data) => {
    data.price = parseInt(data.price, 10);
    data.stock = parseInt(data.stock, 10);
    data.pages = parseInt(data.pages, 10);
    data.genre = data.genre.split(",").map((genre) => genre.trim());
    // data.image = selectedFile;
    console.log("Form is submitted ", data);
    createPost(data);
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
      <h1>Add product</h1>
      {loading === true && <h4>Loading...</h4>}
      <form style={formStyles} onSubmit={handleSubmit(handlerOnSubmit)}>
        <div style={inputContainerStyles}>
          <label style={labelStyles}>Title:</label>
          <Controller
            name="title"
            control={control}
            rules={{
              required: "title is required",
              minLength: {
                value: 6,
                message: "Minimum length must be 6",
              },
              maxLength: {
                value: 20,
                message: "Minimum length must be 20",
              },
            }}
            render={({ field }) => (
              <input
                placeholder="Enter title"
                {...field}
                style={{ border: errors.title ? "1px solid red" : "" }}
              />
            )}
          />
          {errors.title && <h5>{errors.title.message}</h5>}
        </div>

        <div style={inputContainerStyles}>
          <label style={labelStyles}>Author:</label>
          <Controller
            name="author"
            control={control}
            rules={{
              required: "author is required",
              minLength: {
                value: 6,
                message: "Minimum length must be 6",
              },
              maxLength: {
                value: 20,
                message: "Minimum length must be 20",
              },
            }}
            render={({ field }) => (
              <input
                placeholder="Enter author"
                {...field}
                style={{ border: errors.author ? "1px solid red" : "" }}
              />
            )}
          />
          {errors.author && <h5>{errors.author.message}</h5>}
        </div>

        <div style={inputContainerStyles}>
          <label style={labelStyles}>Price:</label>
          <Controller
            name="price"
            control={control}
            rules={{
              required: "price is required",
              min: {
                value: 20,
                message: "Price must be greater than or equal to 20",
              },
            }}
            render={({ field }) => (
              <input
                type="number"
                placeholder="Enter price"
                {...field}
                style={{ border: errors.price ? "1px solid red" : "" }}
              />
            )}
          />
          {errors.price && <h5>{errors.price.message}</h5>}
        </div>

        <div style={inputContainerStyles}>
          <label style={labelStyles}>Stock:</label>
          <Controller
            name="stock"
            control={control}
            rules={{
              required: "stock is required",
              min: {
                value: 5,
                message: "Stock must be greater than or equal to 5",
              },
            }}
            render={({ field }) => (
              <input
                type="number"
                placeholder="Enter stock"
                {...field}
                style={{ border: errors.stock ? "1px solid red" : "" }}
              />
            )}
          />
          {errors.stock && <h5>{errors.stock.message}</h5>}
        </div>
        <div style={inputContainerStyles}>
          <label style={labelStyles}>Category:</label>
          <Controller
            name="category"
            control={control}
            rules={{
              required: "category is required",
              minLength: {
                value: 6,
                message: "category length must be 20",
              },
              maxLength: {
                value: 20,
                message: "Minimum length must be 100",
              },
            }}
            render={({ field }) => (
              <input
                placeholder="Enter category"
                {...field}
                style={{ border: errors.category ? "1px solid red" : "" }}
              />
            )}
          />
          {errors.category && <h5>{errors.category.message}</h5>}
        </div>
        <div style={inputContainerStyles}>
          <label style={labelStyles}>Genre:</label>
          <Controller
            name="genre"
            control={control}
            rules={{
              required: "genre is required",
              minLength: {
                value: 5,
                message: "genre length must be 5",
              },
              maxLength: {
                value: 20,
                message: "Minimum length must be 20",
              },
            }}
            render={({ field }) => (
              <input
                placeholder="Enter category"
                {...field}
                style={{ border: errors.genre ? "1px solid red" : "" }}
              />
            )}
          />
          {errors.genre && <h5>{errors.genre.message}</h5>}
        </div>
        <div style={inputContainerStyles}>
          <label style={labelStyles}>Description:</label>
          <Controller
            name="description"
            control={control}
            rules={{
              required: "description is required",
              minLength: {
                value: 5,
                message: "description length must be 5",
              },
              maxLength: {
                value: 200,
                message: "Minimum length must be 200",
              },
            }}
            render={({ field }) => (
              <input
                placeholder="Enter description"
                {...field}
                style={{ border: errors.description ? "1px solid red" : "" }}
              />
            )}
          />
          {errors.description && <h5>{errors.description.message}</h5>}
        </div>
        <div style={inputContainerStyles}>
          <label style={labelStyles}>Publisher:</label>
          <Controller
            name="publisher"
            control={control}
            rules={{
              required: "publisher is required",
              minLength: {
                value: 6,
                message: "publisher length must be 6",
              },
              maxLength: {
                value: 200,
                message: "Minimum length must be 200",
              },
            }}
            render={({ field }) => (
              <input
                placeholder="Enter publisher"
                {...field}
                style={{ border: errors.publisher ? "1px solid red" : "" }}
              />
            )}
          />
          {errors.publisher && <h5>{errors.publisher.message}</h5>}
        </div>
        <div style={inputContainerStyles}>
          <label style={labelStyles}>Pages:</label>
          <Controller
            name="pages"
            control={control}
            rules={{
              required: "pages is required",
            }}
            render={({ field }) => (
              <input
                type="number"
                placeholder="Enter pages"
                {...field}
                style={{ border: errors.pages ? "1px solid red" : "" }}
              />
            )}
          />
          {errors.pages && <h5>{errors.pages.message}</h5>}
        </div>
        <div className="file-upload-container">
          <h1 className="file-upload-title">File Upload</h1>
          <Controller
            name="image"
            control={control}
            render={({ field }) => (
              <>
                <input
                  type="file"
                  {...field}
                  onChange={(e) => {
                    field.onChange(e);
                    handleFileChange(e);
                  }}
                />
                <button type="submit" onClick={handleSubmittwo}>
                  Submit
                </button>
              </>
            )}
          />
        </div>

        {/* <button type="submit" style={submitButtonStyles}>
          Add Book
        </button> */}
      </form>
    </div>
  );
};
export default FetchPost;
