import { Link } from 'react-scroll';
import './index.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faBuilding, faEnvelope, faSuitcase, faBars, faClose } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from 'react';

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);
  const [currentSection, setCurrentSection] = useState('home');
  const [currentDate, setCurrentDate] = useState('');
  const [isAtBottom, setIsAtBottom] = useState(false);


  useEffect(() => {
    const handleScroll = () => {
      const sectionEls = document.querySelectorAll('section');
      let newSection = 'home';
      sectionEls.forEach((sectionEl) => {
        let offsetT = sectionEl.offsetTop;
        if (window.scrollY >= offsetT - 300) {
          newSection = sectionEl.id;
        }
      });
      setCurrentSection(newSection);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const isBottom = window.innerHeight + window.scrollY >= document.body.scrollHeight;
      setIsAtBottom(isBottom);
    };
  
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const formatDate = (date) => {
      const options = { month: 'short', day: '2-digit', year: 'numeric' };
      const formattedDate = date.toLocaleDateString('en-US', options);
      const parts = formattedDate.split(' ');
      return `${parts[0]} ${parts[1].replace(',', '')}, ${parts[2]}`;
    };
  
    setCurrentDate(formatDate(new Date()));
  }, []);

  return (
    <div className="nav-bar">
      <nav className={showNav ? 'mobile-show' : ''}>
        <Link to="home" smooth={true} duration={500} className={`home-link ${currentSection === 'home' ? 'active' : ''}`} onClick={() => setShowNav(false)}>
          <FontAwesomeIcon icon={faHome} color="var(--secondary-color)" />
        </Link>
        <Link to="about" smooth={true} duration={500} offset={showNav ? 0 : -200} className={`about-link ${currentSection === 'about' ? 'active' : ''}`} onClick={() => setShowNav(false)}>
          <FontAwesomeIcon icon={faUser} color="var(--secondary-color)" />
        </Link>
        <Link to="experience" smooth={true} duration={500} className={`experience-link ${currentSection === 'experience' ? 'active' : ''}`} onClick={() => setShowNav(false)}>          
          <FontAwesomeIcon icon={faBuilding} color="var(--secondary-color)" />
        </Link>
        <Link to="projects" smooth={true} duration={500} className={`projects-link ${currentSection === 'projects' ? 'active' : ''}`} onClick={() => setShowNav(false)}>
          <FontAwesomeIcon icon={faSuitcase} color="var(--secondary-color)" />
        </Link>
        <Link to="contact" smooth={true} duration={500} className={`contact-link ${currentSection === 'contact' ? 'active' : ''}`} onClick={() => setShowNav(false)}>
          <FontAwesomeIcon icon={faEnvelope} color="var(--secondary-color)" />
        </Link>
        <FontAwesomeIcon icon={faClose} color="var(--primary-color)" size="3x" className="close-button" onClick={() => setShowNav(false)} />
      </nav>
      <FontAwesomeIcon icon={faBars} color="var(--primary-color)" size="3x" className="hamburger-button" onClick={() => setShowNav(true)} />

  <div className={`arrow ${isAtBottom ? "end-of-page" : ""}`}>
    <div className="line1"></div>
    <div className="line2"></div>
    <div className="line3"></div>
  </div>
      
      <p className="Date">{currentDate}</p>
    </div>
  );
};

export default Navbar;
