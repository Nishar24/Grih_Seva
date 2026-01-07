import React from 'react';
import { Link } from 'react-router-dom';

export default function HelperCard({ helper }) {
  return (
    <div className="glass p-4 rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
      
      {/* MAIN CARD CONTENT */}
      <div className="flex items-center gap-4">
        
        {/* ========== AVATAR SECTION ========== */}
        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center border-2 border-white shadow-md">
          <span className="text-2xl">👩‍🍳</span>
        </div>

        {/* ========== INFO SECTION ========== */}
        <div className="flex-1">
          
          {/* HELPER NAME */}
          <h3 className="font-semibold text-gray-800 text-lg">
            {helper.name}
          </h3>
          
          {/* HELPER DETAILS */}
          <p className="text-sm text-gray-600 mt-1">
            <span className="font-medium text-purple-600">
              {helper.category}
            </span>
            {' • '}
            <span className="text-gray-500">
              {helper.experience} years experience
            </span>
          </p>
        </div>

        {/* ========== ACTION BUTTON ========== */}
        <div>
          <Link 
            to={`/helper/${helper._id || '1'}`} 
            className="px-4 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm font-medium hover:shadow-lg transition-all duration-200 hover:scale-105"
          >
            View Profile
          </Link>
        </div>

      </div>
    </div>
  );
}