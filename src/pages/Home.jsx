// src/pages/Home.jsx
import React from 'react';
import heroImg from '../assets/images/hero-section.svg';

const Home = () => {
  return (
    <section className="bg-gray-100 py-20 px-6 text-center">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          Search engine optimisation & <br />
          <strong className="text-blue-600">Marketing.</strong>
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          Simple is a simple template with a creative design that solves all your marketing and SEO queries.
        </p>
        <div className="flex justify-center space-x-4 mb-8">
          <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">Get Started</button>
          <button className="bg-gray-300 text-gray-800 px-6 py-2 rounded hover:bg-gray-400">Learn More</button>
        </div>
        <div className="flex justify-center">
          <img src={heroImg} alt="Illustration" className="w-full max-w-xl" />
        </div>
      </div>
    </section>
  );
};

export default Home;
