import React from 'react';
import Hero from '../components/Hero/Hero';
import Features from '../components/Features/Features';
import Testimonials from '../components/Testimonials/Testimonials';

function HomePage() {
  return (
    <div>
      <Hero />
      <Features />
      <Testimonials />
    </div>
  );
}

export default HomePage;