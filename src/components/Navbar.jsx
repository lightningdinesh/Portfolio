import React from 'react';
import logo from '../assets/card logo.png';

export const Navbar = () => {
  return (
    <>
      <nav className="bg-white shadow dark:bg-gray-800">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between flex-wrap text-gray-600 capitalize dark:text-gray-300">
          <div className="flex items-center">
            <img
              className="h-20 w-auto object-contain"
              src={logo}
              alt="Logo"
            />
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#home"
              className="text-gray-800 transition-colors duration-300 transform dark:text-gray-200 border-b-2 border-blue-500 mx-1.5 sm:mx-2"
            >
              Home
            </a>
            <a
              href="#myself"
              className="border-b-2 border-transparent hover:text-gray-800 transition-colors duration-300 transform dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-2"
            >
              My self
            </a>
            <a
              href="#skills"
              className="border-b-2 border-transparent hover:text-gray-800 transition-colors duration-300 transform dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-2"
            >
              Skills
            </a>
          
          </div>
          <div>

            <a
              href="#talk"
              className="text-gray-800 transition-colors duration-300 transform dark:text-gray-200 hover:scale-110 mx-1.5 sm:mx-2"
            >
              Let's Talk
            </a>
          </div>
        </div>
      </nav>
    </>

  );
};
