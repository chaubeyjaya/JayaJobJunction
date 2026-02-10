"use client";
import React from "react";
import Link from "next/link";

const ItConsolant = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-green-50 py-12 px-4">
      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
        
        {/* Header */}
        <div className="bg-green-600 px-8 py-10">
          <h1 className="text-4xl font-bold text-white">
            IT Consultant
          </h1>
          <p className="text-green-100 mt-2">
            Provide strategic technology solutions to drive business success
          </p>
        </div>

        {/* Content */}
        <div className="p-8 space-y-10">
          
          {/* Job Overview */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">
              Job Overview
            </h2>
            <p className="text-gray-700 leading-relaxed">
              An IT Consultant works closely with clients to analyze business
              needs and recommend technology solutions that improve efficiency,
              security, and scalability. You will bridge the gap between
              technical teams and business stakeholders.
            </p>
          </section>

          {/* Responsibilities */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Key Responsibilities
            </h2>
            <ul className="grid sm:grid-cols-2 gap-4 text-gray-700">
              <li className="bg-gray-50 p-4 rounded-lg">
                Analyze client requirements and IT infrastructure
              </li>
              <li className="bg-gray-50 p-4 rounded-lg">
                Recommend suitable software, hardware, and cloud solutions
              </li>
              <li className="bg-gray-50 p-4 rounded-lg">
                Design and implement IT strategies and roadmaps
              </li>
              <li className="bg-gray-50 p-4 rounded-lg">
                Ensure data security and compliance standards
              </li>
              <li className="bg-gray-50 p-4 rounded-lg">
                Collaborate with development and operations teams
              </li>
              <li className="bg-gray-50 p-4 rounded-lg">
                Provide technical support and system optimization
              </li>
            </ul>
          </section>

          {/* Eligibility */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Eligibility Criteria
            </h2>
            <ul className="space-y-2 text-gray-700">
              <li>• Bachelor’s degree in IT, Computer Science, or related field</li>
              <li>• 2–5 years of experience in IT consulting or system analysis</li>
              <li>• Strong knowledge of networks, databases, and cloud platforms</li>
              <li>• Experience with ERP, CRM, or enterprise systems</li>
              <li>• Excellent problem-solving and communication skills</li>
            </ul>
          </section>

          {/* Job Details */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Job Details
            </h2>
            <div className="grid sm:grid-cols-2 gap-6 text-gray-700">
              <div>
                <p><strong>Location:</strong> Pune, India (Hybrid)</p>
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

export default ItConsolant;

