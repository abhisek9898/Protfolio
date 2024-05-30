import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 100) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeColor);
    return () => {
      window.removeEventListener("scroll", changeColor);
    };
  }, []);

  return (
    <div
      className={`fixed w-full h-[90px] z-10 flex justify-between items-center p-4 transition-colors duration-500 ${
        color ? "bg-black border-b border-gray-800" : ""
      }`}
    >
      <Link to="/">
        <h1 className="text-white text-3xl font-bold">𝓐𝓜</h1>
      </Link>
      <div className="md:hidden">
        {click ? (
          <FaTimes
            size={20}
            className="text-white cursor-pointer"
            onClick={handleClick}
          />
        ) : (
          <FaBars
            size={20}
            className="text-white cursor-pointer"
            onClick={handleClick}
          />
        )}
      </div>
      <ul
        className={`md:flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8 ${
          click
            ? "flex items-center justify-center fixed top-[90px] left-0 w-full h-[calc(100vh-90px)] bg-black bg-opacity-90 transform transition-transform duration-300"
            : "hidden md:flex"
        }`}
      >
        <li>
          <Link
            to="/"
            className="text-white text-lg font-medium block md:inline-block"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            className="text-white text-lg font-medium block md:inline-block"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="/project"
            className="text-white text-lg font-medium block md:inline-block"
          >
            Project
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
