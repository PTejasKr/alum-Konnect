import React from 'react';
import './Page.css';
import './AdminDashboardPage.css'; // Specific CSS for AdminDashboardPage

function AdminDashboardPage() {
  return (
    <div className="page-container">
      <h1>Admin Dashboard</h1>
      <p>This is the administrative control panel. Only authorized personnel can access and manage the alumni platform here.</p>

      <section className="dashboard-overview">
        <h2>Overview</h2>
        <div className="stats-grid">
          <div className="stat-card">
            <h3>Total Alumni</h3>
            <p className="stat-number">1,234</p>
          </div>
          <div className="stat-card">
            <h3>Active Users</h3>
            <p className="stat-number">876</p>
          </div>
          <div className="stat-card">
            <h3>New Registrations (Last 30 Days)</h3>
            <p className="stat-number">56</p>
          </div>
          <div className="stat-card">
            <h3>Upcoming Events</h3>
            <p className="stat-number">12</p>
          </div>
        </div>
      </section>

      <section className="dashboard-actions">
        <h2>Quick Actions</h2>
        <div className="actions-grid">
          <button className="btn btn-primary">Manage Users</button>
          <button className="btn btn-primary">Manage Events</button>
          <button className="btn btn-primary">Manage Job Postings</button>
          <button className="btn btn-primary">View Reports</button>
        </div>
      </section>
    </div>
  );
}

export default AdminDashboardPage;