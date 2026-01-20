import React from 'react';
import Link from 'next/link';

const Hero = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/images/hero2.png"
          alt="Job Background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Light Black Overlay (NO blur) */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-center px-4 text-white">
        
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
          Find Your <span className="text-blue-400">Dream Job</span>
        </h1>

        <p className="text-lg sm:text-xl mb-8 max-w-xl text-gray-200">
          Discover opportunities that match your skills, interests, and goals.
        </p>

        <Link
          href="/job/jobcategory"
          className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-lg text-lg font-medium transition duration-300 transform hover:scale-105 shadow-lg"
        >
          Explore Jobs
        </Link>
      </div>
    </div>
  );
};

export default Hero;
