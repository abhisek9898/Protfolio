import { Link } from "react-router-dom";
import React from "react";

const AboutContent = () => {
  return (
    <div className="w-full my-12 flex items-center justify-center flex-wrap h-[35vh]">
      <div className="text-center m-auto p-4 min-w-[350px]">
        <h1 className="text-3xl font-bold mb-4">WHO AM I?</h1>
        <p className="my-6">
          I'm a passionate front-end developer with a strong enthusiasm for
          creating visually appealing webpages. I have always been fascinated by
          the intersection of design and technology, which led me to pursue a
          career in web development. My Skills: Proficient in HTML, CSS, and
          JavaScript. Familiar with front-end frameworks like React.js.
          Experience in responsive web design and cross-browser compatibility.
          Knowledge of version control systems like Git. Eagerness to learn and
          adapt to new technologies.
        </p>
        <Link to="/contact">
          <button className="btn bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300">
            Contact
          </button>
        </Link>
      </div>
    </div>
  );
};

export default AboutContent;
