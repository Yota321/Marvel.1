import React from 'react';
import './TrailerSection.css';

const TrailerSection = () => {
  const trailers = [
    {
      id: 'main',
      title: 'MARVEL by A24 - Official Teaser',
      duration: '2:15'
    },
    {
      id: '1',
      title: 'WAKANDA - Teaser Trailer',
      duration: '1:42'
    },
    {
      id: '2',
      title: 'ODINSON - Official Trailer',
      duration: '2:30'
    }
  ];

  return (
    <section id="trailers" className="section trailer-section">
      <div className="container">
        <h2 className="section-title">Trailers</h2>
        
        <div className="featured-trailer">
          <div className="trailer-thumbnail">
            <img 
              src="/assets/trailers/trailer_thumbnail_main.jpg" 
              alt="Featured trailer thumbnail" 
            />
            <div className="play-button">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 5V19L19 12L8 5Z" fill="currentColor" />
              </svg>
            </div>
          </div>
          <h3 className="trailer-title">MARVEL by A24 - Official Teaser</h3>
        </div>
        
        <div className="trailer-grid">
          {trailers.slice(1).map((trailer) => (
            <div key={trailer.id} className="trailer-card">
              <div className="trailer-thumbnail">
                <img 
                  src={`/assets/trailers/trailer_thumbnail_${trailer.id}.jpg`} 
                  alt={`${trailer.title} thumbnail`} 
                />
                <div className="play-button small">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 5V19L19 12L8 5Z" fill="currentColor" />
                  </svg>
                </div>
                <div className="trailer-duration">{trailer.duration}</div>
              </div>
              <h4 className="trailer-title small">{trailer.title}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrailerSection;
