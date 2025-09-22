import React, { useState } from 'react';
import './AlumniLoginPage.css';
import UserTypeNavigation from '../components/UserTypeNavigation';

const AlumniLoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const validateForm = () => {
    let isValid = true;
    setEmailError('');
    setPasswordError('');

    if (!email) {
      setEmailError('Email is required.');
      isValid = false;
    } else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
      setEmailError('Invalid email format.');
      isValid = false;
    }

    if (!password) {
      setPasswordError('Password is required.');
      isValid = false;
    } else if (password.length < 6) {
      setPasswordError('Password must be at least 6 characters long.');
      isValid = false;
    }

    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      alert('Alumni Login functionality not implemented yet.');
      console.log({ email, password });
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <UserTypeNavigation currentPageType="alumni" />
        <div className="login-header">
          <h1>Alumni Login</h1>
          <p>Welcome back, esteemed alumnus!</p>
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
                  placeholder="your.email@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                {emailError && <p className="error-message">{emailError}</p>}
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                {passwordError && <p className="error-message">{passwordError}</p>}
              </div>
              <button type="submit">Sign In</button>
            </form>
            <div className="signup-link">
              <p>Don't have an account? <a href="/alumni-signup">Sign up</a></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlumniLoginPage;
