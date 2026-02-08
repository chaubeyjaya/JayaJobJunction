// 'use client';

// import React, { useState, useEffect } from 'react';
// import { Menu, X } from 'lucide-react';
// import Link from 'next/link';
// import { useRouter } from 'next/navigation';

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [user, setUser] = useState(null);
//   const router = useRouter();

//   // Check if user is logged in (SAFE way)
//   useEffect(() => {
//     if (typeof window !== 'undefined') {
//       const storedUser = localStorage.getItem('user');

//       if (storedUser) {
//         try {
//           const parsedUser = JSON.parse(storedUser);
//           setUser(parsedUser);
//         } catch (error) {
//           console.error('Invalid user data in localStorage:', error);
//           localStorage.removeItem('user');
//         }
//       }
//     }
//   }, []);

//   // Logout function
//   const handleLogout = () => {
//     localStorage.removeItem('authToken');
//     localStorage.removeItem('user');
//     setUser(null);
//     router.push('/login/userlogin');
//   };

//   return (
//     <nav className="bg-red-50 text-black">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between h-16 items-center">

//           {/* Logo */}
//           <div className="flex items-center gap-2">
//             <span className="text-2xl">👜</span>
//             <span className="font-bold text-lg">Job Portal</span>
//           </div>

//           {/* Desktop Menu */}
//           <div className="hidden md:flex items-center gap-8">
//             <Link href="/" className="hover:text-green-400 font-medium">Home</Link>
//             <Link href="/job/jobcategory" className="hover:text-green-400 font-medium">Jobs</Link>
//             <Link href="/companypage" className="hover:text-green-400 font-medium">Company</Link>
//             <Link href="/about" className="hover:text-green-400 font-medium">About Us</Link>
//             <Link href="/contact" className="hover:text-green-400 font-medium">Contact Us</Link>
//           </div>

//           {/* Desktop Buttons */}
//           <div className="hidden md:flex items-center gap-4">
//             {user ? (
//               <>
//                 <span className="font-medium">👋 Hi, {user.name}</span>
//                 <button
//                   onClick={handleLogout}
//                   className="bg-gray-200 px-4 py-1.5 rounded hover:bg-gray-300 transition"
//                 >
//                   Logout
//                 </button>
//               </>
//             ) : (
//               <>
//                 <Link href="/login/userlogin" className="hover:underline">Login</Link>
//                 <Link
//                   href="/register/registeroption"
//                   className="bg-red-200 px-4 py-1.5 rounded hover:bg-red-700 hover:text-white transition"
//                 >
//                   Register
//                 </Link>
//               </>
//             )}
//           </div>

//           {/* Mobile Menu Button */}
//           <div className="md:hidden">
//             <button onClick={() => setIsOpen(!isOpen)}>
//               {isOpen ? <X size={24} /> : <Menu size={24} />}
//             </button>
//           </div>

//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {isOpen && (
//         <div className="md:hidden bg-black text-white px-4 py-3 space-y-2">
//           <Link href="/" className="block">Home</Link>
//           <Link href="/job/jobapply/frontend" className="block">Jobs</Link>
//           <Link href="/companypage" className="block">Company</Link>
//           <Link href="/about" className="block">About Us</Link>
//           <Link href="/contact" className="block">Contact Us</Link>

//           {user ? (
//             <>
//               <p>👋 Hi, {user.name}</p>
//               <button
//                 onClick={handleLogout}
//                 className="text-red-400"
//               >
//                 Logout
//               </button>
//             </>
//           ) : (
//             <>
//               <Link href="/login/userlogin" className="block">Login</Link>
//               <Link href="/register/registeroption" className="block text-green-400">
//                 Register
//               </Link>
//             </>
//           )}
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;





'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedUser = localStorage.getItem('user');
      if (storedUser) {
        try {
          setUser(JSON.parse(storedUser));
        } catch {
          localStorage.removeItem('user');
        }
      }
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('user');
    setUser(null);
    router.push('/login/userlogin');
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/50 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">

          {/* Logo */}
          <div className="flex items-center gap-2 text-white">
            <span className="text-2xl">👜</span>
            <span className="font-bold text-lg">Job Portal</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8 text-white">
            {[
              { name: 'Home', link: '/' },
              { name: 'Jobs', link: '/job/jobcategory' },
              { name: 'Company', link: '/companypage' },
              { name: 'About Us', link: '/aboutus/aboutdetail' },
              { name: 'Contact Us', link: '/contact' },
            ].map((item) => (
              <Link
                key={item.name}
                href={item.link}
                className="font-medium transition hover:text-blue-400"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Desktop Buttons */}
          <div className="hidden md:flex items-center gap-4 text-white">
            {user ? (
              <>
                <span className="font-medium">👋 Hi, {user.name}</span>
                <button
                  onClick={handleLogout}
                  className="bg-white/10 px-4 py-1.5 rounded-lg hover:bg-blue-500/30 transition"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link href="/login/userlogin" className="hover:text-blue-400 transition">
                  Login
                </Link>
                <Link
                  href="/register/registeroption"
                  className="bg-blue-600/80 px-4 py-1.5 rounded-lg hover:bg-blue-600 transition"
                >
                  Register
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden text-white">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black/70 backdrop-blur-xl text-white px-4 py-4 space-y-3">
          {[
            { name: 'Home', link: '/' },
            { name: 'Jobs', link: '/job/jobcategory' },
            { name: 'Company', link: '/companypage' },
            { name: 'About Us', link: '/about' },
            { name: 'Contact Us', link: '/contact' },
          ].map((item) => (
            <Link
              key={item.name}
              href={item.link}
              className="block transition hover:text-blue-400"
            >
              {item.name}
            </Link>
          ))}

          {user ? (
            <>
              <p className="pt-2">👋 Hi, {user.name}</p>
              <button
                onClick={handleLogout}
                className="text-red-400 hover:text-red-500 transition"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link href="/login/userlogin" className="block hover:text-blue-400">
                Login
              </Link>
              <Link
                href="/register/registeroption"
                className="block text-blue-400 font-medium"
              >
                Register
              </Link>
            </>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
