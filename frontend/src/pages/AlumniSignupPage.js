import React, { useState } from 'react';
import './AlumniSignupPage.css';
import UserTypeNavigation from '../components/UserTypeNavigation';

const AlumniSignupPage = () => {
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
    alert('Alumni Signup functionality not implemented yet.');
    console.log({ name, email, password });
  };

  return (
    <div className="signup-container">
      <div className="signup-box">
        <UserTypeNavigation currentPageType="alumni" />
        <div className="signup-header">
          <h1>Alumni Signup</h1>
          <p>Join our network of esteemed alumni!</p>
        </div>
        <div className="signup-card">
          <div className="signup-card-header">
            <h2>Create your account</h2>
          </div>
          <div className="signup-card-content">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input
                  type="text"
                  id="name"
                  placeholder="John Doe"
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
                  placeholder="your.email@company.com"
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
              <p>Already have an account? <a href="/alumni-login">Login</a></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlumniSignupPage;
