import React, { useEffect, useState } from "react";
import { Link } from 'react-scroll';
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import Logo from './Logo'
import './index.scss'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate');
  const nameArray = ['O', 's', 'c', 'a', 'r']
  const jobArray = ['W','e','b',' ','D','e','v','e','l','o','p','e','r','.']

  useEffect(() => {
      const timer = setTimeout(() => {
          setLetterClass('text-animate-hover');
      }, 4000);

      return () => clearTimeout(timer);
  }, []);
  
  
  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className={`${letterClass} _11`}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m</span>&nbsp;

            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={20}
            />
          </h1>
          <h2>Full Stack Developer & Data Engineer</h2>
          <div className="button-zone">
            <Link to="contact" smooth={true} duration={500} className="flat-button">CONTACT ME</Link>
            <a target="_blank" rel='noreferrer' href="https://github.com/Scar-46">
              <FontAwesomeIcon icon={faGithub} size="2x" color="var(--secondary-color)" className="anchor-button"/>
            </a>
            <a target="_blank" rel='noreferrer' href="https://www.linkedin.com/in/oscar-fer-jim/">
              <FontAwesomeIcon icon={faLinkedin} size="2x" color="var(--secondary-color)" className="anchor-button"/>
            </a>
          </div>
        </div>
        <Logo />
      </div>
    </>
  )
}

export default Home
