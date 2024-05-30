import React from "react";

const Form = () => {
  return (
    <div className="w-full flex items-center justify-center">
      <form className="flex flex-col p-16 mx-auto max-w-md bg-gray-800 rounded-lg shadow-lg">
        <label className="text-white mb-2">Your Name</label>
        <input
          type="text"
          className="mb-4 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <label className="text-white mb-2">Email</label>
        <input
          type="email"
          className="mb-4 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <label className="text-white mb-2">Mobile</label>
        <input
          type="phone"
          className="mb-4 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <label className="text-white mb-2">Message</label>
        <textarea
          rows="6"
          placeholder="Type your message here."
          className="mb-4 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
