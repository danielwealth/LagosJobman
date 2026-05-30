// src/services/authService.js
import * as SecureStore from 'expo-secure-store';

export async function registerUser(userData) {
  // Example: send to backend or Firebase
  console.log('Registering user:', userData);
  // Save token locally (mock)
  await SecureStore.setItemAsync('userToken', 'mock-token');
  return { success: true, token: 'mock-token' };
}

export async function loginUser(email, password) {
  // Example: send to backend or Firebase
  console.log('Logging in:', email);
  await SecureStore.setItemAsync('userToken', 'mock-token');
  return { success: true, token: 'mock-token' };
}

export async function logoutUser() {
  await SecureStore.deleteItemAsync('userToken');
  return { success: true };
}
