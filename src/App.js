import React from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import FilmSection from './components/FilmSection';
import MerchandiseSection from './components/MerchandiseSection';
import TrailerSection from './components/TrailerSection';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <div className="film-grain"></div>
      <Header />
      <Hero />
      <FilmSection />
      <MerchandiseSection />
      <TrailerSection />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;
