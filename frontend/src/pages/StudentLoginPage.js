import React, { useState } from 'react';
import './StudentLoginPage.css';
import UserTypeNavigation from '../components/UserTypeNavigation';

const StudentLoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Student Login functionality not implemented yet.');
    console.log({ email, password });
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <UserTypeNavigation currentPageType="student" />
        <div className="login-header">
          <h1>Student Login</h1>
          <p>Access your student portal!</p>
        </div>
        <div className="login-card">
          <div className="login-card-header">
            <h2>Sign in to your account</h2>
          </div>
          <div className="login-card-content">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  placeholder="your.email@college.edu"
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
              <button type="submit">Sign In</button>
            </form>
            <div className="signup-link">
              <p>Don't have an account? <a href="/student-signup">Sign up</a></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentLoginPage;
