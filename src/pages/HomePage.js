import React from 'react';
import { Link } from 'react-router-dom';
import '../HomePage.css';

const HomePage = () => {
  return (
    <div className="homepage-container">
      <div className="content">
        <h1>Welcome to Artisan Platform</h1>
        <div className="buttons">
          <Link to="/login" className="btn login-btn">Login</Link>
          <Link to="/signup" className="btn signup-btn">Sign Up</Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
