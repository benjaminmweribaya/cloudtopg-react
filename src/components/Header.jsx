import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import logo from '../assets/cloudtop-logo.jpeg';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../AuthContext';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleLogout = () => {
    logout();
    navigate('/login'); // redirect after logout
  };

  return (
    <header className="w-full bg-white shadow-md px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img src={logo} alt="Cloudtop G" className="h-10 w-auto" />
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-6 text-gray-700 font-medium">
          <Link to="/" className="text-blue-600 border-b-2 border-blue-600 pb-1">Home</Link>
          <a href="#" className="hover:text-blue-600 transition">About</a>
          <a href="#" className="hover:text-blue-600 transition">Services</a>
          <a href="#" className="hover:text-blue-600 transition">Contact</a>
        </nav>

        {/* Auth Buttons */}
        <div className="hidden md:flex space-x-3">
          {user ? (
            <button
              onClick={handleLogout}
              className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition"
            >
              Logout
            </button>
          ) : (
            <>
              <Link to="/signup" className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
                Get started
              </Link>
              <Link to="/login" className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-100 transition">
                Log in
              </Link>
            </>
          )}
        </div>

        {/* Hamburger Icon */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-700 focus:outline-none">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 space-y-4 text-center text-gray-700 font-medium">
          <Link to="/" className="block text-blue-600">Home</Link>
          <a href="#" className="block hover:text-blue-600">About</a>
          <a href="#" className="block hover:text-blue-600">Services</a>
          <a href="#" className="block hover:text-blue-600">Contact</a>
          <div className="flex flex-col items-center gap-2 mt-4">
            {user ? (
              <button
                onClick={handleLogout}
                className="w-4/5 px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition"
              >
                Logout
              </button>
            ) : (
              <>
                <Link to="/signup" className="w-4/5 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
                  Get started
                </Link>
                <Link to="/login" className="w-4/5 px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-100 transition">
                  Log in
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;


