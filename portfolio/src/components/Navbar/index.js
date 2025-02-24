import { NavLink } from 'react-router-dom'
import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUser, faEnvelope, faSuitcase, faBars, faClose } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { useState } from 'react'

const Navbar = () => {
  const [showNav, setShowNav] = useState(false)
  return (
    <div className='nav-bar'>
        <nav className={showNav ? 'mobile-show' : ''}>
            <NavLink exact="true" activeclassname="active" to="/" onClick={() => setShowNav(false)}>
                <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="about-link" to="/about" onClick={() => setShowNav(false)}>
                <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact" onClick={() => setShowNav(false)}>
                <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="portfolio-link" to="/portfolio" onClick={() => setShowNav(false)}>
                <FontAwesomeIcon icon={faSuitcase} color="#4d4d4e" />
            </NavLink>
            <FontAwesomeIcon icon={faClose} color="#E35336" size="3x" className='close-button' onClick={() => setShowNav(false)}/>
        </nav>
        <ul>
            <li>
                <a target="_blank" rel='noreferrer' href="https://www.linkedin.com/in/oscar-fer-jim/">
                <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
                </a>
            </li>
            <li>
                <a target="_blank" rel='noreferrer' href="https://github.com/Scar-46">
                <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
                </a>
            </li>
        </ul>
        <FontAwesomeIcon icon={faBars} color="#E35336" size='3x' className='hamburger-button' onClick={() => setShowNav(true)}/>

    </div>
  )
}

export default Navbar