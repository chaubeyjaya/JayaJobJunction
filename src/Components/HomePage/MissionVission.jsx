import React from "react";

const MissionVission = () => {
  return (
    <section className="bg-[#f9f9f9] py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADING */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Our <span className="text-blue-500">Mission</span> &{" "}
            <span className="text-blue-500">Vision</span>
          </h2>
          <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
            We are committed to connecting talent with opportunity and helping
            people build meaningful careers.
          </p>
        </div>

        {/* CONTENT */}
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* MISSION */}
          <div className="bg-white p-10 rounded-2xl shadow-md hover:shadow-xl transition">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 flex items-center justify-center bg-blue-100 text-blue-500 rounded-full text-xl font-bold">
                🎯
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 ml-4">
                Our Mission
              </h3>
            </div>

            <p className="text-gray-600 leading-relaxed">
              Our mission is to empower job seekers by providing a reliable and
              user-friendly platform where they can explore opportunities,
              develop skills, and connect with trusted employers across
              industries.
            </p>
          </div>

          {/* VISION */}
          <div className="bg-white p-10 rounded-2xl shadow-md hover:shadow-xl transition">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 flex items-center justify-center bg-blue-100 text-blue-500 rounded-full text-xl font-bold">
                👁️
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 ml-4">
                Our Vision
              </h3>
            </div>

            <p className="text-gray-600 leading-relaxed">
              Our vision is to become a global career hub that bridges the gap
              between talent and organizations, creating a future where everyone
              has access to meaningful employment and growth opportunities.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default MissionVission;
