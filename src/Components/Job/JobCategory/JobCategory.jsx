"use client";

import React from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

const JobCategory = () => {
  const router = useRouter();

  const categories = [
    {
      title: "Frontend Developer",
      description: "Build engaging UI using React, HTML, CSS, and JavaScript.",
      link: "/job/jobapply/frontend",
      icon: "💻",
    },
    {
      title: "Backend Developer",
      description: "Manage server-side logic with Node.js, .NET, or Python.",
      link: "/job/jobapply/backend",
      icon: "⚙️",
    },
    {
      title: "HR Consultant",
      description: "Manage hiring, onboarding, and organizational development.",
      link: "/job/jobapply/hr",
      icon: "🧑‍💼",
    },
    {
      title: "IT Consultant",
      description: "Provide IT solutions and technical advice to organizations.",
      link: "/job/jobapply/itConsolant",
      icon: "🧠",
    },
    {
      title: "Mobile App Developer",
      description: "Create mobile applications for Android and iOS platforms.",
      link: "/job-categories/mobile",
      icon: "📱",
    },
  ];

  return (
    <section className="min-h-screen bg-gradient-to-br from-[#f8faff] via-[#eef2ff] to-[#e0e7ff] py-20 px-6">
      
      {/* HEADER */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
          Explore <span className="text-blue-600">Job Categories</span>
        </h1>
        <p className="text-gray-600 text-lg">
          Choose a category that matches your skills and start your career journey
          with us today.
        </p>
      </div>

      {/* CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {categories.map((category, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
            className="relative bg-white rounded-3xl p-8 shadow-md hover:shadow-2xl transition"
          >
            {/* ICON */}
            <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-blue-100 text-3xl mb-6">
              {category.icon}
            </div>

            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
              {category.title}
            </h2>

            <p className="text-gray-600 mb-6 leading-relaxed">
              {category.description}
            </p>

            <button
              onClick={() => router.push(category.link)}
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition group"
            >
              View More
              <span className="group-hover:translate-x-1 transition">→</span>
            </button>

            {/* HOVER GLOW */}
            <div className="absolute inset-0 rounded-3xl ring-1 ring-blue-500/0 hover:ring-blue-500/20 transition pointer-events-none"></div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default JobCategory;
