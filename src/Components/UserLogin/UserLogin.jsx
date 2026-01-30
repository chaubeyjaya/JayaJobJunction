//basic no  advance working  properly
// "use client";
// import React, { useState } from "react";
// import axios from "axios";
// import { useRouter } from "next/navigation";
// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const UserLogin = () => {
//   const [formData, setFormData] = useState({ email: "", password: "" });
//   const router = useRouter();

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await axios.post("http://localhost:5000/api/users/login", formData);

//       // Save token + user info
//       localStorage.setItem("authToken", res.data.token);
//       localStorage.setItem("user", JSON.stringify(res.data.user));

//       toast.success("✅ Login successful");
//       router.push("/"); // redirect to home (or companypage)
//     } catch (err) {
//       toast.error(err.response?.data?.message || "Login failed");
//     }
//   };

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gray-50">
//       <form
//         onSubmit={handleLogin}
//         className="bg-white p-8 rounded-lg shadow-md w-full max-w-md"
//       >
//         <h2 className="text-2xl font-bold mb-6 text-center text-blue-700">Login</h2>

//         <div className="mb-4">
//           <label className="block mb-1 font-medium">Email</label>
//           <input
//             type="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             required
//             className="w-full border border-gray-300 px-3 py-2 rounded"
//           />
//         </div>

//         <div className="mb-6">
//           <label className="block mb-1 font-medium">Password</label>
//           <input
//             type="password"
//             name="password"
//             value={formData.password}
//             onChange={handleChange}
//             required
//             className="w-full border border-gray-300 px-3 py-2 rounded"
//           />
//         </div>

//         <button
//           type="submit"
//           className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
//         >
//           Login
//         </button>
//       </form>
//     </div>
//   );
// };

// export default UserLogin;



"use client";
import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const UserLogin = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [isHovering, setIsHovering] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const cardRef = useRef(null);
  const containerRef = useRef(null);
  const router = useRouter();

  // Mouse movement effect for 3D tilt
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!cardRef.current || !isHovering) return;
      
      const card = cardRef.current;
      const { left, top, width, height } = card.getBoundingClientRect();
      const x = (e.clientX - left - width / 2) / 25;
      const y = (e.clientY - top - height / 2) / -25;
      
      card.style.transform = `perspective(1000px) rotateY(${x}deg) rotateX(${y}deg) scale3d(1.02, 1.02, 1.02)`;
    };

    const handleMouseLeave = () => {
      if (cardRef.current) {
        cardRef.current.style.transform = 'perspective(1000px) rotateY(0deg) rotateX(0deg) scale3d(1, 1, 1)';
      }
    };

    if (isHovering) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseleave', handleMouseLeave);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isHovering]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const res = await axios.post("http://localhost:5000/api/users/login", formData);
      localStorage.setItem("authToken", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));
      toast.success("✅ Login successful");
      setTimeout(() => router.push("/"), 1500);
    } catch (err) {
      toast.error(err.response?.data?.message || "Login failed");
      setIsLoading(false);
    }
  };

  return (
    <div 
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      ref={containerRef}
    >
      {/* Background with enhanced effects */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/userlogin.png')" }}
      >
        {/* Enhanced overlay with gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/90 via-blue-900/70 to-cyan-900/80 backdrop-blur-[2px]"></div>
      </div>

      {/* Animated floating elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full border border-white/10"
            style={{
              width: `${200 + i * 100}px`,
              height: `${200 + i * 100}px`,
              left: `${20 + i * 20}%`,
              top: `${30 + i * 10}%`,
              animation: i % 2 === 0 ? 'spin-slow 25s linear infinite' : 'spin-reverse 30s linear infinite',
              transform: `rotateX(${60 + i * 10}deg) rotateY(${45 + i * 15}deg)`,
            }}
          />
        ))}
      </div>

      {/* 3D Login Card Container */}
      <div className="relative z-10 w-full max-w-md px-4">
        <div 
          ref={cardRef}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => {
            setIsHovering(false);
            if (cardRef.current) {
              cardRef.current.style.transform = 'perspective(1000px) rotateY(0deg) rotateX(0deg) scale3d(1, 1, 1)';
            }
          }}
          className="transition-all duration-500 ease-out"
          style={{
            transformStyle: 'preserve-3d',
            transform: 'perspective(1000px)',
          }}
        >
          {/* Card with 3D depth */}
          <div className="relative">
            {/* Front Card Face */}
            <form
              onSubmit={handleLogin}
              className="relative p-8 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/20 shadow-2xl"
              style={{
                transform: 'translateZ(40px)',
                boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3), 0 0 100px rgba(59, 130, 246, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
              }}
            >
              {/* Top glowing accent */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-500 rounded-t-2xl"></div>

              {/* Header */}
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-white mb-2">
                  Secure Login
                </h2>
                <p className="text-blue-300 text-sm">
                  Access your digital workspace
                </p>
                
                {/* Animated underline */}
                <div className="relative mt-4">
                  <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>
                  <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-shimmer"></div>
                </div>
              </div>

              {/* Email Field with 3D effect */}
              <div className="mb-6 relative group">
                {/* Glow border on hover */}
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                
                <div className="relative">
                  <label className="block text-sm text-gray-300 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-black/40 text-white border border-white/20 focus:outline-none focus:border-blue-500 focus:shadow-[0_0_20px_rgba(59,130,246,0.5)] transition-all duration-300 backdrop-blur-sm"
                    placeholder="you@example.com"
                  />
                  {/* 3D bottom border */}
                  <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
                </div>
              </div>

              {/* Password Field with 3D effect */}
              <div className="mb-8 relative group">
                {/* Glow border on hover */}
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                
                <div className="relative">
                  <label className="block text-sm text-gray-300 mb-2">
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-black/40 text-white border border-white/20 focus:outline-none focus:border-blue-500 focus:shadow-[0_0_20px_rgba(59,130,246,0.5)] transition-all duration-300 backdrop-blur-sm"
                    placeholder="••••••••"
                  />
                  {/* 3D bottom border */}
                  <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
                </div>
              </div>

              {/* 3D Login Button */}
              <div className="relative group">
                {/* Glow effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-lg blur opacity-70 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Button shadow for 3D effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-cyan-600 rounded-lg opacity-50 blur-md group-hover:blur-lg transition-all duration-300"></div>
                
                <button
                  type="submit"
                  disabled={isLoading}
                  className="relative w-full py-3 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold tracking-wide transform transition-all duration-300 group-hover:scale-[1.02] group-hover:shadow-[0_0_30px_rgba(0,136,255,0.8)] disabled:opacity-50 disabled:cursor-not-allowed shadow-[0_0_20px_rgba(0,136,255,0.6)]"
                  style={{
                    transformStyle: 'preserve-3d',
                    transform: 'translateZ(20px)',
                  }}
                >
                  {isLoading ? (
                    <div className="flex items-center justify-center">
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-3"></div>
                      LOGGING IN...
                    </div>
                  ) : (
                    "LOGIN"
                  )}
                </button>
                
                {/* Button bottom shine */}
                <div className="absolute -bottom-1 left-1/4 right-1/4 h-1 bg-gradient-to-r from-transparent via-blue-300/50 to-transparent blur-sm group-hover:via-cyan-300 group-hover:blur transition-all duration-300"></div>
              </div>

              {/* Security Footer */}
              <div className="mt-8 pt-6 border-t border-white/10">
                <p className="text-center text-xs text-gray-400">
                  Encrypted • Secure • Trusted
                </p>
                
                {/* Security indicators */}
                <div className="flex justify-center items-center mt-3 space-x-4">
                  {['🔒', '🛡️', '✓'].map((icon, i) => (
                    <div 
                      key={i}
                      className="text-xs text-blue-400 opacity-80 animate-pulse"
                      style={{ animationDelay: `${i * 0.2}s` }}
                    >
                      {icon}
                    </div>
                  ))}
                </div>
              </div>
            </form>

            {/* Back card shadow for 3D depth */}
            <div 
              className="absolute inset-0 bg-gradient-to-br from-blue-900/30 to-cyan-900/30 rounded-2xl -z-10 blur-md"
              style={{
                transform: 'translateZ(-20px)',
              }}
            />
          </div>
        </div>
      </div>

      {/* Bottom decorative element */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center">
        <div className="h-px w-32 bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>
      </div>

      {/* Add styles for animations */}
      <style jsx global>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg) rotateX(60deg); }
          to { transform: rotate(360deg) rotateX(60deg); }
        }
        
        @keyframes spin-reverse {
          from { transform: rotate(0deg) rotateX(45deg); }
          to { transform: rotate(-360deg) rotateX(45deg); }
        }
        
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
      `}</style>
    </div>
  );
};

export default UserLogin;