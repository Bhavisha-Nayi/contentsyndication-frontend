import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const LoginPage = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [message, setMessage] = useState('');
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleChange = (e: any) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // Simulate login process and save to localStorage
    if (formData.email && formData.password) {
      localStorage.setItem('user', JSON.stringify(formData));
      localStorage.setItem('authToken', 'exampletoken');
      setIsLoggedIn(true);
      setMessage('Login successful!');
      login();
      setTimeout(() => {
        navigate('/')
      }, 500);
    } else {
      setMessage('Please fill in all fields.');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-sm p-8 space-y-6 bg-white shadow-lg rounded-lg">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-2">Welcome</h1>
          <a href='/' className="mt-2">
          <div className="text-base font-bold text-white bg-gradient-to-r from-blue-500 to-purple-500 opacity-70 rounded-lg hover:opacity-90 w-40 flex items-center justify-center mx-auto">Contentsyndication</div>
          </a>
        </div>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium text-gray-700" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 mt-1 text-gray-700 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-2 mt-1 text-gray-700 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="Enter your password"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 text-white bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg hover:opacity-90"
          >
            LOGIN
          </button>
        </form>
        {message && (
          <p className="text-center text-sm text-green-600 mt-2">{message}</p>
        )}
        {isLoggedIn && (
          <p className="text-center text-sm text-gray-500">
            You are logged in! Welcome.
          </p>
        )}
        <p className="text-center text-sm text-gray-500">
          Don’t have an account? <a href="/signup" className="text-indigo-600 hover:underline">Sign Up</a>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
