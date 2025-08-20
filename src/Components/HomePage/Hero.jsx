import React from 'react';
import Link from 'next/link';

const Hero = () => {
  return (
    <div className="relative w-full overflow-hidden" style={{ height: '100vh' }}>
      {/* Fullscreen Image with proper positioning */}
      <div className="absolute inset-0">
        <img
          src="/hero3.png"
          alt="Job Background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-center px-4 text-white">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
          Find Your <span className="text-red-400">Dream Job</span>
        </h1>
        <p className="text-[20px] sm:text-xl mb-8 max-w-xl">
          Discover opportunities that match your skills, interests, and goals.
        </p>
        <Link
          href="/jobs"
          className="bg-red-400 hover:bg-red-700 px-8 py-3 rounded-lg text-lg font-medium transition duration-300 transform hover:scale-105"
        >
          Explore Jobs
        </Link>
      </div>
    </div>
  );
};

export default Hero;