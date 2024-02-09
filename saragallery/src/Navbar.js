// NavigationBar.jsx

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const NavigationBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`navbar ${isOpen ? 'open' : ''}`}>
      <div className="navbar-container">
    
        <ul className="nav-menu">
          <li className="nav-item">
            <Link
              activeClass="active"
              to="/home"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={handleToggle}
            >
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link
              activeClass="active"
              to="/artist"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={handleToggle}
            >
              Artist
            </Link>
          </li>
          <li className="nav-item">
            <Link
              activeClass="active"
              to="/"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={handleToggle}
            >
              Login
            </Link>
          </li>
         
          <li className="nav-item">
            <Link
              activeClass="active"
              to="/blog"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={handleToggle}
            >
              Blog
            </Link>
          </li>
          <li className="nav-item">
            <Link
              activeClass="active"
              to="/main"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={handleToggle}
            >
              Data
            </Link>
          </li>
          <li className="nav-item">
            <Link
              activeClass="active"
              to="/signup"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={handleToggle}
            >
              Create a Account
            </Link>
          </li>
        </ul>
        <div className={`toggle ${isOpen ? 'open' : ''}`} onClick={handleToggle}>
          <div className="toggle-bar"></div>
          <div className="toggle-bar"></div>
          <div className="toggle-bar"></div>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
