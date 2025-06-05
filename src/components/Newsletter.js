import React from 'react';
import './Newsletter.css';

const Newsletter = () => {
  return (
    <section id="newsletter" className="section newsletter-section">
      <div className="container">
        <div className="newsletter-content">
          <h2 className="section-title">Stay Connected</h2>
          <p className="newsletter-description">
            Subscribe to receive exclusive updates, behind-the-scenes content, and early access to trailers and merchandise.
          </p>
          <form className="newsletter-form">
            <div className="form-group">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="newsletter-input" 
                required 
              />
              <button type="submit" className="btn btn-primary">Subscribe</button>
            </div>
            <div className="form-consent">
              <input type="checkbox" id="consent" required />
              <label htmlFor="consent">
                I agree to receive emails about Marvel by A24 releases and updates
              </label>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
