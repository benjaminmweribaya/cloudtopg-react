// src/components/Header.jsx
import React from 'react';
import logo from '../assets/images/cloudtop-logo.jpeg';

const Header = () => {
  return (
    <header className="flex items-center justify-between px-6 py-4 shadow-md bg-white">
      <div className="w-24">
        <img src={logo} alt="Cloudtop G" className="w-full h-auto" />
      </div>
      <nav>
        <ul className="flex space-x-6 text-gray-700 font-semibold">
          <li><a href="#" className="text-blue-600 underline">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
      <div className="space-x-4">
        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Get Started</button>
        <button className="border border-blue-600 text-blue-600 px-4 py-2 rounded hover:bg-blue-50">Log Out</button>
      </div>
    </header>
  );
};

export default Header;
