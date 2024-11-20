import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const authToken = localStorage.getItem('authToken');
    if (!authToken) {
      navigate('/signin'); // Redirect if no auth token is found
    }
  }, [navigate]);

  return (
    <div className={`overflow-hidden overflow-y-auto bg-body w-fit`}>
      Dashboard
    </div>
  );
};

export default Dashboard;
