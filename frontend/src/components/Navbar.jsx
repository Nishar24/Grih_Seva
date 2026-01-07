import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-white/60 backdrop-blur-md sticky top-0 z-30 shadow-sm border-b border-gray-100">
      
      {/* MAIN CONTAINER */}
      <div className="max-w-6xl mx-auto flex items-center justify-between py-4 px-4">
        
        {/* ========== LOGO SECTION ========== */}
        <Link 
          to='/' 
          className="flex items-center gap-3 hover:scale-105 transition-transform duration-200"
        >
          {/* LOGO ICON */}
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#7b2ff7] to-[#ff6a88] flex items-center justify-center text-white font-bold shadow-lg">
            GS
          </div>
          
          {/* LOGO TEXT */}
          <span className="font-semibold text-lg bg-gradient-to-r from-[#7b2ff7] to-[#ff6a88] bg-clip-text text-transparent">
            GrihSeva
          </span>
        </Link>

        {/* ========== DESKTOP NAVIGATION ========== */}
        <div className="hidden md:flex items-center gap-6 text-sm">

          {/* CONTACT US Link */}
          <Link to="/contact us"
          className="hover:text-[#7b2ff7] transition-colors duration-200 font-medium"
          >
            Contact Us
          </Link>
          
          {/* HELPERS LINK */}
          <Link 
            to="/helpers" 
            className="hover:text-[#7b2ff7] transition-colors duration-200 font-medium"
          >
            Helpers
          </Link>
          
          {/* DASHBOARD LINK */}
          <Link 
            to="/dashboard" 
            className="hover:text-[#7b2ff7] transition-colors duration-200 font-medium"
          >
            Dashboard
          </Link>
          
          {/* LOGIN BUTTON */}
          <Link 
            to="/login" 
            className="px-4 py-2 rounded-md text-white bg-gradient-to-r from-[#7b2ff7] to-[#ff6a88] shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105 font-medium"
          >
            Login
          </Link>
        </div>

        {/* ========== MOBILE NAVIGATION ========== */}
        <div className="md:hidden">
          <Link 
            to="/login" 
            className="px-3 py-2 rounded-md text-white bg-gradient-to-r from-[#7b2ff7] to-[#ff6a88] shadow-lg hover:shadow-xl transition-all duration-200 font-medium"
          >
            Login
          </Link>
        </div>

      </div>
    </nav>
  );
}