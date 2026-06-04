// src/components/TechnicianCard.js
import React from 'react';
import { FaStar, FaRegStar } from 'react-icons/fa';
import { addFavorite, removeFavorite, getFavorites } from '../services/favoritesService';

export default function TechnicianCard({ technician, onPress }) {
  const isFavorite = getFavorites().some((fav) => fav.id === technician.id);

  const toggleFavorite = (e) => {
    e.stopPropagation(); // prevent triggering onPress when clicking the star
    if (isFavorite) {
      removeFavorite(technician.id);
    } else {
      addFavorite(technician);
    }
  };

  return (
    <div style={styles.card} onClick={onPress}>
      <div style={styles.header}>
        <h3 style={styles.name}>{technician.name}</h3>
        <button onClick={toggleFavorite} style={styles.favoriteButton}>
          {isFavorite ? <FaStar color="#FFD700" /> : <FaRegStar color="#999" />}
        </button>
      </div>

      <p style={styles.detail}>{technician.jobType} - {technician.lga}</p>

      <p style={{ color: technician.available ? 'green' : 'red' }}>
        {technician.available ? 'Available' : 'Unavailable'}
      </p>
    </div>
  );
}

const styles = {
  card: {
    padding: '15px',
    margin: '10px 0',
    border: '1px solid #ccc',
    borderRadius: '8px',
    backgroundColor: '#fff',
    cursor: 'pointer',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  name: {
    fontSize: '18px',
    fontWeight: 'bold',
    margin: 0,
  },
  detail: {
    fontSize: '14px',
    color: '#333',
  },
  favoriteButton: {
    background: 'none',
    border: 'none',
    cursor: 'pointer',
  },
};
