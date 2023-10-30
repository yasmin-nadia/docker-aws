import React, { useState } from "react";
import "../App.scss";

const Fileupload = () => {
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState("");

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
  };

  const handleSubmit = async () => {
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

      const json = await response.json();

      if (json.success) {
        console.log("Successfully uploaded data", json.data);
        setMessage("File uploaded successfully.");
      } else {
        console.log("Cannot upload the data");
        setMessage("File upload failed. Please try again.");
      }
    } catch (err) {
      console.error("Error uploading the data", err);
      setMessage("An error occurred. Please try again later.");
    }
  };

  return (
    <div className="file-upload-container">
      <h1 className="file-upload-title">File Upload</h1>
      <input type="file" name="file" onChange={handleFileChange} />
      <button onClick={handleSubmit}>Upload File</button>
      {message && <p className="file-upload-message">{message}</p>}
    </div>
  );
};

export default Fileupload;
