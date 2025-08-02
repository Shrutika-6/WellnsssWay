import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import './DoctorDashboard.css';
import { useNavigate } from 'react-router-dom';

const DoctorDashboard = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [emotions, setEmotions] = useState([]);
  const [loading, setLoading] = useState(false);
  const { user, loading: authLoading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!authLoading) {
      if (!user || user.role !== 'doctor') {
        navigate('/login');
      }
    }
  }, [user, authLoading, navigate]);

  if (authLoading) {
    return <div>Loading...</div>;
  }

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    
    setLoading(true);
    try {
      const response = await fetch(
        `http://localhost:3001/api/users/search?query=${encodeURIComponent(searchQuery)}`,
        {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
          }
        }
      );
      const data = await response.json();
      setUsers(data);
    } catch (err) {
      console.error('Search failed:', err);
    } finally {
      setLoading(false);
    }
  };

  const fetchUserEmotions = async (userId) => {
    setLoading(true);
    try {
      const response = await fetch(
        `http://localhost:3001/api/emotions/user/${userId}`,
        {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
          }
        }
      );
      const data = await response.json();
      setEmotions(data);
      setSelectedUser(users.find(u => u._id === userId));
    } catch (err) {
      console.error('Failed to fetch emotions:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="doctor-dashboard">
      <h1>Doctor Dashboard</h1>
      
      <div className="search-section">
        <form onSubmit={handleSearch}>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search users by name or email"
          />
          <button type="submit" disabled={loading}>
            {loading ? 'Searching...' : 'Search'}
          </button>
        </form>
      </div>

      {users.length > 0 && (
        <div className="users-list">
          <h2>Found Users</h2>
          <ul>
            {users.map((user) => (
              <li 
                key={user._id} 
                onClick={() => fetchUserEmotions(user._id)}
                className={selectedUser?._id === user._id ? 'active' : ''}
              >
                {user.name} ({user.email})
              </li>
            ))}
          </ul>
        </div>
      )}

      {selectedUser && (
        <div className="emotions-section">
          <h2>Emotion History for {selectedUser.name}</h2>
          {loading ? (
            <p>Loading emotions...</p>
          ) : emotions.length > 0 ? (
            <div className="emotions-grid">
              {emotions.map((emotion, index) => (
                <div key={index} className={`emotion-card ${emotion.emotion}`}>
                  <h3>{emotion.emotion}</h3>
                  <p>{new Date(emotion.timestamp).toLocaleString()}</p>
                </div>
              ))}
            </div>
          ) : (
            <p>No emotion data available for this user.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default DoctorDashboard;