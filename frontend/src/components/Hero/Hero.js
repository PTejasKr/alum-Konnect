import React from 'react';
import './Hero.css';

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Welcome to Our Alumni Network</h1>
        <p>Reconnect with old friends, expand your professional network, and stay updated on the latest news and events from our alma mater.</p>
        <a href="/directory" className="btn">Explore Alumni Directory</a>
      </div>
    </section>
  );
}

export default Hero;
