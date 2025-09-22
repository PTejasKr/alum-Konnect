import React, { useState } from 'react';
import './Navbar.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar navbar-expand-lg"> {/* Added navbar-expand-lg */}
      <div className="container-fluid"> {/* Added container-fluid for Bootstrap layout */}
        <a className="navbar-brand" href="/">AlumConnect</a>
        <button className="navbar-toggler" type="button" onClick={toggleMenu} aria-controls="navbarNav" aria-expanded={isOpen ? "true" : "false"} aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="navbarNav"> {/* Added collapse and navbar-collapse */}
          <ul className="navbar-nav me-auto mb-2 mb-lg-0"> {/* Added me-auto */}
            <li className="nav-item"><a className="nav-link" href="/">Home</a></li> {/* Added nav-item, nav-link */}
            <li className="nav-item"><a className="nav-link" href="/directory">Directory</a></li>
            <li className="nav-item"><a className="nav-link" href="/network">Network</a></li>
            <li className="nav-item"><a className="nav-link" href="/career">Career</a></li>
            <li className="nav-item"><a className="nav-link" href="/events">Events</a></li>
            <li className="nav-item"><a className="nav-link" href="/profile">Profile</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
