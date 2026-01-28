// import React from "react";
// import Link from "next/link";
// import { User, Shield, Building } from "lucide-react";

// const RegisterOption = () => {
//   const options = [
//     {
//       title: "Register as User",
//       desc: "Find jobs, apply easily, and track applications.",
//       icon: <User className="w-12 h-12 text-blue-600" />,
//       link: "/register/userregister",
//       color: "from-blue-500 to-blue-700",
//     },
//     {
//       title: "Register as Admin",
//       desc: "Manage users, companies, and job postings.",
//       icon: <Shield className="w-12 h-12 text-green-600" />,
//       link: "/register/adminregister",
//       color: "from-green-500 to-green-700",
//     },
//     {
//       title: "Register as Company",
//       desc: "Post jobs and connect with potential candidates.",
//       icon: <Building className="w-12 h-12 text-purple-600" />,
//       link: "/register/company",
//       color: "from-purple-500 to-purple-700",
//     },
//   ];

//   return (
//     <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
//       <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-3 gap-6">
//         {options.map((opt, i) => (
//           <div
//             key={i}
//             className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center transition transform hover:scale-105 hover:shadow-2xl"
//           >
//             <div className="mb-4">{opt.icon}</div>
//             <h2 className="text-xl font-bold mb-2">{opt.title}</h2>
//             <p className="text-gray-600 mb-4">{opt.desc}</p>
//             <Link href={opt.link}>
//               <button
//                 className={`px-5 py-2 rounded-xl text-white font-semibold bg-gradient-to-r ${opt.color}`}
//               >
//                 Get Started
//               </button>
//             </Link>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default RegisterOption;



import React from "react";
import Link from "next/link";
import { User, Shield, Building } from "lucide-react";

const RegisterOption = () => {
  const options = [
    {
      title: "Register as User",
      desc: "Find jobs, apply easily, and track applications.",
      icon: <User className="w-12 h-12 text-blue-600" />,
      link: "/register/userregister",
      color: "from-blue-500 to-blue-700",
    },
    {
      title: "Register as Admin",
      desc: "Manage users, companies, and job postings.",
      icon: <Shield className="w-12 h-12 text-green-600" />,
      link: "/register/adminregister",
      color: "from-green-500 to-green-700",
    },
    {
      title: "Register as Company",
      desc: "Post jobs and connect with potential candidates.",
      icon: <Building className="w-12 h-12 text-purple-600" />,
      link: "/register/company",
      color: "from-purple-500 to-purple-700",
    },
  ];

  return (
    <div
      className="min-h-screen relative flex items-center justify-center p-6 bg-center "
      style={{
        backgroundImage: "url('/images/registerOptionbg.png')",
        backgroundSize: "cover",
      }}
    >
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative z-10 max-w-6xl w-full grid grid-cols-1 md:grid-cols-3 gap-6">
        {options.map((opt, i) => (
          <div
            key={i}
            className="bg-blue/50 backdrop-blur-md rounded-2xl shadow-lg p-6 flex flex-col items-center text-center transition transform hover:scale-105 hover:shadow-2xl"
          >
            <div className="mb-4">{opt.icon}</div>
            <h2 className="text-xl font-bold mb-2 text-white">{opt.title}</h2>
            <p className="text-white mb-4">{opt.desc}</p>
            <Link href={opt.link}>
              <button
                className={`px-5 py-2 rounded-xl text-white font-semibold bg-gradient-to-r ${opt.color}`}
              >
                Get Started
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RegisterOption;
