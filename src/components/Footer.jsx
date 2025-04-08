// src/components/Footer.jsx
import React from 'react';
import simpleIcon from '../assets/images/simple-icon.svg';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 px-6 py-12">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-7xl mx-auto">
        <div>
          <h4 className="flex items-center text-white text-xl font-bold mb-2">
            <img src={simpleIcon} alt="Simple" className="w-6 h-6 mr-2" />
            Simple
          </h4>
          <p>mikayla_beer@feil.name</p>
          <p>906-179-8309</p>
        </div>
        <div>
          <h4 className="text-white text-lg font-semibold mb-2">Get in Touch</h4>
          <p className="mb-2">Don’t miss any updates of our new templates and extensions.!</p>
          <input type="email" placeholder="Email" className="w-full px-3 py-2 mb-2 rounded text-black" />
          <button className="bg-white text-black px-4 py-2 rounded hover:bg-gray-200">Get Started</button>
        </div>
        <div>
          <h4 className="text-white text-lg font-semibold mb-2">Our Guidelines</h4>
          <ul className="space-y-1">
            <li><a href="#" className="hover:text-white">Terms</a></li>
            <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-white">Cookies Policy</a></li>
            <li><a href="#" className="hover:text-white">Discover</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white text-lg font-semibold mb-2">Our Address</h4>
          <p>518 Schmeler</p>
          <p>Neck Bartlett.</p>
          <p>Illinois</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
