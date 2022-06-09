import React from 'react';
import './App.css';
import About from './components/about/About';
import Experience from './components/experience/Experience';
import Home from './components/home/Home';
import Navigation from './components/navigation/Navigation';
import Portfolio from './components/portfolio/Portfolio';
import Service from './components/skills/Service';

function App() {
  return (
    <>
      <Navigation />
      <Home />
      <About />
      <Experience />
      <Service />
      <Portfolio />
    </>
  );
}

export default App;
