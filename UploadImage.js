import React, { useState } from "react";
import { storage } from "./Firebase";
import { ref, uploadBytes } from "firebase/storage";
import { v4 as uuidv4 } from "uuid";
import './UploadImage.css';

function UploadImage() {
  const [imageUpload, setImageUpload] = useState(null);
  const [uploadedFileName, setUploadedFileName] = useState("");

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setImageUpload(file);
    setUploadedFileName(file ? file.name : "");
  };

  const handleUpload = () => {
    if (imageUpload === null) return;

    const uniqueFileName = `${uuidv4()}_${imageUpload.name}`;
    const imageRef = ref(storage, `images/${uniqueFileName}`);
    uploadBytes(imageRef, imageUpload).then(() => {
      alert("Image uploaded successfully");
    });
  };

  return (
    <div className="Imager">
      <div className="file-info-container">
        {uploadedFileName || "No file selected"} {/* Show uploaded file name or "No file selected" */}
      </div>
      <label className="custom-file-upload">
        <input
          type="file"
          onChange={handleImageChange}
        />
        Photo Choose Karo
      </label>
      <button onClick={handleUpload}>Upload</button>
    </div>
  );   
}

export default UploadImage;
