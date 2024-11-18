import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Dashboard = () => {
  const navigate = useNavigate();
  const { isAuthenticated, logout } = useAuth(); // Include logout from context

  const handleLogout = () => {
    if (isAuthenticated) {
      logout(); // Update auth context
      navigate('/signin'); // Redirect to the sign-in page after logging out
    }
  };

  useEffect(() => {
    const authToken = localStorage.getItem('authToken');
    if (!authToken) {
      navigate('/signin'); // Redirect if no auth token is found
    }
  }, [navigate]);

  return (
    <div>
      Dashboard Content
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Dashboard;
