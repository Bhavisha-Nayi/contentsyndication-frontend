import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './pages';
import LoginPage from './pages/LoginPage';
import Dashboard from './pages/Dashboard';
import NotFoundPage from './pages/NotFoundPage';
import SignUpPage from './pages/SignUp';
import { AuthProvider, useAuth } from './context/AuthContext'; // Adjust path as needed
import Services from './pages/Services';
import ServiceDetailPage from './pages/Services/ServiceDetailPage';
import { SidebarDemo } from './components/elements/sidebardemo';
// import { SidebarDemo } from './components/elements/sidebardemo';

const AppRoutes = () => {
  const { isAuthenticated } = useAuth();

  return (
    <Routes>
      <Route path="/" element={isAuthenticated ? <SidebarDemo /> : <HomePage />} />
      <Route path="/signin" element={isAuthenticated ? <Navigate to="/" replace /> : <LoginPage />} />
      <Route path="/signup" element={isAuthenticated ? <Navigate to="/" replace /> : <SignUpPage />} />
      
      {/* Public routes only accessible if not authenticated */}
      {!isAuthenticated && (
        <>
          <Route path="/services" element={<Services />} />
          <Route path="/services/:servicedetail" element={<ServiceDetailPage />} />
        </>
      )}
      
      {/* Redirect any authenticated user trying to access public pages */}
      {isAuthenticated && (
        <>
          <Route path="/services/*" element={<Navigate to="/" replace />} />
        </>
      )}

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

const App = () => (
  <AuthProvider>
    <Router>
      <AppRoutes />
    </Router>
  </AuthProvider>
);

export default App;
