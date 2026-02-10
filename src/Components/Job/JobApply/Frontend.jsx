"use client";
import React from "react";
import Link from "next/link";

const Frontend = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-12 px-4">
      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
        
        {/* Header */}
        <div className="bg-blue-600 px-8 py-10">
          <h1 className="text-4xl font-bold text-white">
            Frontend Developer
          </h1>
          <p className="text-blue-100 mt-2">
            Build modern, responsive, and user-friendly web interfaces
          </p>
        </div>

        {/* Content */}
        <div className="p-8 space-y-10">
          
          {/* About */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">
              Job Overview
            </h2>
            <p className="text-gray-700 leading-relaxed">
              A Frontend Developer is responsible for designing and implementing
              user interfaces that deliver seamless and engaging user
              experiences. You will collaborate with designers and backend
              developers to transform ideas into fast, scalable, and visually
              appealing web applications using modern frontend technologies.
            </p>
          </section>

          {/* Responsibilities */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Key Responsibilities
            </h2>
            <ul className="grid sm:grid-cols-2 gap-4 text-gray-700">
              <li className="bg-gray-50 p-4 rounded-lg">
                Build responsive UI using React, HTML, CSS, and JavaScript
              </li>
              <li className="bg-gray-50 p-4 rounded-lg">
                Optimize performance for speed and scalability
              </li>
              <li className="bg-gray-50 p-4 rounded-lg">
                Ensure cross-browser and device compatibility
              </li>
              <li className="bg-gray-50 p-4 rounded-lg">
                Integrate APIs with backend services
              </li>
              <li className="bg-gray-50 p-4 rounded-lg">
                Maintain code using Git and version control systems
              </li>
              <li className="bg-gray-50 p-4 rounded-lg">
                Debug, test, and improve UI components
              </li>
            </ul>
          </section>

          {/* Eligibility */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Eligibility Criteria
            </h2>
            <ul className="space-y-2 text-gray-700">
              <li>• Bachelor’s degree in Computer Science or related field</li>
              <li>• 1–3 years experience with frontend technologies</li>
              <li>• Strong knowledge of React, JavaScript, HTML, CSS</li>
              <li>• Understanding of REST APIs and responsive design</li>
              <li>• Familiarity with UI/UX best practices</li>
            </ul>
          </section>

          {/* Job Details */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Job Details
            </h2>
            <div className="grid sm:grid-cols-2 gap-6 text-gray-700">
              <div>
                <p><strong>Location:</strong> Mumbai, India (Hybrid)</p>
                <p><strong>Employment Type:</strong> Full-time</p>
                <p><strong>Experience Level:</strong> Junior to Mid-level</p>
              </div>
              <div>
                <p>
                  <strong>Application Deadline:</strong>{" "}
                  <span className="text-red-600 font-semibold">
                    October 30, 2025
                  </span>
                </p>
                <p><strong>Salary Range:</strong> ₹6 – 10 LPA</p>
              </div>
            </div>
          </section>

          {/* Apply Button */}
          <div className="flex justify-center pt-6">
            <Link href="/contactus">
              <button className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-10 py-3 rounded-xl shadow-lg transition-all duration-300 hover:scale-105">
                Contact US
              </button>
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Frontend;
