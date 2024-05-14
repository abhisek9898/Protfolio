import React from "react";
import "./ProjectCard.css";
import { Link } from "react-router-dom";

export default function ProjectCard() {
  return (
    <div className="about">
      <div className="left">
        <h3>Money Manager</h3>
        <p>A web application that helps you keep track of your expenses.</p>
        <Link to="https://money-manager-mocha.vercel.app/">
          <button className="btn">Visit</button>
        </Link>
      </div>
      <div className="right">
        <h3>Weather App</h3>
        <p>Get the weather forecast for your city.</p>
        <Link to="https://weather-app-theta-bay-28.vercel.app/">
          <button className="btn">Visit</button>
        </Link>
      </div>
    </div>
  );
}
