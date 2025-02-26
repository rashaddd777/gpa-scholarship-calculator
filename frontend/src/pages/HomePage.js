// src/pages/HomePage.js
import React from 'react';
import '../styles/homepage.css'; // Create or update this file for homepage-specific styles

const HomePage = () => {
  return (
    <div className="home-page container my-5">
      <header className="home-page__header text-center mb-4">
        <h1>Welcome to the 4AM Open Source Hub</h1>
        <p className="lead">
          Discover valuable projects created during those early hours—because all our projects were crafted at 4AM (I have sleep problems)!
        </p>
      </header>
    </div>
  );
};

export default HomePage;
