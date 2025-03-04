import { useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

const Experience = () => {
  const [letterClass] = useState('text-animate')
  
  return (
    <>
      <div className="container experience-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['E', 'x', 'p', 'e', 'r', 'i', 'e', 'n', 'c', 'e']}
              idx={15}
            />
          </h1>
        </div>

        <div className="experience-content">
          <div className="experiences">
            <div className="experience">
              <div className="experience-header">
                <h2 className='title'>Technical Support Specialist</h2>
                <h4 className='date'>Oct 2020 - Dec 2020</h4>
              </div>
              <h3 className='company'>Robert Bosch GmbH</h3>
              <ul>
                <li>Diagnosed and resolved 100+ camera-related technical issues, ensuring 95%+ optimal functionality.</li>
                <li>Provided real-time technical support to 50+ customers via phone, reducing resolution times by 10%</li>
                <li>Received specialized training in CCTV systems, enhancing expertise in security camera troubleshooting.</li>
              </ul>
            </div>
            <div className="experience">
              <div className="experience-header">
                <h2 className='title'>Technical Support Specialist</h2>
                <h4 className='date'>Oct 2020 - Dec 2020</h4>
              </div>
              <h3 className='company'>Robert Bosch GmbH</h3>
              <ul>
                <li>Diagnosed and resolved 100+ camera-related technical issues, ensuring 95%+ optimal functionality.</li>
                <li>Provided real-time technical support to 50+ customers via phone, reducing resolution times by 10%</li>
                <li>Received specialized training in CCTV systems, enhancing expertise in security camera troubleshooting.</li>
              </ul>
            </div>
            <div className="experience">
              <div className="experience-header">
                <h2 className='title'>Technical Support Specialist</h2>
                <h4 className='date'>Oct 2020 - Dec 2020</h4>
              </div>
              <h3 className='company'>Robert Bosch GmbH</h3>
              <ul>
                <li>Diagnosed and resolved 100+ camera-related technical issues, ensuring 95%+ optimal functionality.</li>
                <li>Provided real-time technical support to 50+ customers via phone, reducing resolution times by 10%</li>
                <li>Received specialized training in CCTV systems, enhancing expertise in security camera troubleshooting.</li>
              </ul>
            </div>
          </div>

          <div className="journey-dots">
            <span className="dot-ex active"></span>
            <span className="dot-ex"></span>
            <span className="dot-ex"></span>
          </div>

          <div className="experience-image">
            <img src="your-image-url" alt="Experience" />
          </div>
        </div>
      </div>
      <Loader type="ball-scale-ripple" />
    </>
  )
}

export default Experience
