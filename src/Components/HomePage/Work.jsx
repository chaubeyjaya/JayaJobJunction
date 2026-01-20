import React from "react";
import Link from 'next/link';
const Work = () => {
  return (
    <section className="bg-white py-28">
      <div className="max-w-6xl mx-auto px-6 text-center">

        {/* HEADING */}
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          How it <span className="text-blue-500">Work</span>
        </h2>

        <p className="text-gray-700 text-lg md:text-xl max-w-2xl mx-auto mb-20 leading-relaxed">
          Explore the following steps — these will help you find a <br />
          job easily
        </p>

        {/* STEPS */}
        <div className="grid md:grid-cols-3 gap-16">

          {/* STEP 1 */}
          <div className="text-center">
            <p className="text-blue-500 text-xl font-semibold mb-3">
              Step 1
            </p>

            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Register Account
            </h3>

            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              First you need to create your account on our platform
            </p>

          <Link href="register/registeroption">
            <button className="text-blue-500 text-base font-semibold hover:underline">
              REGISTER ACCOUNT
            </button>
          </Link>
          </div>

          {/* STEP 2 */}
          <div className="text-center">
            <p className="text-blue-500 text-xl font-semibold mb-3">
              Step 2
            </p>

            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Find Job
            </h3>

            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              Search and explore jobs that match your skills
            </p>

            <Link href="job/jobcategory">
            <button className="text-blue-500 text-base font-semibold hover:underline">
              FIND JOB
            </button>
            </Link>
          </div>

          {/* STEP 3 */}
          <div className="text-center">
            <p className="text-blue-500 text-xl font-semibold mb-3">
              Step 3
            </p>

            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Apply Job
            </h3>

            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              Apply directly to the company and track your status
            </p>

           <Link href="job/jobcategory">
            <button className="text-blue-500 text-base font-semibold hover:underline">
              Learn More
            </button>
           </Link>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Work;
