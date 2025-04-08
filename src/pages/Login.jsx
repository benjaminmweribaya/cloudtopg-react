import React from 'react';
import { Link } from 'react-router-dom'; // If using React Router
import './styles.css';

const Login = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
  };

  return (
    <div className="container">
      <div className="left">
        <img src="images/Signup-Login.png" alt="Login" />
      </div>
      <div className="right">
        <h2>Welcome Back</h2>
        <p>Login to continue</p>
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="Enter your email" required />

          <label htmlFor="password">Password</label>
          <input type="password" id="password" placeholder="Enter your password" required />

          <button type="submit">Login</button>
        </form>
        <p>
          Don&apos;t have an account? <Link to="/signup">Sign up</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
