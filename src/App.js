import React from 'react';
import './App.css';
import Navigation from './components/Navigation';
import Caroussel from './components/Caroussel';
import ServicesCards from './components/ServicesCards';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Caroussel />
      <ServicesCards />
      <Contact/>
      <Footer />
    </div>
  );
}

export default App;
