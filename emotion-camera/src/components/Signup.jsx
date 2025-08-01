"use client" 

import { useState } from "react"
import { useNavigate, Link } from "react-router-dom" 
import axios from "axios" 

function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('general');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const endpoint = role === 'doctor' 
        ? 'http://localhost:3001/api/users/doctor' 
        : 'http://localhost:3001/api/users';
      
      const response = await axios.post(endpoint, {
        name,
        email,
        password,
        role
      });
      
      setSuccess('Registration successful! Please login.');
      setError('');
      setName('');
      setEmail('');
      setPassword('');
      setTimeout(() => navigate('/login'), 2000);
    } catch (err) {
      setError(err.response?.data?.message || 'Registration failed');
      setSuccess('');
    }
  };

  return (
    <div
  style={{
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh",
    backgroundColor: "#272e3bff",
    backgroundImage:
      "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1920&q=80')",
    padding: "1rem",
    width: "100vw", // <--- Force full screen width
    boxSizing: "border-box", // <-- Prevent overflow due to padding
  }}
>

  <div
  style={{
    backgroundColor: "white",
    borderRadius: "0.5rem",
    boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
    width: "100%",            // Ensures it fills available space
    maxWidth: "600px",        // You can increase this further if needed
    padding: "2rem",          // Optional: larger padding for better spacing
  }}
>


        <div style={{ textAlign: "center", marginBottom: "1.5rem" }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: "bold", marginBottom: "0.5rem" }}>Sign Up</h2>
          <p style={{ color: "#3f4247ff", fontSize: "0.875rem" }}>Enter your information to create an account</p>
        </div>
        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          {error && <p className="error">{error}</p>}
      {success && <p className="success">{success}</p>}
          <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
            <label htmlFor="name" style={{ fontSize: "0.875rem", fontWeight: "500" }}>
              Name:
            </label>
            <input
              id="name"
              type="text"
              name="name"
              value={name}
              required
              onChange={(e) => setName(e.target.value)}
              style={{
                padding: "0.625rem 0.75rem", // py-2.5 px-3
                border: "1px solid #d1d5db", // border-gray-300
                borderRadius: "0.375rem", // rounded-md
                width: "100%",
                fontSize: "1rem",
                lineHeight: "1.5rem",
              }}
            />
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
            <label htmlFor="email" style={{ fontSize: "0.875rem", fontWeight: "500" }}>
              Email:
            </label>
            <input
              id="email"
              type="email"
              name="email"
              value={email}
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
              value={password}
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
          <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
            <label htmlFor="role" style={{ fontSize: "0.875rem", fontWeight: "500" }}>
              Role:
            </label>
            <select
              id="role"
              type="role"
              name="role"
              value={role}
              required
              onChange={(e) => setRole(e.target.value)}
              style={{
                padding: "0.625rem 0.75rem",
                border: "1px solid #d1d5db",
                borderRadius: "0.375rem",
                width: "100%",
                fontSize: "1rem",
                lineHeight: "1.5rem",
              }}
            >
              <option value="general">General User</option>
            <option value="doctor">Doctor</option>
            </select>
          </div>
          <button
            type="submit"
            style={{
              width: "100%",
              padding: "0.75rem 1rem",
              backgroundColor: "#1a73e8", // A shade of blue for the button
              color: "white",
              border: "none",
              borderRadius: "0.375rem",
              cursor: "pointer",
              fontSize: "1rem",
              fontWeight: "500",
              transition: "background-color 0.2s ease-in-out",
            }}
            onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#155bb5")} // Darker blue on hover
            onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#1a73e8")} // Original blue
          >
            Sign Up
          </button>
        </form>
        <div style={{ marginTop: "1.5rem", textAlign: "center" }}>
          <p style={{ fontSize: "0.875rem", color: "#6b7280" }}>
            Already have an account?{" "}
            <Link to="/login" style={{ textDecoration: "underline", color: "#1a73e8" }}>
              {" "}
              {/* From react-router-dom */}
              Login here
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Signup