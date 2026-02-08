import React from "react";
import Link from "next/link";

const About = () => {
  return (
    <section className="w-full py-16 bg-white">
      {/* Main Heading */}
      <div className="text-center mb-14">
        <h1 className="text-4xl font-semibold tracking-wide text-gray-700 mt-12">
          GOOD PEOPLE TO KNOW
        </h1>
        <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
          Job Junction connects talented people with the right opportunities,
          helping students and professionals build successful careers.
        </p>
      </div>

      {/* Cards Section */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 px-6">

        {/* Our Expertise */}
        <div className="text-center p-8 rounded-lg hover:shadow-xl transition">
          <img
            src="/images/aboutExpertise.png"
            alt="Our Expertise"
            className="mx-auto h-44 md:h-52 lg:h-60 object-contain mb-6"
          />
          <h2 className="text-xl font-semibold text-gray-800 mb-3">
            OUR EXPERTISE
          </h2>
          <p className="text-gray-600 text-sm">
            We specialize in job listings, career guidance, and skill-based
            opportunities for students, freshers, and professionals.
          </p>
        </div>

        {/* Our Service */}
        <div className="text-center p-8 rounded-lg hover:shadow-xl transition">
          <img
            src="/images/aboutNeed.png"
            alt="Our Service"
            className="mx-auto h-44 md:h-52 lg:h-60 object-contain mb-6"
          />
          <h2 className="text-xl font-semibold text-gray-800 mb-3">
            OUR SERVICE
          </h2>
          <p className="text-gray-600 text-sm">
            Job Junction provides job discovery, easy applications, and employer
            connections with real-time updates.
          </p>
        </div>

        {/* Why Us */}
        <div className="text-center p-8 rounded-lg hover:shadow-xl transition">
          <img
            src="/images/aboutWhyUS.png"
            alt="Why Us"
            className="mx-auto h-44 md:h-52 lg:h-60 object-contain mb-6"
          />
          <h2 className="text-xl font-semibold text-gray-800 mb-3">
            WHY US?
          </h2>
          <p className="text-gray-600 text-sm">
            Commitment, transparency, respect, ethical hiring, and people-first
            solutions define Job Junction.
          </p>
        </div>

      </div>

      {/* CTA Section */}
      <div className="text-center mt-16">
        <Link
          href="/aboutus/resources"
          className="inline-block bg-blue-600 text-white px-8 py-3 rounded-full text-sm font-semibold hover:bg-blue-700 transition"
        >
          Explore Resources →
        </Link>
      </div>
    </section>
  );
};

export default About;
