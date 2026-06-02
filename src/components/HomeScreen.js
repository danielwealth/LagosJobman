// src/screens/HomeScreen.js
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { logoutUser } from '../services/authService';
import logo from '../assets/logo2.png'; // ✅ logo path
import '../styles/globalStyles.css'; // converted CSS styles

export default function HomeScreen() {
  const navigate = useNavigate();
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    // Trigger fade-in after mount
    setFadeIn(true);
  }, []);

  const handleLogout = async () => {
    try {
      const result = await logoutUser();
      if (result.success) {
        window.alert('Logged out. You have been signed out.');
        navigate('/login'); // Redirect to Login screen
      }
    } catch (error) {
      window.alert('Error: Logout failed.');
      console.error(error);
    }
  };

  return (
    <div className="container">
      {/* ✅ Animated logo using CSS fade-in */}
      <img
        src={logo}
        alt="Logo"
        className={`logo ${fadeIn ? 'fade-in' : ''}`}
      />

      <h1 className="title">Technician Marketplace</h1>

      <button className="button" onClick={() => navigate('/register')}>
        Register
      </button>

      <button className="button" onClick={() => navigate('/search')}>
        Search Technicians
      </button>

      <button className="button" onClick={() => navigate('/profile')}>
        View Profile
      </button>

      <button className="button" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
}
