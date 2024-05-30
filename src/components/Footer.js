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
    <div className="w-full h-[120px] py-0 bg-[rgba(54,51,51,0.8)]">
      <div className="max-w-[1000px] h-[15vh] mx-auto grid grid-cols-1 sm:grid-cols-2 gap-3 px-2 text-sm">
        <div className="flex flex-col p-0">
          <div className="flex items-center mb-1">
            <FaHome size={23} className="text-white mr-4" />
            <div>
              <p className="text-sm text-white">Bhubaneswar</p>
              <p className="text-sm text-white">Odisha</p>
            </div>
          </div>
          <div className="flex items-center mb-3">
            <FaPhone size={23} className="text-white mr-4" />
            <p className="text-sm text-white">8249465347</p>
          </div>
          <div className="flex items-center mt-0 mb-1">
            <FaMailBulk size={23} className="text-white mr-4" />
            <p className="text-sm text-white">abhisek.malla16@gmail.com</p>
          </div>
        </div>

        <div className="flex flex-col justify-center p-4">
          <h4 className="text-1xl mb-4 text-white">
            Hi, I am Abhisek. Welcome to my Portfolio.
          </h4>
          <div className="flex space-x-8">
            <a
              href="http://www.linkedin.com/in/abhisek-malla-387b19290"
              target="_blank"
              rel="noopener noreferrer"
              title="Visit Abhisek Malla's LinkedIn profile"
              className="text-[#0A66C2] hover:text-[#0073b1] transition duration-300"
            >
              <FaLinkedinIn size={35} />
            </a>
            <a
              href="https://github.com/abhisek9898"
              target="_blank"
              rel="noopener noreferrer"
              title="Visit Abhisek Malla's GitHub profile"
              className="text-[#0A66C2] hover:text-gray-400 transition duration-300"
            >
              <FaGithub size={35} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
