import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './pages'; // HomePage for unauthenticated users
import LoginPage from './pages/LoginPage'; // LoginPage component
import Dashboard from './pages/Dashboard'; // Dashboard for authenticated users
import NotFoundPage from './pages/NotFoundPage'; // Optional: 404 page

// Simulate an authentication check (replace with your actual auth logic)
const isAuthenticated = () => {
  return !!localStorage.getItem('authToken'); // Example: check for an auth token in local storage
};

const App = () => (
  <Router>
    <Routes>
      {/* Root path ("/") that behaves differently based on authentication */}
      <Route
        path="/"
        element={
          isAuthenticated() ? (
            <Dashboard /> // Show Dashboard if the user is authenticated
          ) : (
            <HomePage /> // Show HomePage if the user is not authenticated
          )
        }
      />

      {/* Public route for the login page */}
      <Route
        path="/sign-in"
        element={
          isAuthenticated() ? (
            <Navigate to="/" replace /> // Redirect to Dashboard if already logged in
          ) : (
            <LoginPage />
          )
        }
      />

      {/* Optional: 404 route */}
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  </Router>
);

export default App;
