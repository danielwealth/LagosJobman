// src/components/ImageUploader.js
import React, { useState } from 'react';

export default function ImageUploader({ label, onImageSelected }) {
  const [imageUrl, setImageUrl] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file); // create a temporary preview URL
      setImageUrl(url);
      onImageSelected(file); // pass the File object back to parent
    }
  };

  return (
    <div style={styles.container}>
      <label style={styles.label}>{label}</label>
      <input type="file" accept="image/*" onChange={handleFileChange} />
      {imageUrl && <img src={imageUrl} alt="Preview" style={styles.image} />}
    </div>
  );
}

const styles = {
  container: {
    margin: '10px 0',
  },
  label: {
    fontSize: '16px',
    marginBottom: '5px',
    display: 'block',
  },
  image: {
    width: '100px',
    height: '100px',
    marginTop: '10px',
    borderRadius: '8px',
    objectFit: 'cover',
  },
};
