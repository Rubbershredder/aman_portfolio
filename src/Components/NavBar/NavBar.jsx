// NavBar.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const NavBar = ({ scrollToSection, homeRef, projectRef, contactRef }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    const body = document.body;
    if (!isDarkMode) {
      body.style.backgroundColor = 'black';
    } else {
      body.style.backgroundColor = 'whitesmoke';
    }
  }, [isDarkMode]);

  return (
    <div className="text-center text-2xl">
      <nav>
        <span className="material-symbols-rounded cursor-pointer">taunt</span>
        <Link to="/" onClick={() => scrollToSection(homeRef)}>
          Aman Muleva
        </Link>
        <ul className="flex flex-wrap justify-center gap-10 relative mt-0">
          <li>
            <Link to="/" onClick={() => scrollToSection(homeRef)}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/projects" onClick={() => scrollToSection(projectRef)}>
              Projects
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={() => scrollToSection(contactRef)}>
              Contact Me
            </Link>
          </li>
          <li>
            <span
              className="material-symbols-rounded cursor-pointer"
              onClick={toggleDarkMode}
            >
              {isDarkMode ? 'dark_mode' : 'light_mode'}
            </span>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;