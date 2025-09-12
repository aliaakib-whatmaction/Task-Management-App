import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        {/* Left Section - Logo / Brand Name */}
        <div className="footer-logo">
          <p>Task Management App</p>
        </div>

        {/* Center Section - Navigation Links */}
        <div className="footer-links">
          <ul>
            <li><a href="/about">About</a></li>
          </ul>
        </div>

        {/* Right Section - Copyright */}
        <div className="footer-copy">
          <p>© {new Date().getFullYear()} Task Management App. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
