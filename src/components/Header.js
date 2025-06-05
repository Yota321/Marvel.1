import React, { useState } from 'react';
import './Header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      <div className="container header-container">
        <div className="logo-container">
          <h1 className="logo">MARVEL</h1>
          <p className="tagline">by A24</p>
        </div>
        
        <div className={`mobile-menu-btn ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        
        <nav className={`main-nav ${menuOpen ? 'open' : ''}`}>
          <ul>
            <li><a href="#films">Films</a></li>
            <li><a href="#merchandise">Merchandise</a></li>
            <li><a href="#trailers">Trailers</a></li>
            <li><a href="#about">About</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
