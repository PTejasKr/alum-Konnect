import React from 'react';
import './Features.css';

function Features() {
  return (
    <section className="features">
      <h2>Key Features</h2>
      <div className="features-grid">
        <div className="feature-item">
          <h3>Alumni Directory</h3>
          <p>Search for and connect with fellow alumni from our extensive directory.</p>
        </div>
        <div className="feature-item">
          <h3>Events</h3>
          <p>Stay informed about upcoming events, reunions, and networking opportunities.</p>
        </div>
        <div className="feature-item">
          <h3>News & Updates</h3>
          <p>Get the latest news and updates from the alumni association and your fellow graduates.</p>
        </div>
      </div>
    </section>
  );
}

export default Features;
