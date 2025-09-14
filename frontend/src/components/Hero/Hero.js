import React from 'react';
import './Hero.css';

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Connecting Alumni, Building Community</h1>
        <p>Join our network to reconnect with old friends, expand your professional network, and stay updated on the latest news and events.</p>
        <a href="/register" className="btn btn-primary">Join Now</a>
      </div>
    </section>
  );
}

export default Hero;
