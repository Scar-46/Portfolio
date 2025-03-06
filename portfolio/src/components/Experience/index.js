import React, { useEffect, useState } from "react";
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

const Experience = () => {
  const [letterClass, setLetterClass] = useState('text-animate');

  useEffect(() => {
      const timer = setTimeout(() => {
          setLetterClass('text-animate-hover');
      }, 4000);

      return () => clearTimeout(timer);
  }, []);
  
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
                <h2 className='title'>Data Analist - Community Service</h2>
                <h4 className='date'>Nov 2023 - Nov 2024</h4>
              </div>
              <h3 className='company'>Universidad de Costa Rica</h3>
              <ul>
                <li>Processed student performance data to assess lesson effectiveness.</li>
                <li>Developed data-driven materials, increasing engagement by 25%.</li>
                <li>Used statistical analysis and visualization to identify trends.</li>
              </ul>
            </div>
            <div className="experience">
              <div className="experience-header">
                <h2 className='title'>Technical Support Specialist - Intership</h2>
                <h4 className='date'>Oct 2020 - Dec 2020</h4>
              </div>
              <h3 className='company'>Robert Bosch GmbH</h3>
              <ul>
                <li>Diagnosed and resolved 100+ camera-related technical issues, ensuring 95%+ optimal functionality.</li>
                <li>Provided real-time technical support to 50+ customers via phone, reducing resolution times by 10%.</li>
                <li>Received specialized training in CCTV systems, enhancing expertise in security camera troubleshooting.</li>
              </ul>
            </div>
            <div className="experience">
              <div className="experience-header">
                <h2 className='title'>Technical Support Specialist - Intership</h2>
                <h4 className='date'>Sep 2019 - Oct 2019</h4>
              </div>
              <h3 className='company'>Servicios Ecológicos M.B.B. S.A </h3>
              <ul>
                <li>Developed and maintained relational and non-relational databases, improving data accessibility.</li>
                <li>Performed system maintenance and optimization, enhancing overall computer performance.</li>
                <li>Designed and implemented network topologies to improve communication and efficiency.</li>
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
    </>
  )
}

export default Experience
