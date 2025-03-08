import React from 'react';
import { FaInstagram, FaYoutube, FaTwitter, FaSpotify } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-white border-t-4 border-none py-6 text-purple-700 font-sans">
      <div className="flex justify-around items-center flex-wrap max-w-4xl mx-auto">
        <div className="flex flex-col items-center">
          <img src="img/logo.png" alt="Sunset di Kebun Logo" className="w-36 h-auto" />
          <div className="flex mt-2">
            <FaInstagram className="text-3xl text-third" />
            <FaYoutube className="text-3xl text-third" />
            <FaTwitter className="text-3xl text-third" />
            <FaSpotify className="text-3xl text-third" />
          </div>
        </div>
        <div className="flex flex-col items-start space-y-2">
          <div>
            <a href="#home" className="text-third hover:text-purple-900 text-md font-bold  no-underline">Home</a>
          </div>
          <div>
            <a href="#sunset-store" className="text-third hover:text-purple-900 font-bold  text-md no-underline">Sunset Store</a>
          </div>
          <div>
            <a href="#news" className="text-third hover:text-purple-900 text-md font-bold  no-underline">News</a>
          </div>
        </div>
        <div className="flex flex-col items-start space-y-2">
          <div>
            <a href="#program" className="text-third hover:text-purple-900 text-md font-bold  no-underline">Program</a>
          </div>
          <div>
            <a href="#gallery" className="text-third hover:text-purple-900 text-md font-bold  no-underline">Gallery</a>
          </div>
          <div>
            <a href="#information" className="text-third hover:text-purple-900 text-md font-bold no-underline">Information</a>
          </div>
        </div>
      </div>
      <div className="mt-4 text-center">
        <p className="text-sm text-third">©Copyright 2025 Sunset di Kebun All Right Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;