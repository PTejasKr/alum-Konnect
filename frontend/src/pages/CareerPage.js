import React from 'react';
import './Page.css';

const CareerPage = () => {
  return (
    <div className="page-container">
      <h1>Career Opportunities</h1>
      <section className="section-intro">
        <p>Explore job listings, access career resources, and find mentorship opportunities to advance your professional journey.</p>
      </section>

      <section className="job-listings">
        <h2>Featured Job Listings</h2>
        <div className="job-grid">
          <div className="job-item">
            <h3>Senior Software Engineer</h3>
            <p className="job-company">Tech Solutions Inc.</p>
            <p>Developing scalable software solutions for enterprise clients.</p>
            <a href="#" className="btn btn-primary">Apply Now</a>
          </div>
          <div className="job-item">
            <h3>Marketing Specialist</h3>
            <p className="job-company">Global Marketing Co.</p>
            <p>Executing digital marketing campaigns and analyzing market trends.</p>
            <a href="#" className="btn btn-primary">Apply Now</a>
          </div>
        </div>
      </section>

      <section className="career-resources">
        <h2>Career Resources</h2>
        <div className="resource-grid">
          <div className="resource-item">
            <h3>Resume Building Guide</h3>
            <p>Tips and tricks to create a compelling resume that stands out.</p>
            <a href="#" className="btn btn-primary">Download Guide</a>
          </div>
          <div className="resource-item">
            <h3>Interview Preparation</h3>
            <p>Prepare for your next interview with our comprehensive guide and mock interviews.</p>
            <a href="#" className="btn btn-primary">Learn More</a>
          </div>
        </div>
      </section>

      <section className="mentorship-opportunities">
        <h2>Mentorship Opportunities</h2>
        <p>Connect with experienced alumni who can provide guidance and support in your career.</p>
        <button className="btn btn-primary">Find a Mentor</button>
      </section>
    </div>
  );
};

export default CareerPage;