import React from 'react';
import { Link } from 'react-router-dom'; // If using React Router
import './styles.css';

const Signup = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle signup logic here
  };

  return (
    <div className="container">
      <div className="left">
        <img src="images/Signup-Login.png" alt="Signup" />
      </div>
      <div className="right">
        <h2>User registration</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="fullname">Full Name</label>
          <input type="text" id="fullname" placeholder="Enter your full name" required />

          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="Enter your email" required />

          <label htmlFor="password">Password</label>
          <input type="password" id="password" placeholder="Enter your password" required />

          <button type="submit">Sign Up</button>
        </form>
        <p>
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
