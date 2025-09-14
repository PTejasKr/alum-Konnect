import React from 'react';
import './Page.css';

function AboutUsPage() {
  return (
    <div className="page-container">
      <h1>About AlumConnect</h1>
      <section className="section-intro">
        <p>Welcome to AlumConnect, your dedicated platform for fostering lifelong connections among our esteemed graduates. We believe that the bonds forged during your academic journey should continue to thrive, evolve, and provide mutual benefit long after graduation.</p>
      </section>

      <section className="section-mission">
        <h2>Our Mission</h2>
        <p>Our mission is to create a vibrant, supportive, and engaging community where alumni can reconnect, network, share experiences, and contribute to the success of current students and fellow graduates. We aim to provide a dynamic platform that facilitates professional growth, personal development, and meaningful interactions.</p>
      </section>

      <section className="section-values">
        <h2>Our Values</h2>
        <div className="values-grid">
          <div className="value-item">
            <h3>Connection</h3>
            <p>Building and nurturing strong relationships within our alumni network.</p>
          </div>
          <div className="value-item">
            <h3>Growth</h3>
            <p>Supporting continuous learning, career development, and personal enrichment.</p>
          </div>
          <div className="value-item">
            <h3>Community</h3>
            <p>Fostering a sense of belonging and mutual support among all members.</p>
          </div>
          <div className="value-item">
            <h3>Impact</h3>
            <p>Empowering alumni to make a positive difference in their fields and communities.</p>
          </div>
        </div>
      </section>

      <section className="section-team">
        <h2>Meet the Team</h2>
        <p>Our dedicated team is committed to building and maintaining a platform that serves the diverse needs of our alumni. We are passionate about creating opportunities for connection and growth.</p>
        {/* Placeholder for team members */}
        <div className="team-members">
          <div className="team-member-card">
            <img src="https://via.placeholder.com/150" alt="Team Member 1" />
            <h4>Jane Doe</h4>
            <p>Community Manager</p>
          </div>
          <div className="team-member-card">
            <img src="https://via.placeholder.com/150" alt="Team Member 2" />
            <h4>John Smith</h4>
            <p>Events Coordinator</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutUsPage;