import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const SignUpPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [message, setMessage] = useState('');
  const navigate = useNavigate();
  const { login } = useAuth();

  // Handle form input changes
  const handleChange = (e : any) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e : any) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.password) {
      // Simulate storing user data (replace with actual sign-up logic)
      localStorage.setItem('user', JSON.stringify(formData));
      localStorage.setItem('authToken', 'exampleToken')
      setMessage('Sign up successful! You can now log in.');
      login();
      setTimeout(() => {
          navigate('/')
      }, 500);
    } else {
      setMessage('Please fill in all the fields.');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-sm p-8 space-y-6 bg-white shadow-lg rounded-lg">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-2">Create Account</h1>
          <a href='/' className="mt-2">
          <div className="text-base font-bold text-white bg-gradient-to-r from-blue-500 to-purple-500 opacity-70 rounded-lg hover:opacity-90 w-40 flex items-center justify-center mx-auto">Contentsyndication</div>
          </a>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 mt-1 text-gray-700 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="Enter your name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
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
              name="password"
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
            SIGN UP
          </button>
        </form>
        {message && <p className="text-center text-sm text-green-500 mt-4">{message}</p>}
        <p className="text-center text-sm text-gray-500">
          Already have an account? <a href="/signin" className="text-indigo-600 hover:underline">Sign In</a>
        </p>
      </div>
    </div>
  );
};

export default SignUpPage;
