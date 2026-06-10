import React from 'react';
import { Navigate } from 'react-router-dom';
import { getAuthToken } from '../services/authService';

export default function ProtectedRoute({ children }) {
  const token = getAuthToken();

  if (!token) {
    // Not logged in → redirect to login
    return <Navigate to="/login" replace />;
  }

  // Logged in → render the protected content
  return children;
}
