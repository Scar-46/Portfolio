import { Link } from 'react-scroll';
import './index.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Sun, Moon } from 'lucide-react';
import { faHome, faUser, faBuilding, faEnvelope, faSuitcase, faBars, faClose } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from 'react';

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);
  const [currentSection, setCurrentSection] = useState('home');
  const [darkMode, setDarkMode] = useState(() => {return localStorage.getItem('darkMode') === 'true';});

  useEffect(() => {
    const handleScroll = () => {
      const sectionEls = document.querySelectorAll('section');
      let newSection = 'home';
      sectionEls.forEach((sectionEl) => {
        if (window.scrollY >= sectionEl.offsetTop - 50) {
          newSection = sectionEl.id;
        }
      });
      setCurrentSection(newSection);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle('dark-mode', darkMode);
    localStorage.setItem('darkMode', darkMode);
  }, [darkMode]);

  return (
    <div className="nav-bar">
      <nav className={showNav ? 'mobile-show' : ''}>
      <Link to="home" smooth={true} duration={500} className={`home-link ${currentSection === 'home' ? 'active' : ''}`} onClick={() => setShowNav(false)}>
          <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
        </Link>
        <Link to="about" smooth={true} duration={500} className={`about-link ${currentSection === 'about' ? 'active' : ''}`} onClick={() => setShowNav(false)}>
          <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
        </Link>
        <Link to="experience" smooth={true} duration={500} className={`experience-link ${currentSection === 'experience' ? 'active' : ''}`} onClick={() => setShowNav(false)}>          <FontAwesomeIcon icon={faBuilding} color="#4d4d4e" />
        </Link>
        <Link to="portfolio" smooth={true} duration={500} className={`portfolio-link ${currentSection === 'portfolio' ? 'active' : ''}`} onClick={() => setShowNav(false)}>
          <FontAwesomeIcon icon={faSuitcase} color="#4d4d4e" />
        </Link>
        <Link to="contact" smooth={true} duration={500} className={`contact-link ${currentSection === 'contact' ? 'active' : ''}`} onClick={() => setShowNav(false)}>
          <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
        </Link>
        <FontAwesomeIcon icon={faClose} color="#E35336" size="3x" className="close-button" onClick={() => setShowNav(false)} />
      </nav>
      <FontAwesomeIcon icon={faBars} color="#E35336" size="3x" className="hamburger-button" onClick={() => setShowNav(true)} />

      <button className="theme-toggle" onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? <Sun strokeWidth={1.5} size={25} color="#8D8D8D"/> : <Moon strokeWidth={1.5} size={25} color="#8D8D8D"/>}
      </button>

      <div className="arrow">
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
        </div>
        <p className="Date">Mar 03, 2025</p>

    </div>
  );
};

export default Navbar;
