import { useState } from 'react'
import { Link } from 'react-router-dom'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import Logo from './Logo'
import './index.scss'

const Home = () => {
  const [letterClass] = useState('text-animate')

  const nameArray = ['O', 's', 'c', 'a', 'r']
  const jobArray = ['W','e','b',' ','D','e','v','e','l','o','p','e','r','.']
  
  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className={letterClass}>H</span>
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
              idx={22}
            />
          </h1>
          <h2>Full Stack Developer & Data Analyst</h2>
          <div className="button-zone">
            <Link to="/contact" className="flat-button">CONTACT ME</Link>
            <a target="_blank" rel='noreferrer' href="https://github.com/Scar-46">
              <FontAwesomeIcon icon={faGithub} size="2x" color="#4d4d4e" className="anchor-button"/>
            </a>
            <a target="_blank" rel='noreferrer' href="https://www.linkedin.com/in/oscar-fer-jim/">
              <FontAwesomeIcon icon={faLinkedin} size="2x" color="#4d4d4e" className="anchor-button"/>
            </a>
          </div>
        </div>
        <Logo />
      </div>

      <Loader type="ball-scale-ripple" />
    </>
  )
}

export default Home
