// src/services/authService.js

const API_BASE = "https://lagjobman.onrender.com/api/auth"; 
// Replace with your actual Render backend URL

// Register a new user
export async function registerUser(email, password) {
  try {
    const response = await fetch(`${API_BASE}/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();

    if (data.success && data.token) {
      // ✅ Save token for authenticated requests
      localStorage.setItem("authToken", data.token);
    }

    return data; // { success, user, token }
  } catch (error) {
    console.error("Register error:", error);
    return { success: false, message: "Server error during registration." };
  }
}

// Login user
export async function loginUser(email, password) {
  try {
    const response = await fetch(`${API_BASE}/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();

    if (data.success && data.token) {
      // ✅ Save token for authenticated requests
      localStorage.setItem("authToken", data.token);
    }

    return data; // { success, user, token }
  } catch (error) {
    console.error("Login error:", error);
    return { success: false, message: "Server error during login." };
  }
}

// Logout user
export function logoutUser() {
  localStorage.removeItem("authToken");
  return { success: true };
}

// Get current token
export function getAuthToken() {
  return localStorage.getItem("authToken");
}
