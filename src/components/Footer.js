import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <h3 className="logo">MARVEL</h3>
            <p className="tagline">by A24</p>
          </div>
          
          <div className="footer-links">
            <div className="footer-column">
              <h4>Explore</h4>
              <ul>
                <li><a href="#films">Films</a></li>
                <li><a href="#merchandise">Merchandise</a></li>
                <li><a href="#trailers">Trailers</a></li>
                <li><a href="#about">About</a></li>
              </ul>
            </div>
            
            <div className="footer-column">
              <h4>Connect</h4>
              <ul>
                <li><a href="#instagram">Instagram</a></li>
                <li><a href="#twitter">Twitter</a></li>
                <li><a href="#youtube">YouTube</a></li>
                <li><a href="#facebook">Facebook</a></li>
              </ul>
            </div>
            
            <div className="footer-column">
              <h4>Legal</h4>
              <ul>
                <li><a href="#privacy">Privacy Policy</a></li>
                <li><a href="#terms">Terms of Use</a></li>
                <li><a href="#cookies">Cookie Policy</a></li>
                <li><a href="#accessibility">Accessibility</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p className="copyright">© {new Date().getFullYear()} Marvel by A24. All rights reserved.</p>
          <p className="address">123 Cinema Lane, Studio City, CA 90210</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
