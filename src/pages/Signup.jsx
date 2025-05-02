import React, { useState } from 'react';
import signupImage from '../assets/Signup-Login.png';
import { Link, useNavigate } from 'react-router-dom';

const Signup = () => {
  // ✅ State for form fields
  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // ✅ For redirecting to login page

  // ✅ Handles form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://cloudtopg-auth-api-service.onrender.com/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ fullname, email, password }),
      });

      if (!response.ok) {
        throw new Error('Signup failed. Please try again.');
      }

      // ✅ Notify user and redirect to login
      alert('Signup successful! Please login.');
      navigate('/login');
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      {/* Left image section */}
      <div className="hidden md:flex md:w-1/2 justify-center items-center bg-gray-100 p-6">
        <img src={signupImage} alt="Signup Illustration" className="max-w-full h-auto" />
      </div>

      {/* Right form section */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center px-8 py-12">
        <div className="max-w-md w-full">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">User Registration</h2>

          <form className="space-y-5" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="fullname" className="block text-sm font-medium text-gray-700">
                Full Name
              </label>
              <input
                type="text"
                id="fullname"
                value={fullname}
                onChange={(e) => setFullname(e.target.value)}
                placeholder="Enter your full name"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <button
              type="submit"
              className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
            >
              Sign Up
            </button>
          </form>

          <p className="mt-4 text-sm text-center text-gray-600">
            Already have an account?{' '}
            <Link to="/login" className="text-blue-600 hover:underline">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;

