import './App.css';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Experience from './components/experience/Experience';
import Home from './components/home/Home';
import Navigation from './components/navigation/Navigation';
import Portfolio from './components/portfolio/Portfolio';
import ScrollToTopButton from './components/scrollToTopButton/ScrollToTopButton';
import Service from './components/skills/Service';
import Testimonial from './components/testimonials/Testimonial';

function App() {
  return (
    <>
      <Navigation />
      <ScrollToTopButton />
      <Home />
      <About />
      <Experience />
      <Service />
      <Portfolio />
      <Testimonial />
      <Contact />
    </>
  );
}

export default App;
