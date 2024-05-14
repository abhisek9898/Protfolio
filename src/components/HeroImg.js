import "./HeroImgStyles.css"

import React from 'react'

import IntroImg from "../assets/intro-bg.jpg"

import ResumeDownloadButton from '../components/resume'

// import { Link } from "react-router-dom"

const HeroImg = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="into-img" src={IntroImg} alt="IntroImg"/>
      </div>
      <div className="content">
        <p>HI, I'M Abhisek </p>
        <h1> React Devloper </h1>
        <div>
          {/* <Link to="/project" className="btn">Projects</Link> */}
          {/* <Link to="/contact" className="btn-light">Contact</Link> */}
          <ResumeDownloadButton/>
        </div>
      </div>
    </div>
  )
}

export default HeroImg