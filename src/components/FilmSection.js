import React from 'react';
import './FilmSection.css';

const FilmSection = () => {
  const films = [
    {
      id: 'time',
      title: 'TIME',
      tagline: 'Every moment matters',
      director: 'Directed by Sofia Coppola'
    },
    {
      id: 'wakanda',
      title: 'WAKANDA',
      tagline: 'A place remembered. A king reborn.',
      director: 'Directed by Barry Jenkins'
    },
    {
      id: 'peter',
      title: 'PETER',
      tagline: 'How many versions of you are real?',
      director: 'Directed by Ari Aster'
    },
    {
      id: 'odinson',
      title: 'ODINSON',
      tagline: 'Gods cry too.',
      director: 'Directed by Yorgos Lanthimos'
    },
    {
      id: 'wanda',
      title: 'WANDA',
      tagline: 'Reality is what you make it',
      director: 'Directed by Robert Eggers'
    }
  ];

  return (
    <section id="films" className="section films-section">
      <div className="container">
        <h2 className="section-title">Films</h2>
        <div className="films-grid">
          {films.map((film) => (
            <div key={film.id} className="film-card">
              <div className="film-poster">
                <img 
                  src={`/assets/posters/poster_${film.id}.jpg`} 
                  alt={`${film.title} poster`} 
                  className="poster-image"
                />
              </div>
              <div className="film-info">
                <h3 className="film-title">{film.title}</h3>
                <p className="film-tagline">{film.tagline}</p>
                <p className="film-director">{film.director}</p>
                <a href={`#${film.id}`} className="btn">Details</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FilmSection;
