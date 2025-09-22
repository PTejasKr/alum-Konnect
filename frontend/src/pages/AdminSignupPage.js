import React, { useState } from 'react';
import './AdminSignupPage.css';
import UserTypeNavigation from '../components/UserTypeNavigation';

const AdminSignupPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    alert('Admin Signup functionality not implemented yet.');
    console.log({ name, email, password });
  };

  return (
    <div className="signup-container">
      <div className="signup-box">
        <UserTypeNavigation currentPageType="admin" />
        <div className="signup-header">
          <h1>Admin Signup</h1>
          <p>Register for an administrator account.</p>
        </div>
        <div className="signup-card">
          <div className="signup-card-header">
            <h2>Create your admin account</h2>
          </div>
          <div className="signup-card-content">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input
                  type="text"
                  id="name"
                  placeholder="Admin Name"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  placeholder="admin.email@company.com"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  placeholder="Enter your password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="confirm-password">Confirm Password</label>
                <input
                  type="password"
                  id="confirm-password"
                  placeholder="Confirm your password"
                  required
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>
              <button type="submit">Sign Up</button>
            </form>
            <div className="login-link">
              <p>Already have an admin account? <a href="/admin-login">Login</a></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminSignupPage;
