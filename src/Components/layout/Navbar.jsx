'use client';
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react'; // You can replace this with another icon if preferred
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-red-50 text-black ">
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
            <Link href="/jobs" className="hover:text-green-400 font-medium">Jobs</Link>
            <Link href="/about" className="hover:text-green-400 font-medium">About Us</Link>
            <Link href="/contact" className="hover:text-green-400 font-medium">Contact Us</Link>
          </div>

          {/* Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <Link href="/login" className="text-black hover:underline">Login</Link>
            <Link
              href="/userregister"
              className="bg-red-200 text-black px-4 py-1.5 rounded hover:bg-red-700 transition"
            >
              Register
            </Link>
          </div>

          {/* Mobile Menu Icon */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-black text-white px-4 py-3 space-y-2">
          <Link href="/" className="block">Home</Link>
          <Link href="/jobs" className="block">Jobs</Link>
          <Link href="/about" className="block">About Us</Link>
          <Link href="/contact" className="block">Contact Us</Link>
          <Link href="/login" className="block">Login</Link>
          <Link href="/register" className="block text-green-400">Register</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
