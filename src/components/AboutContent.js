import { Link } from "react-router-dom";
import "./AboutContentStyles.css";
import React from "react";

const AboutContent = () => {
  return (
    <div className="about">
      <div className="left">
        <h1>WHO AM I?</h1>
        <p>
          I'm a passionate front-end developer with a strong enthusiasm for
          creating visually appealing webpages. I have always been fascinated by
          the intersection of design and technology, which led me to pursue a
          career in web development.My Skills, Proficient in HTML, CSS, and
          JavaScript. Familiar with front-end frameworks like React.js.
          Experience in responsive web design and cross-browser compatibility.
          Knowledge of version control systems like Git Eagerness to learn and
          adapt to new technologies
        </p>
        <Link to="/contact">
          <button className="btn">Contact</button>
        </Link>
      </div>
    </div>
  );
};

export default AboutContent;
