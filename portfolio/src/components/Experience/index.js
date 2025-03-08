import React, { useEffect, useState } from "react";
import AnimatedLetters from "../AnimatedLetters";
import experiencesData from "../../data/experiences.json";
import "./index.scss";

const Experience = () => {
  const [letterClass, setLetterClass] = useState("text-animate");
  const [hoveredImage, setHoveredImage] = useState(experiencesData[0].image);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="container experience-page">
      <div className="text-zone">
        <h1>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={["E", "x", "p", "e", "r", "i", "e", "n", "c", "e"]}
            idx={15}
          />
        </h1>
      </div>

      <div className="experience-content">
        <div className="experiences">
          {experiencesData.map((exp, index) => (
            <div
              key={index}
              className="experience"
              onMouseEnter={() => setHoveredImage(exp.image)}
            >
              <div className="experience-header">
                <h2 className="title">{exp.title}</h2>
                <h4 className="date">{exp.date}</h4>
              </div>
              <h3 className="company">{exp.company}</h3>
              <ul>
                {exp.responsibilities.map((task, i) => (
                  <li key={i}>{task}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="journey-dots">
            <span className="dot-ex active"></span>
            <span className="dot-ex"></span>
            <span className="dot-ex"></span>
          </div>

        <div className="experience-image">
          <img src={hoveredImage} alt="Experience" />
        </div>
      </div>
    </div>
  );
};

export default Experience;
