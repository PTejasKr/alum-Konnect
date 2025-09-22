import React from 'react';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="home-page">
      <section className="hero-section">
        <h1>Welcome to AlumConnect</h1>
        <p>The best place for alumni and students to connect, network, and grow.</p>
        <a href="/directory" className="btn">Browse Directory</a>
      </section>
    </div>
  );
};

export default HomePage;