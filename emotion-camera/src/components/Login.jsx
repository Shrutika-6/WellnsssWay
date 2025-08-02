import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from '../context/AuthContext';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { login } = useAuth();

  // components/Auth/Login.jsx
const handleSubmit = async (e) => {
  e.preventDefault();
  setError(''); // Clear previous errors
  
  try {
    const response = await axios.post('http://localhost:3001/api/auth/login', {
      email,
      password
    }, {
      headers: {
        'Content-Type': 'application/json'
      }
    });

    if (response.data.token) {
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('user', JSON.stringify(response.data.user));
      
      // Update context
      login(response.data.user);
      
      // Redirect based on role
      navigate(response.data.user.role === 'doctor' 
        ? '/doctor-dashboard' 
        : '/home');
    } else {
      throw new Error('No token received');
    }
    
  } catch (err) {
    let errorMessage = 'Login failed';
    
    if (err.response) {
      // The request was made and the server responded with status code
      errorMessage = err.response.data.message || 
                    `Server error: ${err.response.status}`;
      console.error('Server response:', err.response.data);
    } else if (err.request) {
      // The request was made but no response was received
      errorMessage = 'No response from server';
      console.error('No response received:', err.request);
    } else {
      // Something happened in setting up the request
      errorMessage = err.message;
      console.error('Request setup error:', err.message);
    }
    
    setError(errorMessage);
  }
};

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        backgroundColor: "#f3f4f6",
        backgroundImage: "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1920&q=80')",
        padding: "1rem",
        width: "100vw",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          backgroundColor: "white",
          borderRadius: "0.5rem",
          boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
          width: "100%",
          maxWidth: "600px",
          padding: "2rem",
          boxSizing: "border-box",
        }}
      >
        <div style={{ textAlign: "center", marginBottom: "1.5rem" }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: "bold", marginBottom: "0.5rem" }}>Login</h2>
          <p style={{ color: "#6b7280", fontSize: "0.875rem" }}>Enter your credentials to access your account</p>
        </div>
        {error && <p className="error">{error}</p>}
        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
            <label htmlFor="email" style={{ fontSize: "0.875rem", fontWeight: "500" }}>
              Email:
            </label>
            <input
              id="email"
              type="email"
              name="email"
              required
              onChange={(e) => setEmail(e.target.value)}
              style={{
                padding: "0.625rem 0.75rem",
                border: "1px solid #d1d5db",
                borderRadius: "0.375rem",
                width: "100%",
                fontSize: "1rem",
                lineHeight: "1.5rem",
              }}
            />
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
            <label htmlFor="password" style={{ fontSize: "0.875rem", fontWeight: "500" }}>
              Password:
            </label>
            <input
              id="password"
              type="password"
              name="password"
              required
              onChange={(e) => setPassword(e.target.value)}
              style={{
                padding: "0.625rem 0.75rem",
                border: "1px solid #d1d5db",
                borderRadius: "0.375rem",
                width: "100%",
                fontSize: "1rem",
                lineHeight: "1.5rem",
              }}
            />
          </div>
          <button
            type="submit"
            style={{
              width: "100%",
              padding: "0.75rem 1rem",
              backgroundColor: "#1a73e8",
              color: "white",
              border: "none",
              borderRadius: "0.375rem",
              cursor: "pointer",
              fontSize: "1rem",
              fontWeight: "500",
              transition: "background-color 0.2s ease-in-out",
            }}
            onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#155bb5")}
            onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#1a73e8")}
          >
            Login
          </button>
        </form>
        <div style={{ marginTop: "1.5rem", textAlign: "center" }}>
          <p style={{ fontSize: "0.875rem", color: "#6b7280" }}>
            Don’t have an account?{' '}
            <Link to="/signup" style={{ textDecoration: "underline", color: "#1a73e8" }}>
              Sign up here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
