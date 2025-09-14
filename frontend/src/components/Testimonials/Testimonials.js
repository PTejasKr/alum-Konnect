import React from 'react';
import './Testimonials.css';

function Testimonials() {
  return (
    <section className="testimonials">
      <h2>What Our Alumni Say</h2>
      <div className="testimonial-grid">
        <div className="testimonial-item">
          <p>"This platform has been instrumental in helping me reconnect with old friends and build new professional connections. Highly recommended!"</p>
          <h4>- John Doe, Class of 2010</h4>
        </div>
        <div className="testimonial-item">
          <p>"The events organized through this platform are fantastic. I've had the opportunity to network with so many amazing people."</p>
          <h4>- Jane Smith, Class of 2005</h4>
        </div>
        <div className="testimonial-item">
          <p>"I love staying updated with the latest news from my alma mater. This platform makes it so easy to stay connected."</p>
          <h4>- Peter Jones, Class of 2015</h4>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
