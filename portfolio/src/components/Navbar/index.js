import { Link } from 'react-scroll';
import './index.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faBuilding, faEnvelope, faSuitcase, faBars, faClose } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from 'react';

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);
  const [currentSection, setCurrentSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sectionEls = document.querySelectorAll('section');
      let newSection = 'home';
      sectionEls.forEach((sectionEl) => {
        let offsetT = sectionEl.offsetTop;
        if ((window.scrollY) >= offsetT - 300) {
          newSection = sectionEl.id;
        }
      });
      setCurrentSection(newSection);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="nav-bar">
      <nav className={showNav ? 'mobile-show' : ''}>
      <Link to="home" smooth={true} duration={500} className={`home-link ${currentSection === 'home' ? 'active' : ''}`} onClick={() => setShowNav(false)}>
          <FontAwesomeIcon icon={faHome} color="var(--secondary-color)" />
        </Link>
        <Link to="about" smooth={true} duration={500} offset={-200} className={`about-link ${currentSection === 'about' ? 'active' : ''}`} onClick={() => setShowNav(false)}>
          <FontAwesomeIcon icon={faUser} color="var(--secondary-color)" />
        </Link>
        <Link to="experience" smooth={true} duration={500} className={`experience-link ${currentSection === 'experience' ? 'active' : ''}`} onClick={() => setShowNav(false)}>          
        <FontAwesomeIcon icon={faBuilding} color="var(--secondary-color)" />
        </Link>
        <Link to="portfolio" smooth={true} duration={500} offset={-50} className={`portfolio-link ${currentSection === 'portfolio' ? 'active' : ''}`} onClick={() => setShowNav(false)}>
          <FontAwesomeIcon icon={faSuitcase} color="var(--secondary-color)" />
        </Link>
        <Link to="contact" smooth={true} duration={500} className={`contact-link ${currentSection === 'contact' ? 'active' : ''}`} onClick={() => setShowNav(false)}>
          <FontAwesomeIcon icon={faEnvelope} color="var(--secondary-color)" />
        </Link>
        <FontAwesomeIcon icon={faClose} color="var(--primary-color)" size="3x" className="close-button" onClick={() => setShowNav(false)} />
      </nav>
      <FontAwesomeIcon icon={faBars} color="var(--primary-color)" size="3x" className="hamburger-button" onClick={() => setShowNav(true)} />

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
