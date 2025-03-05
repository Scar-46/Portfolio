import { Link } from 'react-scroll';
import './index.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Sun, Moon } from 'lucide-react';
import { faHome, faUser, faBuilding, faEnvelope, faSuitcase, faBars, faClose } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from 'react';

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('darkMode') === 'true';
  });

  useEffect(() => {
    document.body.classList.toggle('dark-mode', darkMode);
    localStorage.setItem('darkMode', darkMode);
  }, [darkMode]);

  return (
    <div className="nav-bar">
      <nav className={showNav ? 'mobile-show' : ''}>
        <Link to="home" smooth={true} duration={500} className="about-home"onClick={() => setShowNav(false)}>
          <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
        </Link>
        <Link to="about" smooth={true} duration={500} className="about-link" onClick={() => setShowNav(false)}>
          <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
        </Link>
        <Link to="experience" smooth={true} duration={500} className="experience-link" onClick={() => setShowNav(false)}>
          <FontAwesomeIcon icon={faBuilding} color="#4d4d4e" />
        </Link>
        <Link to="portfolio" smooth={true} duration={500} className="portfolio-link" onClick={() => setShowNav(false)}>
          <FontAwesomeIcon icon={faSuitcase} color="#4d4d4e" />
        </Link>
        <Link to="contact" smooth={true} duration={500} className="contact-link" onClick={() => setShowNav(false)}>
          <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
        </Link>
        <FontAwesomeIcon icon={faClose} color="#E35336" size="3x" className="close-button" onClick={() => setShowNav(false)} />
      </nav>
      <FontAwesomeIcon icon={faBars} color="#E35336" size="3x" className="hamburger-button" onClick={() => setShowNav(true)} />

      <button className="theme-toggle" onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? <Sun strokeWidth={1.5} size={25} color="#8D8D8D"/> : <Moon strokeWidth={1.5} size={25} color="#8D8D8D"/>}
      </button>

      <div className="arrow">
            <div class="line1"></div>
            <div class="line2"></div>
            <div class="line3"></div>
        </div>
        <p className="Date">Mar 03, 2025</p>

    </div>
  );
};

export default Navbar;
