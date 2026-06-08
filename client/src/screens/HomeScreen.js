// src/screens/HomeScreen.js
import React from 'react';
import { globalStyles } from '../styles/globalStyles';
import { logoutUser } from '../services/authService';
import logo from '../assets/logo2.png';
import { useNavigate } from 'react-router-dom';

export default function HomeScreen() {
  const navigate = useNavigate();

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
