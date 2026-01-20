import Image from "next/image";
import React from "react";

const Largest = () => {
  return (
    <section className="bg-[#eef1ff] py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center text-center">

        {/* HEADING */}
        <h1 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-4">
          India’s <span className="font-bold">Largest</span> Job Portal
        </h1>

        <p className="text-gray-600 text-lg mb-12">
          Hire the Top 1% Skilled Staff from 4Cr+ Candidates
        </p>

        {/* IMAGE CONTAINER */}
        <div className="w-full max-w-5xl mx-auto">
          <Image
            src="/images/largest.png"   // apni image ka correct path
            alt="India Largest Job Portal"
            width={1400}
            height={700}
            className="w-full h-auto object-contain"
            priority
          />
        </div>

        {/* BUTTONS */}
        <div className="flex flex-col sm:flex-row gap-6 mt-14">
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-10 py-3 rounded-md font-semibold shadow-md transition">
            Hire now
          </button>

          <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-10 py-3 rounded-md font-semibold shadow-md transition">
            Get a job
          </button>
        </div>

      </div>
    </section>
  );
};

export default Largest;
