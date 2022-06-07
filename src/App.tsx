import React from 'react';
import './App.css';
import About from './components/about/About';
import Home from './components/home/Home';
import Navigation from './components/navigation/Navigation';

function App() {
  return (
    <>
    <Navigation />
    <Home />
    <About />
    </>
  );
}

export default App;
