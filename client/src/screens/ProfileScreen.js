// src/screens/ProfileScreen.js
import React from 'react';
import { useLocation } from 'react-router-dom';
import { globalStyles } from '../styles/globalStyles';

export default function ProfileScreen() {
  const location = useLocation();
  const technician = location.state?.technician;

  if (!technician) {
    return <div style={globalStyles.container}>No technician data available.</div>;
  }

  return (
    <div style={globalStyles.container}>
      <h2 style={globalStyles.title}>Technician Profile</h2>

      <p><strong>Name:</strong> {technician.name}</p>
      <p><strong>Phone:</strong> {technician.phoneNumber}</p>
      <p><strong>Job Type:</strong> {technician.jobType}</p>
      <p><strong>LGA:</strong> {technician.lga}</p>
      <p><strong>Available:</strong> {technician.available ? 'Yes' : 'No'}</p>

      {technician.faceImage && (
        <div>
          <strong>Profile Photo:</strong>
          <img 
            src={`https://lagosjobman.onrender.com${technician.faceImage}`} 
            alt="Profile" 
            style={{ width: '150px', marginTop: '10px', borderRadius: '8px' }} 
          />
        </div>
      )}

      {technician.workImage && (
        <div>
          <strong>Work Sample:</strong>
          <img 
            src={`https://lagosjobman.onrender.com${technician.workImage}`} 
            alt="Work Sample" 
            style={{ width: '150px', marginTop: '10px', borderRadius: '8px' }} 
          />
        </div>
      )}

      {technician.message && (
        <div
          style={{
            marginTop: '20px',
            padding: '15px',
            backgroundColor: '#f0f8ff',
            borderLeft: '5px solid #0077cc',
            borderRadius: '8px',
            fontStyle: 'italic'
          }}
        >
          <strong>Message from Technician:</strong>
          <p style={{ marginTop: '8px' }}>{technician.message}</p>
        </div>
      )}
    </div>
  );
}
