import React from 'react';
import './Page.css';
import './ResourcesPage.css'; // Specific CSS for ResourcesPage

function ResourcesPage() {
  const resourceListings = [
    {
      id: 1,
      title: 'Alumni Career Development Guide',
      description: 'A comprehensive guide to navigating your career path, including tips on resume building, interview skills, and job search strategies.',
      link: '#',
    },
    {
      id: 2,
      title: 'Networking Best Practices Handbook',
      description: 'Learn how to effectively network with fellow alumni and industry professionals to expand your connections and opportunities.',
      link: '#',
    },
    {
      id: 3,
      title: 'Webinar Library: Professional Development',
      description: 'Access a collection of recorded webinars on various professional development topics, from leadership to digital marketing.',
      link: '#',
    },
    {
      id: 4,
      title: 'Mentorship Program Guidelines',
      description: 'Detailed information about our mentorship program, including roles, responsibilities, and how to get involved as a mentor or mentee.',
      link: '#',
    },
  ];

  return (
    <div className="page-container">
      <h1>Resources for Alumni</h1>
      <p>Access a wealth of resources tailored for our alumni, including career development guides, exclusive articles, and professional development tools. Empower your journey with valuable insights.</p>

      <section className="resource-listings">
        <h2>Available Resources</h2>
        <div className="resource-grid">
          {resourceListings.map(resource => (
            <div key={resource.id} className="resource-item">
              <h3>{resource.title}</h3>
              <p>{resource.description}</p>
              <a href={resource.link} className="btn btn-primary">View Resource</a>
            </div>
          ))}
        </div>
      </section>

      <section className="suggest-resource">
        <h2>Suggest a Resource</h2>
        <p>Do you know of a valuable resource that would benefit our alumni community? Suggest it here!</p>
        <a href="#" className="btn btn-success">Suggest Resource</a>
      </section>
    </div>
  );
}

export default ResourcesPage;