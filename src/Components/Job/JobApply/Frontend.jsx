"use client";
import React from "react";
import Link from "next/link";


const Frontend = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-10 px-6">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-2xl p-8">
        <h1 className="text-3xl font-bold text-blue-700 mb-4">
          Frontend Developer
        </h1>
        <p className="text-gray-700 mb-6 leading-relaxed">
          A <strong>Frontend Developer</strong> is responsible for designing,
          developing, and implementing user interfaces for web applications.
          This role involves working closely with designers, backend developers,
          and stakeholders to create seamless, responsive, and visually appealing
          user experiences using modern technologies like React, JavaScript,
          HTML, CSS, and TypeScript.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mb-3">
          ✅ Key Responsibilities & Features:
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
          <li>
            <strong>UI Development:</strong> Build responsive and dynamic user
            interfaces using React, HTML5, CSS3, and modern JavaScript frameworks.
          </li>
          <li>
            <strong>Performance Optimization:</strong> Optimize applications for
            maximum speed and scalability.
          </li>
          <li>
            <strong>Cross-Browser Compatibility:</strong> Ensure consistent
            design and functionality across multiple browsers and devices.
          </li>
          <li>
            <strong>Collaboration:</strong> Work closely with backend developers
            to integrate APIs and data services.
          </li>
          <li>
            <strong>Version Control:</strong> Maintain code using Git and GitHub
            with proper version tracking.
          </li>
          <li>
            <strong>Testing:</strong> Debug and test components for performance,
            usability, and security.
          </li>
          <li>
            <strong>Design Systems:</strong> Collaborate with UI/UX teams to
            maintain consistency and accessibility.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-800 mb-3">
          🎓 Eligibility Criteria:
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
          <li>
            Bachelor’s degree in Computer Science, Information Technology, or a
            related field.
          </li>
          <li>
            1–3 years of hands-on experience with frontend technologies (React,
            JavaScript, HTML, CSS, TypeScript).
          </li>
          <li>
            Knowledge of REST APIs, Git, and responsive design principles.
          </li>
          <li>
            Understanding of UI/UX best practices and accessibility guidelines.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-800 mb-3">
          📅 Job Details:
        </h2>
        <ul className="text-gray-700 mb-6 space-y-2">
          <li>
            <strong>Location:</strong> Mumbai, India (Hybrid)
          </li>
          <li>
            <strong>Employment Type:</strong> Full-time
          </li>
          <li>
            <strong>Application Deadline:</strong> <span className="text-red-600 font-semibold">October 30, 2025</span>
          </li>
          <li>
            <strong>Salary Range:</strong> ₹6–10 LPA (depending on experience)
          </li>
          <li>
            <strong>Experience Level:</strong> Junior to Mid-level Developer
          </li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-800 mb-3">
          🧑‍💻 Who Can Apply:
        </h2>
        <p className="text-gray-700 mb-6">
          Developers passionate about frontend technologies, eager to learn new
          frameworks, and capable of transforming design ideas into functional
          products. Candidates who enjoy problem-solving, writing clean code,
          and working in collaborative agile environments are highly encouraged
          to apply.
        </p>

        <div className="flex justify-center">
        <Link href="/job/jobapply/FrontendForm">
          <button className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-8 py-3 rounded-lg shadow-md transition duration-300">
            Apply Now
          </button>
        </Link>
        </div>
      </div>
    </div>
  );
};

export default Frontend;

