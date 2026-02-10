"use client";
import React from "react";
import Link from "next/link";

const Backend = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-green-50 py-12 px-4">
      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
        
        {/* Header */}
        <div className="bg-green-600 px-8 py-10">
          <h1 className="text-4xl font-bold text-white">
            Backend Developer
          </h1>
          <p className="text-green-100 mt-2">
            Build scalable, secure, and high-performance server-side systems
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
              A Backend Developer is responsible for developing and maintaining
              the server-side logic, databases, and APIs that power web
              applications. You will work closely with frontend developers to
              ensure seamless data flow, security, and scalability using modern
              backend technologies.
            </p>
          </section>

          {/* Responsibilities */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Key Responsibilities
            </h2>
            <ul className="grid sm:grid-cols-2 gap-4 text-gray-700">
              <li className="bg-gray-50 p-4 rounded-lg">
                Design and develop RESTful and scalable APIs
              </li>
              <li className="bg-gray-50 p-4 rounded-lg">
                Manage databases like MongoDB, MySQL, or PostgreSQL
              </li>
              <li className="bg-gray-50 p-4 rounded-lg">
                Implement authentication and authorization systems
              </li>
              <li className="bg-gray-50 p-4 rounded-lg">
                Optimize server performance and scalability
              </li>
              <li className="bg-gray-50 p-4 rounded-lg">
                Ensure application security and data protection
              </li>
              <li className="bg-gray-50 p-4 rounded-lg">
                Debug, test, and maintain backend services
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
              <li>• 1–4 years experience with backend development</li>
              <li>• Strong knowledge of Node.js, Express, or Django</li>
              <li>• Experience with databases and REST APIs</li>
              <li>• Understanding of security best practices</li>
            </ul>
          </section>

          {/* Job Details */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Job Details
            </h2>
            <div className="grid sm:grid-cols-2 gap-6 text-gray-700">
              <div>
                <p><strong>Location:</strong> Bangalore, India (Hybrid)</p>
                <p><strong>Employment Type:</strong> Full-time</p>
                <p><strong>Experience Level:</strong> Mid-level</p>
              </div>
              <div>
                <p>
                  <strong>Application Deadline:</strong>{" "}
                  <span className="text-red-600 font-semibold">
                    October 30, 2025
                  </span>
                </p>
                <p><strong>Salary Range:</strong> ₹8 – 14 LPA</p>
              </div>
            </div>
          </section>

          {/* Apply Button */}
          <div className="flex justify-center pt-6">
            <Link href="/contactus">
              <button className="bg-green-600 hover:bg-green-700 text-white text-lg px-10 py-3 rounded-xl shadow-lg transition-all duration-300 hover:scale-105">
                Contact Us
              </button>
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Backend;
