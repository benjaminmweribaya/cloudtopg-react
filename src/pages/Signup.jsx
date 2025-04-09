import React from 'react';
import signupImage from '../assets/Signup-Login.png'; // Adjust path if necessary
import { Link } from 'react-router-dom'; // Optional, if you're using React Router

const Signup = () => {
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

          <form className="space-y-5">
            <div>
              <label htmlFor="fullname" className="block text-sm font-medium text-gray-700">
                Full Name
              </label>
              <input
                type="text"
                id="fullname"
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

