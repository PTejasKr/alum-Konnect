import React from 'react';
import './Page.css';

const NetworkPage = () => {
  return (
    <div className="page-container">
      <h1>Alumni Network</h1>
      <section className="section-intro">
        <p>Connect with fellow alumni, share insights, and expand your professional circle.</p>
      </section>

      <section className="network-updates">
        <h2>Latest Network Updates</h2>
        <div className="update-item">
          <h3>New Mentorship Program Launched!</h3>
          <p>Our new mentorship program is now live. Connect with experienced alumni to guide your career path.</p>
          <a href="#" className="btn btn-primary">Learn More</a>
        </div>
        <div className="update-item">
          <h3>Industry Meetup: Tech & Innovation</h3>
          <p>Join us for an exciting virtual meetup focusing on the latest trends in technology and innovation.</p>
          <a href="#" className="btn btn-primary">Register Now</a>
        </div>
      </section>

      <section className="connect-alumni">
        <h2>Connect with Alumni</h2>
        <p>Find alumni based on their industry, location, or interests.</p>
        <button className="btn btn-primary">Browse Connections</button>
      </section>
    </div>
  );
};

export default NetworkPage;