// src/screens/HomeScreen.js
import React, { useEffect, useState } from 'react';
import { globalStyles } from '../styles/globalStyles';
import { logoutUser } from '../services/authService';
import logo from '../assets/logo.png';
import { useNavigate } from 'react-router-dom';

export default function HomeScreen() {
  const navigate = useNavigate();
  const [technicians, setTechnicians] = useState([]);

  const handleLogout = async () => {
    try {
      const result = await logoutUser();
      if (result.success) {
        window.alert('Logged out: You have been signed out.');
        navigate('/'); // Redirect to Login screen
      }
    } catch (error) {
      window.alert('Error: Logout failed.');
      console.error(error);
    }
  };

  // ✅ Fetch technicians when Home loads
  useEffect(() => {
    const fetchTechnicians = async () => {
      try {
        const res = await fetch('https://lagjobman.onrender.com/api/technicians');
        const data = await res.json();
        setTechnicians(data);
      } catch (err) {
        console.error('Failed to fetch technicians:', err);
      }
    };
    fetchTechnicians();
  }, []);

  return (
    <div style={globalStyles.container}>
      {/* ✅ Animated logo using CSS */}
      <img src={logo} alt="Logo" style={styles.logo} />

      <h2 style={globalStyles.title}>Technician Marketplace</h2>

      <button style={globalStyles.button} onClick={() => navigate('/register')}>
        Register
      </button>

      <button style={globalStyles.button} onClick={() => navigate('/search')}>
        Search Technicians
      </button>

      <button style={globalStyles.button} onClick={() => navigate('/profile')}>
        View Profile
      </button>

      <button style={globalStyles.button} onClick={handleLogout}>
        Logout
      </button>

      {/* ✅ List of registered technicians */}
      <div style={{ marginTop: '30px', textAlign: 'left' }}>
        <h3>Registered Technicians</h3>
        {technicians.length === 0 ? (
          <p>No technicians found.</p>
        ) : (
          <ul>
            {technicians.map((tech) => (
              <li
                key={tech._id}
                style={{ marginBottom: '10px', cursor: 'pointer', color: '#007bff' }}
                onClick={() => navigate('/profile', { state: { technician: tech } })}
              >
                <strong>{tech.name}</strong> — {tech.jobType} ({tech.lga})
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

const styles = {
  logo: {
    width: '120px',
    height: '120px',
    marginBottom: '20px',
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    animation: 'fadeIn 1.5s ease-in forwards',
  },
};

// ✅ Add this CSS animation globally (e.g., in index.css)
/*
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
*/
