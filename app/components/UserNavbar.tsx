"use client"; 

import React, { useState } from "react";

interface UserNavbarProps {
  username: string; 
}

const UserNavbar: React.FC<UserNavbarProps> = ({}) => {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-gradient-to-r from-red-700 to-black text-white shadow-md relative">
      <div className="text-2xl font-bold">Welcome</div>

      <div className="flex space-x-6 text-sm font-medium">
        <a href="/" className="hover:text-yellow-400 transition duration-300">
          Home
        </a>
        <a href="/news" className="hover:text-yellow-400 transition duration-300">
          News Page
        </a>
        <a href="/united-store" className="hover:text-yellow-400 transition duration-300">
          United Store
        </a>

        <div className="relative">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault(); 
              toggleDropdown();
            }}
            className="hover:text-yellow-400 cursor-pointer transition duration-300"
          >
            Sign In
          </a>
          {showDropdown && (
            <div className="absolute right-0 mt-2 w-40 bg-red-800 text-white rounded shadow-lg z-10">
              <a
                href="/login"
                className="block px-4 py-2 hover:bg-red-600 hover:text-yellow-300 rounded-t-md transition duration-300"
              >
                Log In
              </a>
              <a
                href="/register"
                className="block px-4 py-2 hover:bg-red-600 hover:text-yellow-300 rounded-b-md transition duration-300"
              >
                Sign Up
              </a>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default UserNavbar;