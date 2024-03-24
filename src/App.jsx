// App.jsx
import React, { useRef } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import NavBar from './Components/NavBar/NavBar';
import Home from './Components/Home/Home';
import Project from './Components/Projects/Project';
import Footer from './Components/Contact/Footer';

const App = () => {
  const homeRef = useRef(null);
  const projectRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (ref) => {
    window.scrollTo({
      top: ref.current.offsetTop,
      behavior: 'smooth',
    });
  };

  return (
    <Router>
      <div>
        <header>
          <NavBar
            scrollToSection={scrollToSection}
            homeRef={homeRef}
            projectRef={projectRef}
            contactRef={contactRef}
          />
        </header>
        <div ref={homeRef}>
          <Home />
        </div>
        <div ref={projectRef}>
          <Project />
        </div>
        <div ref={contactRef}>
          <Footer />
        </div>
      </div>
    </Router>
  );
};

export default App;