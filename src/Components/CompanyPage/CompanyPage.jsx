
// "use client";
// import React, { useEffect, useState } from "react";
// import { useRouter } from "next/navigation";

// const CompanyPage = () => {
//   const [companies, setCompanies] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [appliedCompanies, setAppliedCompanies] = useState(new Set());
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const router = useRouter();

//   // ✅ Check if user is logged in (token available)
//   useEffect(() => {
//     const token = localStorage.getItem("authToken");
//     setIsLoggedIn(!!token);
//   }, []);

//   // ✅ Fetch companies from backend
//   useEffect(() => {
//     const fetchCompanies = async () => {
//       try {
//         const res = await fetch("http://localhost:5000/api/companies/all");
//         const data = await res.json();
//         setCompanies(data);
//       } catch (err) {
//         console.error("Error fetching companies:", err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchCompanies();
//   }, []);

//   // ✅ Apply button logic
//   const handleApply = (companyId) => {
//     if (!isLoggedIn) {
//       router.push("/register/userregister");
//       return;
//     }

//     // Mark as applied locally
//     setAppliedCompanies((prev) => {
//       const newSet = new Set(prev);
//       newSet.add(companyId);
//       return newSet;
//     });
//   };

//   // ✅ Loading screen
//   if (loading) {
//     return (
//       <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
//         <div className="text-center">
//           <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
//           <p className="mt-4 text-gray-600 text-lg font-medium">
//             Loading companies...
//           </p>
//         </div>
//       </div>
//     );
//   }

//   // ✅ Main UI
//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-7xl mx-auto">
//         {/* Header */}
//         <div className="text-center mb-12">
//           <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
//             Available Companies
//           </h1>
//           <p className="text-lg text-gray-600 max-w-2xl mx-auto">
//             Discover amazing opportunities and kickstart your career with top
//             companies.
//           </p>
//         </div>

//         {/* No companies */}
//         {companies.length === 0 ? (
//           <div className="text-center py-12">
//             <div className="bg-white rounded-2xl shadow-sm p-8 max-w-md mx-auto border border-gray-200">
//               <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
//                 <span className="text-2xl">🏢</span>
//               </div>
//               <h3 className="text-xl font-semibold text-gray-900 mb-2">
//                 No Companies Available
//               </h3>
//               <p className="text-gray-500">Check back later for new opportunities.</p>
//             </div>
//           </div>
//         ) : (
//           // ✅ Companies Grid
//           <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
//             {companies.map((company, index) => {
//               const companyId = company._id || index;
//               const hasApplied = appliedCompanies.has(companyId);

//               return (
//                 <div
//                   key={companyId}
//                   className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-200 overflow-hidden group"
//                 >
//                   {/* Company Header */}
//                   <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-6 text-white">
//                     <div className="flex items-center justify-between">
//                       <h2 className="text-xl font-bold truncate">{company.name}</h2>
//                       <div
//                         className={`px-3 py-1 rounded-full text-xs font-semibold ${
//                           company.status === "Active"
//                             ? "bg-green-500 text-white"
//                             : "bg-yellow-500 text-white"
//                         }`}
//                       >
//                         {company.status}
//                       </div>
//                     </div>
//                   </div>

//                   {/* Company Details */}
//                   <div className="p-6 space-y-4">
//                     <div className="flex items-start space-x-3">
//                       <span className="text-blue-500 mt-1">📍</span>
//                       <div>
//                         <p className="text-sm font-medium text-gray-900">Address</p>
//                         <p className="text-gray-600 text-sm">{company.address}</p>
//                       </div>
//                     </div>

//                     <div className="flex items-start space-x-3">
//                       <span className="text-green-500 mt-1">📞</span>
//                       <div>
//                         <p className="text-sm font-medium text-gray-900">Contact</p>
//                         <p className="text-gray-600 text-sm">{company.contact}</p>
//                       </div>
//                     </div>

//                     {company.interviewDate && (
//                       <div className="flex items-start space-x-3">
//                         <span className="text-purple-500 mt-1">📅</span>
//                         <div>
//                           <p className="text-sm font-medium text-gray-900">Interview</p>
//                           <p className="text-gray-600 text-sm">
//                             {company.interviewDate} at {company.interviewLocation}
//                           </p>
//                         </div>
//                       </div>
//                     )}
//                   </div>

//                   {/* ✅ Apply Button */}
//                   <div className="px-6 pb-6">
//                     <button
//                       onClick={() => handleApply(companyId)}
//                       className={`w-full py-3 px-4 rounded-xl font-semibold text-white transition-all duration-300 ${
//                         hasApplied
//                           ? "bg-gradient-to-r from-green-500 to-green-600 cursor-default"
//                           : "bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
//                       }`}
//                       disabled={hasApplied}
//                     >
//                       {hasApplied ? (
//                         <span className="flex items-center justify-center">
//                           <span className="mr-2">✅</span>
//                           Application Submitted
//                         </span>
//                       ) : (
//                         "Apply Now"
//                       )}
//                     </button>

//                     {!isLoggedIn && (
//                       <p className="text-xs text-gray-500 text-center mt-2">
//                         You need to register to apply
//                       </p>
//                     )}
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         )}

//         {/* Footer Stats */}
//         <div className="mt-12 text-center">
//           <div className="bg-white rounded-2xl shadow-sm p-6 max-w-2xl mx-auto border border-gray-200">
//             <div className="grid grid-cols-2 gap-4">
//               <div className="text-center">
//                 <p className="text-2xl font-bold text-blue-600">
//                   {companies.length}
//                 </p>
//                 <p className="text-gray-600 text-sm">Total Companies</p>
//               </div>
//               <div className="text-center">
//                 <p className="text-2xl font-bold text-green-600">
//                   {Array.from(appliedCompanies).length}
//                 </p>
//                 <p className="text-gray-600 text-sm">Applications Sent</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CompanyPage;

//ye  niche wala ccode sbse best hai  isko dlt nhi krna hai proper working hai
// "use client";
// import React, { useEffect, useState } from "react";
// import { useRouter } from "next/navigation";

// const CompanyPage = () => {
//   const [companies, setCompanies] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const router = useRouter();

//   // ✅ Check if user is logged in
//   useEffect(() => {
//     const token = localStorage.getItem("authToken");
//     setIsLoggedIn(!!token);
//   }, []);

//   // ✅ Fetch companies from backend
//   useEffect(() => {
//     const fetchCompanies = async () => {
//       try {
//         const res = await fetch("http://localhost:5000/api/companies/all");
//         const data = await res.json();
//         setCompanies(data);
//       } catch (err) {
//         console.error("Error fetching companies:", err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchCompanies();
//   }, []);

//   // ✅ Apply button → ONLY REDIRECT
//   const handleApply = () => {
//     if (!isLoggedIn) {
//       router.push("/register/userregister");
//       return;
//     }

//     // 🔥 redirect to apply page
//     router.push("/job/jobapply/FrontendForm");
//   };

//   // ✅ Loading screen (unchanged)
//   if (loading) {
//     return (
//       <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
//         <div className="text-center">
//           <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
//           <p className="mt-4 text-gray-600 text-lg font-medium">
//             Loading companies...
//           </p>
//         </div>
//       </div>
//     );
//   }

//   // ✅ Main UI (UNCHANGED)
//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-7xl mx-auto">
//         {/* Header */}
//         <div className="text-center mb-12 mt-12">
//           <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
//             Available Companies
//           </h1>
//           <p className="text-lg text-gray-600 max-w-2xl mx-auto">
//             Discover amazing opportunities and kickstart your career with top
//             companies.
//           </p>
//         </div>

//         {/* No companies */}
//         {companies.length === 0 ? (
//           <div className="text-center py-12">
//             <div className="bg-white rounded-2xl shadow-sm p-8 max-w-md mx-auto border border-gray-200">
//               <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
//                 <span className="text-2xl">🏢</span>
//               </div>
//               <h3 className="text-xl font-semibold text-gray-900 mb-2">
//                 No Companies Available
//               </h3>
//               <p className="text-gray-500">
//                 Check back later for new opportunities.
//               </p>
//             </div>
//           </div>
//         ) : (
//           // ✅ Companies Grid (UNCHANGED)
//           <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
//             {companies.map((company, index) => (
//               <div
//                 key={index}
//                 className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-200 overflow-hidden group"
//               >
//                 {/* Company Header */}
//                 <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-6 text-white">
//                   <div className="flex items-center justify-between">
//                     <h2 className="text-xl font-bold truncate">
//                       {company.name}
//                     </h2>
//                     <div
//                       className={`px-3 py-1 rounded-full text-xs font-semibold ${
//                         company.status === "Active"
//                           ? "bg-green-500 text-white"
//                           : "bg-yellow-500 text-white"
//                       }`}
//                     >
//                       {company.status}
//                     </div>
//                   </div>
//                 </div>

//                 {/* Company Details */}
//                 <div className="p-6 space-y-4">
//                   <div className="flex items-start space-x-3">
//                     <span className="text-blue-500 mt-1">📍</span>
//                     <div>
//                       <p className="text-sm font-medium text-gray-900">
//                         Address
//                       </p>
//                       <p className="text-gray-600 text-sm">
//                         {company.address}
//                       </p>
//                     </div>
//                   </div>

//                   <div className="flex items-start space-x-3">
//                     <span className="text-green-500 mt-1">📞</span>
//                     <div>
//                       <p className="text-sm font-medium text-gray-900">
//                         Contact
//                       </p>
//                       <p className="text-gray-600 text-sm">
//                         {company.contact}
//                       </p>
//                     </div>
//                   </div>

//                   {company.interviewDate && (
//                     <div className="flex items-start space-x-3">
//                       <span className="text-purple-500 mt-1">📅</span>
//                       <div>
//                         <p className="text-sm font-medium text-gray-900">
//                           Interview
//                         </p>
//                         <p className="text-gray-600 text-sm">
//                           {company.interviewDate} at{" "}
//                           {company.interviewLocation}
//                         </p>
//                       </div>
//                     </div>
//                   )}
//                 </div>

//                 {/* ✅ Apply Button (UI SAME, LOGIC CHANGED) */}
//                 <div className="px-6 pb-6">
//                   <button
//                     onClick={handleApply}
//                     className="w-full py-3 px-4 rounded-xl font-semibold text-white
//                     bg-gradient-to-r from-blue-500 to-purple-600
//                     hover:from-blue-600 hover:to-purple-700
//                     shadow-lg hover:shadow-xl transform hover:-translate-y-0.5
//                     transition-all duration-300"
//                   >
//                     Apply Now
//                   </button>

//                   {!isLoggedIn && (
//                     <p className="text-xs text-gray-500 text-center mt-2">
//                       You need to register to apply
//                     </p>
//                   )}
//                 </div>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default CompanyPage;


"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const CompanyPage = () => {
  const [companies, setCompanies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();

  // ✅ Check if user is logged in
  useEffect(() => {
    const token = localStorage.getItem("authToken");
    setIsLoggedIn(!!token);
  }, []);

  // ✅ Fetch companies from backend
  useEffect(() => {
    const fetchCompanies = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/companies/all");
        const data = await res.json();
        setCompanies(data);
      } catch (err) {
        console.error("Error fetching companies:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchCompanies();
  }, []);

  // ✅ Apply button → Save company info and redirect
  const handleApply = (company) => {
    if (!isLoggedIn) {
      router.push("/register/userregister");
      return;
    }

    // 🔥 Save selected company to localStorage
    localStorage.setItem('selectedCompany', JSON.stringify({
      companyId: company._id,
      companyName: company.name,
      companyAddress: company.address,
      companyContact: company.contact
    }));
    
    // Redirect to apply form
    router.push("/job/jobapply/FrontendForm");
  };

  // ✅ Loading screen
  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600 text-lg font-medium">
            Loading companies...
          </p>
        </div>
      </div>
    );
  }

  // ✅ Main UI
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 mt-12">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Available Companies
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover amazing opportunities and kickstart your career with top
            companies.
          </p>
        </div>

        {/* No companies */}
        {companies.length === 0 ? (
          <div className="text-center py-12">
            <div className="bg-white rounded-2xl shadow-sm p-8 max-w-md mx-auto border border-gray-200">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏢</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                No Companies Available
              </h3>
              <p className="text-gray-500">
                Check back later for new opportunities.
              </p>
            </div>
          </div>
        ) : (
          // ✅ Companies Grid
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {companies.map((company, index) => (
              <div
                key={company._id || index}
                className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-200 overflow-hidden group"
              >
                {/* Company Header */}
                <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-6 text-white">
                  <div className="flex items-center justify-between">
                    <h2 className="text-xl font-bold truncate">
                      {company.name}
                    </h2>
                    <div
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        company.status === "Active"
                          ? "bg-green-500 text-white"
                          : "bg-yellow-500 text-white"
                      }`}
                    >
                      {company.status}
                    </div>
                  </div>
                </div>

                {/* Company Details */}
                <div className="p-6 space-y-4">
                  <div className="flex items-start space-x-3">
                    <span className="text-blue-500 mt-1">📍</span>
                    <div>
                      <p className="text-sm font-medium text-gray-900">
                        Address
                      </p>
                      <p className="text-gray-600 text-sm">
                        {company.address}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <span className="text-green-500 mt-1">📞</span>
                    <div>
                      <p className="text-sm font-medium text-gray-900">
                        Contact
                      </p>
                      <p className="text-gray-600 text-sm">
                        {company.contact}
                      </p>
                    </div>
                  </div>

                  {company.interviewDate && (
                    <div className="flex items-start space-x-3">
                      <span className="text-purple-500 mt-1">📅</span>
                      <div>
                        <p className="text-sm font-medium text-gray-900">
                          Interview
                        </p>
                        <p className="text-gray-600 text-sm">
                          {company.interviewDate} at{" "}
                          {company.interviewLocation}
                        </p>
                      </div>
                    </div>
                  )}
                </div>

                {/* ✅ Apply Button - Pass company object */}
                <div className="px-6 pb-6">
                  <button
                    onClick={() => handleApply(company)}
                    className="w-full py-3 px-4 rounded-xl font-semibold text-white
                    bg-gradient-to-r from-blue-500 to-purple-600
                    hover:from-blue-600 hover:to-purple-700
                    shadow-lg hover:shadow-xl transform hover:-translate-y-0.5
                    transition-all duration-300"
                  >
                    Apply Now
                  </button>

                  {!isLoggedIn && (
                    <p className="text-xs text-gray-500 text-center mt-2">
                      You need to register to apply
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CompanyPage;

