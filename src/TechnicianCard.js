// src/components/TechnicianCard.js
import React from 'react';
import '../styles/globalStyles.css'; // assuming you converted styles to CSS

export default function TechnicianCard({ technician, onClick }) {
  return (
    <div className="card" onClick={onClick} style={{ cursor: 'pointer' }}>
      <p className="name">{technician.name}</p>
      <p>{technician.jobType} - {technician.lga}</p>
      <p style={{ color: technician.available ? 'green' : 'red' }}>
        {technician.available ? 'Available' : 'Unavailable'}
      </p>
    </div>
  );
}
