"use client";
import React, { useEffect, useState } from "react";

const Resources = () => {
  const [resources, setResources] = useState([]);

  useEffect(() => {
    const fetchResources = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/resources");
        const data = await res.json();
        setResources(data.data);
      } catch (error) {
        console.log("Error fetching resources");
      }
    };

    fetchResources();
  }, []);

  return (
    <>
      <div className="min-h-screen bg-gray-100 px-6 py-10 mt-20">
        <h1 className="text-3xl font-bold text-center mb-8">
          Learning Resources
        </h1>

        {resources.length === 0 ? (
          <p className="text-center text-gray-500">
            No resources available
          </p>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {resources.map((item) => (
              <div
                key={item._id}
                className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition"
              >
                <h2 className="text-xl font-semibold mb-2">
                  {item.title}
                </h2>

                <p className="text-gray-600 text-sm mb-4">
                  {item.description}
                </p>

                <div className="flex justify-between items-center">
                  <span className="text-xs bg-blue-100 text-blue-600 px-3 py-1 rounded-full">
                    {item.category}
                  </span>

                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 text-sm font-medium hover:underline"
                  >
                    View →
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Resources;

