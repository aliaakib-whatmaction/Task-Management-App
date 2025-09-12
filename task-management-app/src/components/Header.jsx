import React from 'react';
import '../styles/Header.css';

const Header = () => {
  return (
    <header>
      <nav>
        {/* Logo Section */}
        <div className="logo">
          <p>Task Management App</p>
        </div>

        {/* Navigation Links */}
        <div className="nav-links">
          <ul>
            <li>
              <a href="/">Tasks</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
