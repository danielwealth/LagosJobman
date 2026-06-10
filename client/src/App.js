import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// Screens
import LoginScreen from './screens/LoginScreen';
import SignUpScreen from './screens/SignUpScreen';
import HomeScreen from './screens/HomeScreen';
import RegisterScreen from './screens/RegisterScreen';
import ProfileScreen from './screens/ProfileScreen';
import SearchScreen from './screens/SearchScreen';
import FavoritesScreen from './screens/FavoritesScreen';
import TechnicianListScreen from './screens/TechnicianListScreen';

// Components
import ProtectedRoute from './components/ProtectedRoute';

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Public routes */}
        <Route path="/" element={<SignUpScreen />} />   {/* ✅ Signup is default */}
        <Route path="/signup" element={<SignUpScreen />} />
        <Route path="/login" element={<LoginScreen />} />

        {/* Protected routes */}
        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <HomeScreen />
            </ProtectedRoute>
          }
        />
        <Route
          path="/register"
          element={
            <ProtectedRoute>
              <RegisterScreen />
            </ProtectedRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <ProfileScreen />
            </ProtectedRoute>
          }
        />
        <Route
          path="/search"
          element={
            <ProtectedRoute>
              <SearchScreen />
            </ProtectedRoute>
          }
        />
        <Route
          path="/favorites"
          element={
            <ProtectedRoute>
              <FavoritesScreen />
            </ProtectedRoute>
          }
        />
        <Route
          path="/technicians"
          element={
            <ProtectedRoute>
              <TechnicianListScreen />
            </ProtectedRoute>
          }
        />

        {/* Catch-all */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}
