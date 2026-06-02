// src/screens/TechnicianListScreen.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { getAllTechnicians } from '../services/technicianService';
import TechnicianCard from '../components/TechnicianCard';
import '../styles/globalStyles.css'; // converted CSS styles

export default function TechnicianListScreen() {
  const navigate = useNavigate();
  const technicians = getAllTechnicians();

  return (
    <div className="container">
      <h1 className="title">All Registered Technicians</h1>

      {technicians.length === 0 ? (
        <p>No technicians registered yet.</p>
      ) : (
        <ul className="technician-list">
          {technicians.map((item) => (
            <li key={item.id}>
              <TechnicianCard
                technician={item}
                onClick={() => navigate('/profile', { state: { technician: item } })}
              />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
