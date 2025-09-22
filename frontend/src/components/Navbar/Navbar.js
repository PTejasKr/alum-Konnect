import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid d-flex justify-content-between align-items-center">
        <NavLink className="navbar-brand" to="/">AlumConnect</NavLink>
        <button className="navbar-toggler" type="button" onClick={toggleMenu} aria-controls="navbarNav" aria-expanded={isOpen ? "true" : "false"} aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="navbarNav">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item"><NavLink className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} to="/">Home</NavLink></li>
            <li className="nav-item"><NavLink className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} to="/directory">Directory</NavLink></li>
            <li className="nav-item"><NavLink className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} to="/network">Network</NavLink></li>
            <li className="nav-item"><NavLink className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} to="/career">Career</NavLink></li>
            <li className="nav-item"><NavLink className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} to="/events">Events</NavLink></li>
            <li className="nav-item"><NavLink className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} to="/profile">Profile</NavLink></li>
          </ul>
          <div className="d-flex">
            <NavLink to="/alumni-login" className="btn btn-primary rounded-pill px-3 py-2 me-2">Login</NavLink>
            <NavLink to="/alumni-signup" className="btn btn-success rounded-pill px-3 py-2">Sign Up</NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
