// src/components/ImageUploader.js
import React, { useState } from 'react';
import '../styles/globalStyles.css'; // assuming you converted styles to CSS

export default function ImageUploader({ label, onImageSelected }) {
  const [imageUri, setImageUri] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const uri = URL.createObjectURL(file);
      setImageUri(uri);
      onImageSelected(uri); // Pass image URI back to parent
    }
  };

  return (
    <div className="image-uploader">
      <label className="label">{label}</label>
      <input type="file" accept="image/*" onChange={handleFileChange} />
      {imageUri && (
        <img src={imageUri} alt="Uploaded preview" className="uploaded-image" />
      )}
    </div>
  );
}
