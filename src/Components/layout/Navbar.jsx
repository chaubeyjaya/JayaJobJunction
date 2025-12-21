'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState(null);
  const router = useRouter();

  // Check if user is logged in (SAFE way)
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedUser = localStorage.getItem('user');

      if (storedUser) {
        try {
          const parsedUser = JSON.parse(storedUser);
          setUser(parsedUser);
        } catch (error) {
          console.error('Invalid user data in localStorage:', error);
          localStorage.removeItem('user');
        }
      }
    }
  }, []);

  // Logout function
  const handleLogout = () => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('user');
    setUser(null);
    router.push('/login/userlogin');
  };

  return (
    <nav className="bg-red-50 text-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">

          {/* Logo */}
          <div className="flex items-center gap-2">
            <span className="text-2xl">👜</span>
            <span className="font-bold text-lg">Job Portal</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="hover:text-green-400 font-medium">Home</Link>
            <Link href="/job/jobcategory" className="hover:text-green-400 font-medium">Jobs</Link>
            <Link href="/companypage" className="hover:text-green-400 font-medium">Company</Link>
            <Link href="/about" className="hover:text-green-400 font-medium">About Us</Link>
            <Link href="/contact" className="hover:text-green-400 font-medium">Contact Us</Link>
          </div>

          {/* Desktop Buttons */}
          <div className="hidden md:flex items-center gap-4">
            {user ? (
              <>
                <span className="font-medium">👋 Hi, {user.name}</span>
                <button
                  onClick={handleLogout}
                  className="bg-gray-200 px-4 py-1.5 rounded hover:bg-gray-300 transition"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link href="/login/userlogin" className="hover:underline">Login</Link>
                <Link
                  href="/register/registeroption"
                  className="bg-red-200 px-4 py-1.5 rounded hover:bg-red-700 hover:text-white transition"
                >
                  Register
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black text-white px-4 py-3 space-y-2">
          <Link href="/" className="block">Home</Link>
          <Link href="/job/jobapply/frontend" className="block">Jobs</Link>
          <Link href="/companypage" className="block">Company</Link>
          <Link href="/about" className="block">About Us</Link>
          <Link href="/contact" className="block">Contact Us</Link>

          {user ? (
            <>
              <p>👋 Hi, {user.name}</p>
              <button
                onClick={handleLogout}
                className="text-red-400"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link href="/login/userlogin" className="block">Login</Link>
              <Link href="/register/registeroption" className="block text-green-400">
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
