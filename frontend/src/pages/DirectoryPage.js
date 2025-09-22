import React from 'react';
import './Page.css';

const DirectoryPage = () => {
  return (
    <div className="page-container">
      <h1>Alumni Directory</h1>
      <section className="section-intro">
        <p>Search for and connect with fellow alumni. Expand your professional network and find old friends.</p>
      </section>

      <section className="search-section">
        <input type="text" placeholder="Search by name, industry, or graduation year..." className="search-input" />
        <button className="btn btn-primary">Search</button>
      </section>

      <section className="alumni-list">
        <h2>Our Esteemed Alumni</h2>
        <div className="alumni-grid">
          <div className="alumni-item">
            <h3>John Doe</h3>
            <p>Software Engineer at Google</p>
            <p>Class of 2010</p>
          </div>
          <div className="alumni-item">
            <h3>Jane Smith</h3>
            <p>Product Manager at Microsoft</p>
            <p>Class of 2005</p>
          </div>
          <div className="alumni-item">
            <h3>Peter Jones</h3>
            <p>Data Scientist at Amazon</p>
            <p>Class of 2015</p>
          </div>
          <div className="alumni-item">
            <h3>Sarah Lee</h3>
            <p>UX Designer at Apple</p>
            <p>Class of 2012</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DirectoryPage;