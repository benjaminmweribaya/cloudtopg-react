// src/components/Footer.jsx
import React from 'react';
import simpleIcon from '../assets/simple-icon.svg';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 px-4 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Logo and Contact */}
        <div className="space-y-4">
          <h4 className="flex items-center gap-2 text-xl font-semibold">
            <img src={simpleIcon} alt="Simple" className="w-6 h-6" />
            Simple
          </h4>
          <p>mikayla_beer@feil.name</p>
          <p>906-179-8309</p>
        </div>

        {/* Get in Touch */}
        <div className="space-y-4">
          <h4 className="text-xl font-semibold">Get in Touch</h4>
          <p>Don’t miss any updates of our new templates and extensions.!</p>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2">
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-2 rounded-md text-black"
            />
            <button className="bg-white text-black px-4 py-2 rounded-md hover:bg-gray-200 transition">
              Get started
            </button>
          </div>
        </div>

        {/* Guidelines */}
        <div className="space-y-4">
          <h4 className="text-xl font-semibold">Our Guidelines</h4>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">Terms</a></li>
            <li><a href="#" className="hover:underline">Privacy policy</a></li>
            <li><a href="#" className="hover:underline">Cookies Policy</a></li>
            <li><a href="#" className="hover:underline">Discover</a></li>
          </ul>
        </div>

        {/* Address */}
        <div className="space-y-4">
          <h4 className="text-xl font-semibold">Our address</h4>
          <p>518 Schmeler</p>
          <p>Neck Bartlett.</p>
          <p>Illinois</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

