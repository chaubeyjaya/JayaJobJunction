"use client";
import React, { useEffect, useState } from 'react';

const CompanyPage = () => {
  const [companies, setCompanies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCompanies = async () => {
      try {
        const res = await fetch('http://localhost:5000/api/companies/all');
        const data = await res.json();
        setCompanies(data);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching companies:', err);
        setLoading(false);
      }
    };

    fetchCompanies();
  }, []);

  if (loading) {
    return <div className="text-center mt-10 text-gray-600">Loading companies...</div>;
  }

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-8">Available Companies</h1>

      {companies.length === 0 ? (
        <p className="text-center text-gray-500">No company data available.</p>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {companies.map((company, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-md border-l-4 border-blue-500 hover:shadow-lg transition-all">
              <h2 className="text-xl font-bold text-gray-800 mb-2">{company.name}</h2>
              <p className="text-gray-600"><strong>📍 Address:</strong> {company.address}</p>
              <p className="text-gray-600"><strong>📞 Contact:</strong> {company.contact}</p>
              <p className="text-gray-600"><strong>Status:</strong> {company.status}</p>
              {company.interviewDate && (
                <p className="text-gray-600"><strong>📅 Interview:</strong> {company.interviewDate} at {company.interviewLocation}</p>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CompanyPage;
