import React from 'react';
import './Page.css';
import './JobsPage.css'; // Specific CSS for JobsPage

function JobsPage() {
  const jobListings = [
    {
      id: 1,
      title: 'Software Engineer',
      company: 'Tech Solutions Inc.',
      location: 'New York, NY',
      description: 'Seeking a talented software engineer to join our dynamic team. Experience with React and Node.js preferred.',
      link: '#',
    },
    {
      id: 2,
      title: 'Marketing Intern',
      company: 'Global Marketing Co.',
      location: 'Remote',
      description: 'An exciting opportunity for a marketing intern to gain hands-on experience in digital campaigns and content creation.',
      link: '#',
    },
    {
      id: 3,
      title: 'Data Analyst',
      company: 'Data Insights LLC',
      location: 'San Francisco, CA',
      description: 'We are looking for a data analyst to interpret data, analyze results using statistical techniques and provide ongoing reports.',
      link: '#',
    },
  ];

  return (
    <div className="page-container">
      <h1>Jobs & Internships</h1>
      <p>Explore exclusive job and internship opportunities posted by alumni and partner organizations. Find your next career move or post openings for fellow graduates.</p>

      <section className="job-listings">
        <h2>Current Openings</h2>
        <div className="job-grid">
          {jobListings.map(job => (
            <div key={job.id} className="job-item">
              <h3>{job.title}</h3>
              <p className="job-company">{job.company} - {job.location}</p>
              <p>{job.description}</p>
              <a href={job.link} className="btn btn-primary">Apply Now</a>
            </div>
          ))}
        </div>
      </section>

      <section className="post-job">
        <h2>Post a Job/Internship</h2>
        <p>Are you looking to hire talented alumni? Post your job or internship opportunities here to connect with our skilled graduates.</p>
        <a href="#" className="btn btn-success">Post an Opening</a>
      </section>
    </div>
  );
}

export default JobsPage;