import React from "react";
import IntroImg from "../assets/intro-bg.jpg";
import ResumeDownloadButton from "../components/resume";

const HeroImg = () => {
  return (
    <div className="relative w-full h-[84vh]">
      <div className="relative w-full h-full">
        <img
          className="w-full h-full object-cover"
          src={IntroImg}
          alt="IntroImg"
        />
        <div className="absolute inset-0 bg-black opacity-80"></div>
      </div>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
        <p className="text-xl font-light uppercase">HI, I'M Abhisek</p>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold py-4">
          React Developer
        </h1>
        <div className="mt-4 space-x-4">
          <ResumeDownloadButton />
          {/* <Link to="/project" className="btn">Projects</Link> */}
          {/* <Link to="/contact" className="btn btn-light">Contact</Link> */}
        </div>
      </div>
    </div>
  );
};

export default HeroImg;
