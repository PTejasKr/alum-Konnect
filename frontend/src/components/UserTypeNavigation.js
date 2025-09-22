import React from 'react';
import { NavLink } from 'react-router-dom';
import './UserTypeNavigation.css';

const UserTypeNavigation = ({ currentPageType }) => {
  return (
    <div className="user-type-nav">
      <NavLink
        to="/alumni-login"
        className={({ isActive }) =>
          'nav-item ' + (currentPageType === 'alumni' ? 'active' : '')
        }
      >
        As Alumni
      </NavLink>
      <NavLink
        to="/student-login"
        className={({ isActive }) =>
          'nav-item ' + (currentPageType === 'student' ? 'active' : '')
        }
      >
        As Student
      </NavLink>
      <NavLink
        to="/admin-login"
        className={({ isActive }) =>
          'nav-item ' + (currentPageType === 'admin' ? 'active' : '')
        }
      >
        As Admin
      </NavLink>
    </div>
  );
};

export default UserTypeNavigation;
