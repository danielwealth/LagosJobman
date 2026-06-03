// src/index.js
import React from 'react';
import { createRoot } from 'react-dom/client';
import AppNavigator from './navigation/AppNavigator';
import './index.css'; // optional global styles

// Grab the root element
const container = document.getElementById('root');

// Create React 18 root
const root = createRoot(container);

// Render the app
root.render(
  <React.StrictMode>
    <AppNavigator />
  </React.StrictMode>
);
