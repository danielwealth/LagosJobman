// src/navigation/AppNavigator.js
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { getFavorites } from '../services/FavoritesService';
import { getAllTechnicians } from '../services/technicianService';

// Import screens
import HomeScreen from '../screens/HomeScreen';
import RegisterScreen from '../screens/RegisterScreen';
import SearchScreen from '../screens/SearchScreen';
import ProfileScreen from '../screens/ProfileScreen';
import LoginScreen from '../screens/LoginScreen';
import TechnicianListScreen from '../screens/TechnicianListScreen';
import FavoritesScreen from '../screens/FavoritesScreen';

export default function AppNavigator() {
  const [initialRoute, setInitialRoute] = useState(null);

  useEffect(() => {
    // Check login state using localStorage
    const token = localStorage.getItem('userToken');
    setInitialRoute(token ? '/home' : '/login');
  }, []);

  if (!initialRoute) {
    // Show loading spinner while checking login state
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/home" element={<HomeScreen />} />
        <Route path="/register" element={<RegisterScreen />} />
        <Route path="/search" element={<SearchScreen />} />
        <Route path="/technicians" element={<TechnicianListScreen />} />
        <Route path="/favorites" element={<FavoritesScreen />} />
        <Route path="/profile" element={<ProfileScreen />} />
        {/* Redirect root to initial route */}
        <Route path="/" element={<Navigate to={initialRoute} />} />
      </Routes>
    </Router>
  );
}
