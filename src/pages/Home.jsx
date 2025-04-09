// src/pages/Home.jsx
import React from 'react';
import heroImg from '../assets/hero-section.svg';
import speedOptimization from '../assets/speed-optimization.svg';
import profitGrowth from '../assets/profit-growth.svg';
import printing from '../assets/printing.svg';
import servicesImg from '../assets/services-image.png';
import businessImg from '../assets/business-image.png';
import path1 from '../assets/path1.svg';
import path2 from '../assets/path2.svg';
import path3 from '../assets/path3.svg';
import path4 from '../assets/path4.svg';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
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

      {/* Features Section */}
      <section className="py-20 px-6 text-center bg-white">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">How does it work</h2>
        <p className="text-lg text-gray-600 mb-10">
          One theme that serves as an easy-to-use operational toolkit that meets customer’s needs.
        </p>
        <div className="grid gap-8 md:grid-cols-3">
          {[
            { img: speedOptimization, title: 'Speed Optimisation' },
            { img: profitGrowth, title: 'Profit Growth' },
            { img: printing, title: 'Printing' }
          ].map((item, idx) => (
            <div key={idx} className="bg-gray-100 p-6 rounded-lg shadow">
              <img src={item.img} alt={item.title} className="mx-auto mb-4 h-32" />
              <h3 className="text-xl font-semibold text-gray-700">{item.title}</h3>
              <p className="text-gray-600 mt-2 mb-4">
                Lorem ipsum dolor sit amet, tincidunt vestibulum. Fusce egeabus consectetur turpis, suspendisse.
              </p>
              <a href="#" className="text-blue-600 hover:underline">Read more</a>
            </div>
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-gray-50 py-20 px-6">
        <div className="flex flex-col md:flex-row items-center max-w-6xl mx-auto">
          <div className="md:w-1/2 mb-10 md:mb-0 md:pr-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              We Offer a Full Range of Digital Marketing Services!
            </h2>
            <p className="text-gray-600 mb-4">
              Lorem ipsum dolor sit amet, tincidunt vestibulum. Fusce egeabus consectetuer turpis, suspendisse.
            </p>
            <a href="#" className="text-blue-600 hover:underline">Read more</a>
          </div>
          <div className="md:w-1/2">
            <img src={servicesImg} alt="Digital Marketing Illustration" />
          </div>
        </div>
      </section>

      {/* Business Solutions Section */}
      <section className="py-20 px-6 bg-white">
        <div className="flex flex-col-reverse md:flex-row items-center max-w-6xl mx-auto">
          <div className="md:w-1/2 mt-10 md:mt-0">
            <img src={businessImg} alt="Digital agency services" />
          </div>
          <div className="md:w-1/2 md:pl-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Leading Digital Agency for Business Solution.
            </h2>
            <p className="text-gray-600 mb-2">
              Power-packed with impressive features and well-optimized, this template is designed to provide the best performance in all circumstances.
            </p>
            <p className="text-gray-600 mb-4">
              Its smart features make it a powerful stand-alone website building tool.
            </p>
            <a href="#" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">Read more</a>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="bg-gray-100 py-20 px-6 text-center">
        <div className="max-w-4xl mx-auto mb-10">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Our case studies</h2>
          <p className="text-gray-600">Lorem ipsum dolor sit amet, tincidunt vestibulum.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {[
            { img: path1, title: 'Online Marketing', desc: 'SEO Marketing', bg: '#06062D' },
            { img: path2, title: 'Web Development', desc: 'Developing, Designing', bg: '#FFA500' },
            { img: path3, title: 'Web Designing', desc: 'Designing, Developing', bg: '#C0B6F8' },
            { img: path4, title: 'Software Development', desc: 'Developing, Designing', bg: '#64D2B5' }
          ].map((caseItem, idx) => (
            <div key={idx} className="bg-white rounded-lg overflow-hidden shadow">
              <div className="p-6" style={{ backgroundColor: caseItem.bg }}>
                <img src={caseItem.img} alt={caseItem.title} className="mx-auto h-24" />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800">{caseItem.title}</h3>
                <p className="text-gray-500">{caseItem.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-6 bg-white text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">What our customers have to say</h2>
        <p className="text-gray-600 mb-10">Lorem ipsum dolor sit amet, tincidunt vestibulum.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            { img: 'https://randomuser.me/api/portraits/men/32.jpg', name: 'Cody Lambert', title: 'Marketing Manager' },
            { img: 'https://randomuser.me/api/portraits/women/44.jpg', name: 'Cody Lambert', title: 'Marketing Manager' },
            { img: 'https://randomuser.me/api/portraits/men/45.jpg', name: 'Cody Lambert', title: 'Marketing Manager' }
          ].map((testimonial, idx) => (
            <div key={idx} className="p-6 bg-gray-50 rounded-lg shadow">
              <img src={testimonial.img} alt={testimonial.name} className="mx-auto mb-4 rounded-full h-20 w-20 object-cover" />
              <p className="text-gray-600 mb-4">
                Lorem ipsum dolor sit amet, tincidunt vestibulum. Fusce eget consectetur turpis, suspendisse.
              </p>
              <h4 className="text-lg font-semibold text-gray-800">{testimonial.name}</h4>
              <span className="text-sm text-gray-500">{testimonial.title}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-blue-600 text-white py-20 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Do you have any projects?</h2>
          <p className="text-lg mb-6">Contact us</p>
          <a href="#" className="bg-white text-blue-600 font-semibold px-6 py-3 rounded hover:bg-gray-100 transition">
            Contact us
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;

