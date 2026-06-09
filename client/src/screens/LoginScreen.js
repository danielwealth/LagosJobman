// src/screens/LoginScreen.js
import React, { useState } from 'react';
import { loginUser } from '../services/authService';
import { globalStyles } from '../styles/globalStyles';
import { useNavigate } from 'react-router-dom';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleLogin = async () => {
    setError('');
    setSuccess('');
    setLoading(true);

    if (!email || !password) {
      setError('Please enter both email and password.');
      setLoading(false);
      return;
    }

    try {
      const result = await loginUser(email, password);

      // ✅ Check both success and token
      if (result.success && result.token) {
        setSuccess('Logged in successfully!');
        // Token is already saved in localStorage by authService
        navigate('/home'); 
      } else {
        setError(result.message || 'Login failed. Try again.');
      }
    } catch (err) {
      setError('Something went wrong. Please try again later.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={globalStyles.container}>
      <h2 style={globalStyles.title}>Technician Login</h2>

      <input
        style={globalStyles.input}
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        style={globalStyles.input}
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      {error && <p style={{ color: 'red', marginTop: '5px' }}>{error}</p>}
      {success && <p style={{ color: 'green', marginTop: '5px' }}>{success}</p>}

      <button
        style={{
          ...globalStyles.button,
          opacity: loading ? 0.6 : 1,
          cursor: loading ? 'not-allowed' : 'pointer',
        }}
        onClick={handleLogin}
        disabled={loading}
      >
        {loading ? 'Logging in…' : 'Login'}
      </button>
        <button
  style={globalStyles.button}
  onClick={() => navigate('/signup')}
>
  Sign Up
</button>

<button
  style={globalStyles.button}
  onClick={() => navigate('/register')}
>
  Register as Technician
</button>


      <button
        style={globalStyles.button}
        onClick={() => navigate('/signup')} // ✅ Navigate to SignUpScreen
        disabled={loading}
      >
        Sign Up Instead
      </button>
    </div>
  );
}
