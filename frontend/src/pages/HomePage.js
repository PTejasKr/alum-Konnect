import React from 'react';
import './HomePage.css';
import Hero from '../components/Hero/Hero';
import Features from '../components/Features/Features';
import Testimonials from '../components/Testimonials/Testimonials';

const HomePage = () => {
  return (
    <div className="home-page">
      <Hero />
      <Features />
      <Testimonials />
    </div>
  );
};

export default HomePage;