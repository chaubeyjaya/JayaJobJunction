"use client";

import React from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

const JobCategory = () => {
  const router = useRouter();

  const categories = [
    { title: "Frontend Developer", description: "Build engaging UI using React, HTML, CSS, and JavaScript.", link: "/job/jobapply/frontend" },
    { title: "Backend Developer", description: "Manage server-side logic with Node.js, .NET, or Python.", link: "/job-categories/backend" },
    { title: "HR Consultant", description: "Manage hiring, onboarding, and organizational development.", link: "/job-categories/hr" },
    { title: "IT Consultant", description: "Provide IT solutions and technical advice to organizations.", link: "/job-categories/it" },
    { title: "Mobile App Developer", description: "Create mobile applications for Android and iOS platforms.", link: "/job-categories/mobile" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-100 py-12 px-6">
      <h1 className="text-3xl font-bold text-center mb-10 text-gray-800">
        Job Categories
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {categories.map((category, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="bg-white shadow-lg rounded-2xl p-6 text-center hover:shadow-2xl transition duration-300"
          >
            <h2 className="text-xl font-semibold text-blue-700 mb-3">
              {category.title}
            </h2>
            <p className="text-gray-600 mb-5">{category.description}</p>
            <button
              onClick={() => router.push(category.link)}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition"
            >
              View More
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default JobCategory;
