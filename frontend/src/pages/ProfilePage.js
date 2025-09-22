import React from 'react';
import './Page.css';

const ProfilePage = () => {
  return (
    <div className="page-container">
      <h1>My Profile</h1>
      <section className="profile-info">
        <h2>Personal Information</h2>
        <p><strong>Name:</strong> John Doe</p>
        <p><strong>Email:</strong> john.doe@example.com</p>
        <p><strong>Role:</strong> Alumni</p>
        <p><strong>Graduation Year:</strong> 2010</p>
        <button className="btn btn-primary">Edit Profile</button>
      </section>

      <section className="profile-activity">
        <h2>Recent Activity</h2>
        <div className="activity-item">
          <p>Posted a new job opening for Software Engineer.</p>
          <span>2 days ago</span>
        </div>
        <div className="activity-item">
          <p>Attended the Annual Alumni Meetup.</p>
          <span>1 week ago</span>
        </div>
      </section>
    </div>
  );
};

export default ProfilePage;