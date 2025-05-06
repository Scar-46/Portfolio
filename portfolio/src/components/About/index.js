import React, { useEffect, useState } from "react";
import { faPython, faAngular, faCss3Alt, faGitAlt, faHtml5, faJsSquare, faReact, faDocker } from '@fortawesome/free-brands-svg-icons'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate');

  useEffect(() => {
      const timer = setTimeout(() => {
          setLetterClass('text-animate-hover');
      }, 4000);

      return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p align="LEFT">
            I'm a highly motivated Computer Science graduate looking for a role in an established company, 
            where I can work with the latest technologies on challenging and diverse projects. With expertise in Python, 
            C++, and C#, I aim to bring innovative solutions and contribute to the success of the team.
          </p>
          <p align="LEFT">
            I am naturally curious and always eager to improve, approaching each challenge as an opportunity to expand my knowledge.
            Whether working on front-end, back-end, or full-stack development, I strive to build efficient, 
            high-quality solutions while collaborating effectively in Agile environments.
          </p>
          <p align="LEFT">
            I believe that teamwork, adaptability, and a willingness to learn are key to success in any role. 
            My goal is to contribute to a dynamic team where I can leverage my skills while gaining new insights from experienced professionals.
          </p>
        </div>

        <div className="skills">
            <div className="skill">
              <FontAwesomeIcon icon={faPython} color="#FFD43B" />
              <p className="skill-name">Python</p>
            </div>
            <div className="skill">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
              <p className="skill-name">HTML5</p>
            </div>
            <div className="skill">
              <FontAwesomeIcon icon={faCss3Alt} color="#039BE5" />
              <p className="skill-name">CSS3</p>
            </div>
            <div className="skill">
              <FontAwesomeIcon icon={faReact} color="#61DBFB" />
              <p className="skill-name">React</p>
            </div>
            <div className="skill">
              <FontAwesomeIcon icon={faAngular} color="#DD0031" />
              <p className="skill-name">Angular</p>
            </div>
            <div className="skill">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
              <p className="skill-name">JavaScript</p>
            </div>
            <div className="skill">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
              <p className="skill-name">Git</p>
            </div>
            <div className="skill">
              <FontAwesomeIcon icon={faDocker} color="#0db7ed" />
              <p className="skill-name">Docker</p>
            </div>
        </div>
      </div>
    </>
  )
}

export default About
