import "./FooterStyles.css";

import React from "react";

import {
  FaHome,
  FaPhone,
  FaMailBulk,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome size={23} style={{ color: "#fff", marginRight: "2rem" }} />
            <div>
              <p>Bhubaneswar</p>
              <p>Odisha</p>
            </div>
          </div>
          <div className="phone">
            <h4>
              <FaPhone
                size={23}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              8249465347
            </h4>
          </div>
          <div className="email">
            <h4>
              <FaMailBulk
                size={23}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              abhisek.malla16@gmail.com
            </h4>
          </div>
        </div>

        <div className="right">
          <h4>Hi, I am Abhisek. Welcome to my Protfolio.</h4>
          <div className="social">
            <a
              href="http://www.linkedin.com/in/abhisek-malla-387b19290"
              target="_blank"
              rel="noopener noreferrer"
              title="Visit Abhisek Malla's LinkedIn profile"
            >
              <FaLinkedinIn
                size={35}
                style={{ color: "#0A66C2", marginRight: "3rem" }}
              />
            </a>
            <a
              href="https://github.com/abhisek9898"
              target="_blank"
              rel="noopener noreferrer"
              title="Visit Abhisek Malla's GitHub profile"
            >
              <FaGithub
                size={35}
                style={{ color: "#0A66C2", marginRight: "3rem" }}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
