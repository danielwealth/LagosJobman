// src/screens/ProfileScreen.js
import React, { useState } from 'react';
import AvailabilityToggle from '../components/AvailabilityToggle';
import ImageUploader from '../components/ImageUploader';
import { updateTechnician } from '../services/technicianService';
import { globalStyles } from '../styles/globalStyles';
import { useLocation } from 'react-router-dom';

export default function ProfileScreen() {
  // ✅ In React Router, technician data can be passed via navigate('/profile', { state: { technician } })
  const location = useLocation();
  const { technician } = location.state || {};

  const [available, setAvailable] = useState(technician?.available || false);
  const [faceImage, setFaceImage] = useState(technician?.faceImage || null);
  const [workImage, setWorkImage] = useState(technician?.workImage || null);

  if (!technician) {
    return (
      <div style={globalStyles.container}>
        <h2 style={globalStyles.title}>No technician data provided.</h2>
      </div>
    );
  }

  const handleUpdate = () => {
    const updated = updateTechnician(technician.id, {
      available,
      faceImage,
      workImage,
    });
    window.alert(`Profile Updated: ${updated.name}'s profile has been updated.`);
  };

  return (
    <div style={globalStyles.container}>
      <h2 style={globalStyles.title}>{technician.name}</h2>
      <p style={globalStyles.label}>Job Type: {technician.jobType}</p>
      <p style={globalStyles.label}>Location (LGA): {technician.lga}</p>

      <AvailabilityToggle available={available} setAvailable={setAvailable} />

      <ImageUploader label="Update Face Photo" onImageSelected={setFaceImage} />
      {faceImage && (
        <img src={faceImage} alt="Face" style={styles.image} />
      )}

      <ImageUploader label="Update Work Sample" onImageSelected={setWorkImage} />
      {workImage && (
        <img src={workImage} alt="Work Sample" style={styles.image} />
      )}

      <button style={globalStyles.button} onClick={handleUpdate}>
        Save Changes
      </button>
    </div>
  );
}

const styles = {
  image: {
    width: '150px',
    height: '150px',
    borderRadius: '8px',
    margin: '10px 0',
    objectFit: 'cover',
  },
};
