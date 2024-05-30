import React from "react";
import { Link } from "react-router-dom";

export default function ProjectCard() {
  return (
    <div className="w-full h-[35vh] my-12 flex items-center justify-center flex-wrap">
      <div className="text-center mx-auto p-4 min-w-[350px]">
        <h3 className="text-lg mb-4 text-[#ecbaba] opacity-80">
          Money Manager
        </h3>
        <p className="my-5 flex items-center justify-center">
          A web application that helps you keep track of your expenses.
        </p>
        <Link to="https://money-manager-mocha.vercel.app/">
          <button className="bg-[#079ca9] border-none py-2 px-4 rounded cursor-pointer text-white text-base font-bold mt-4 hover:bg-[#86b9c1]">
            Visit
          </button>
        </Link>
      </div>
      <div className="text-center mx-auto p-4 min-w-[350px]">
        <h3 className="text-lg mb-4 text-[#ecbaba] opacity-80">Weather App</h3>
        <p className="my-5 flex items-center justify-center">
          Get the weather forecast for your city.
        </p>
        <Link to="https://weather-app-theta-bay-28.vercel.app/">
          <button className="bg-[#079ca9] border-none py-2 px-4 rounded cursor-pointer text-white text-base font-bold mt-4 hover:bg-[#86b9c1]">
            Visit
          </button>
        </Link>
      </div>
    </div>
  );
}
