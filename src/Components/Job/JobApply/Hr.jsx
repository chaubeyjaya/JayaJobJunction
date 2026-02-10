"use client";
import React from "react";
import Link from "next/link";

const Hr = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-purple-50 py-12 px-4">
      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
        
        {/* Header */}
        <div className="bg-purple-600 px-8 py-10">
          <h1 className="text-4xl font-bold text-white">
            HR Executive
          </h1>
          <p className="text-purple-100 mt-2">
            Manage people, culture, and organizational growth
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
              An HR Executive plays a key role in managing employee relations,
              recruitment, performance management, and company policies. You
              will act as a bridge between management and employees to ensure
              a positive, productive, and compliant work environment.
            </p>
          </section>

          {/* Responsibilities */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Key Responsibilities
            </h2>
            <ul className="grid sm:grid-cols-2 gap-4 text-gray-700">
              <li className="bg-gray-50 p-4 rounded-lg">
                Handle recruitment and onboarding processes
              </li>
              <li className="bg-gray-50 p-4 rounded-lg">
                Maintain employee records and HR documentation
              </li>
              <li className="bg-gray-50 p-4 rounded-lg">
                Manage employee relations and resolve conflicts
              </li>
              <li className="bg-gray-50 p-4 rounded-lg">
                Implement HR policies and company guidelines
              </li>
              <li className="bg-gray-50 p-4 rounded-lg">
                Coordinate training and development programs
              </li>
              <li className="bg-gray-50 p-4 rounded-lg">
                Support performance appraisal processes
              </li>
            </ul>
          </section>

          {/* Eligibility */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Eligibility Criteria
            </h2>
            <ul className="space-y-2 text-gray-700">
              <li>• Bachelor’s degree in HR, Business Administration, or related field</li>
              <li>• 1–4 years of experience in Human Resources</li>
              <li>• Strong communication and interpersonal skills</li>
              <li>• Knowledge of labor laws and HR best practices</li>
              <li>• Ability to handle confidential information professionally</li>
            </ul>
          </section>

          {/* Job Details */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Job Details
            </h2>
            <div className="grid sm:grid-cols-2 gap-6 text-gray-700">
              <div>
                <p><strong>Location:</strong> Bengaluru, India (On-site)</p>
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
                <p><strong>Salary Range:</strong> ₹4 – 7 LPA</p>
              </div>
            </div>
          </section>

          {/* Apply Button */}
          <div className="flex justify-center pt-6">
            <Link href="/contactus">
              <button className="bg-purple-600 hover:bg-purple-700 text-white text-lg px-10 py-3 rounded-xl shadow-lg transition-all duration-300 hover:scale-105">
                Contact US
              </button>
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Hr;

