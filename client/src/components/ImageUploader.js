import React, { useRef, useState } from 'react';
import { globalStyles } from '../styles/globalStyles';

export default function ImageUploader({ label, onImageSelected }) {
  const fileInputRef = useRef(null);
  const [preview, setPreview] = useState(null);

  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    // Show preview immediately
    const previewUrl = URL.createObjectURL(file);
    setPreview(previewUrl);

    // Upload to backend
    try {
      const formData = new FormData();
      formData.append('image', file);

      const response = await fetch('https://lagjobman.onrender.com/api/upload', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) throw new Error('Upload failed');
      const data = await response.json();

      // Backend returns full URL
      onImageSelected(data.url);
    } catch (err) {
      console.error('Image upload error:', err);
      alert('Failed to upload image. Please try again.');
    }
  };

  return (
    <div style={{ marginTop: '15px' }}>
      <label style={globalStyles.label}>{label}</label>
      <input
        type="file"
        accept="image/*"
        ref={fileInputRef}
        style={globalStyles.input}
        onChange={handleFileChange}
      />

      {preview && (
        <img
          src={preview}
          alt={`${label} preview`}
          style={{
            marginTop: '10px',
            width: '180px',
            height: '180px',
            objectFit: 'cover',
            borderRadius: '8px',
            border: '2px solid #ccc'
          }}
        />
      )}
    </div>
  );
}
