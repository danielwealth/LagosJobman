// src/utils/validators.js

// Validate email format
export function isValidEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

// Validate password strength (min 6 chars, at least one number)
export function isValidPassword(password) {
  if (!password) return false;
  const regex = /^(?=.*\d).{6,}$/;
  return regex.test(password);
}

// Validate name (letters and spaces only)
export function isValidName(name) {
  if (!name) return false;
  const regex = /^[A-Za-z\s]+$/;
  return regex.test(name.trim());
}

// Validate image URI
export function isValidImage(uri) {
  return uri && typeof uri === 'string' && uri.length > 0;
}
