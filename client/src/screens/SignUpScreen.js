import React, { useState } from 'react';
import { registerUser } from '../services/authService';
import { globalStyles } from '../styles/globalStyles';
import { useNavigate } from 'react-router-dom';

export default function SignUpScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSignUp = async () => {
    setError('');
    setSuccess('');
    setLoading(true);

    if (!email || !password) {
      setError('Please enter both email and password.');
      setLoading(false);
      return;
    }

    try {
      const result = await registerUser(email, password);

      if (result.success && result.user) {
        setSuccess('Account created successfully!');

        // ✅ Save token so ProtectedRoute recognizes login
        if (result.token) {
          localStorage.setItem('authToken', result.token);
        }

        // ✅ Redirect straight to Home
        navigate('/home');
      } else {
        setError(result.message || 'Registration failed.');
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
      <h2 style={globalStyles.title}>Create Your Account</h2>

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
        onClick={handleSignUp}
        disabled={loading}
      >
        {loading ? 'Signing up…' : 'Sign Up'}
      </button>

      <button
        style={globalStyles.button}
        onClick={() => navigate('/login')}
        disabled={loading}
      >
        Back to Login
      </button>
    </div>
  );
}
