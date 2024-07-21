import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 750);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 750);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleMenu = () => {
    if (isSmallScreen) {
      setIsMenuOpen(!isMenuOpen);
    }
  };

  return (
    <div className={`navbar ${isMenuOpen ? 'navbar-open' : ''}`}>
      <div className="nav-logo">
        <Link to='/'><h1>Portfolio.</h1></Link>
      </div>
      <div className={`nav-menu ${isMenuOpen ? 'open' : ''}`}>
        <div className="nav-close" onClick={toggleMenu}>
          <div className="close-bar">X</div>
        </div>
        <ul>
          <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
          <li><Link to="/about" onClick={toggleMenu}>About</Link></li>
          <li><Link to="/projects" onClick={toggleMenu}>Projects</Link></li>
          <li><Link to="/contact" onClick={toggleMenu}>Contact Me</Link></li>
        </ul>
      </div>
      <div className="nav-hamburger" onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
    </div>
  );
}

export default Navbar;
