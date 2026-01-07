import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

export default function HelperProfile() {
  const { id } = useParams();
  const [helper, setHelper] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHelper = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `${process.env.REACT_APP_API_URL || 'http://localhost:5000'}/api/helpers/${id}`
        );
        setHelper(response.data);
      } catch (error) {
        console.error('Error fetching helper:', error);
        // Fallback data
        setHelper({
          name: 'Aarti Sharma',
          category: 'Cook',
          experience: 5,
          location: 'Gurgaon',
          salaryExpectation: 8000,
          description: 'Experienced cook with a focus on home-style meals. Available Monday - Saturday.'
        });
      } finally {
        setLoading(false);
      }
    };

    fetchHelper();
  }, [id]);

  // ========== LOADING STATE ==========
  if (loading) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-purple-200 border-t-purple-600 rounded-full animate-spin mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading profile...</p>
        </div>
      </div>
    );
  }

  // ========== MAIN COMPONENT ==========
  return (
    <div className="min-h-[80vh] p-6 bg-gray-50">
      
      {/* MAIN CONTAINER */}
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* ========== PROFILE SIDEBAR ========== */}
        <div className="glass p-6 rounded-xl shadow-sm text-center">
          
          {/* AVATAR */}
          <div className="w-32 h-32 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full mx-auto flex items-center justify-center text-4xl shadow-md border-4 border-white">
            👩‍🍳
          </div>
          
          {/* BASIC INFO */}
          <h3 className="mt-4 text-xl font-semibold text-gray-800">
            {helper.name}
          </h3>
          <p className="text-sm text-gray-600 mt-1">
            {helper.category} • {helper.experience} years experience
          </p>
          
          {/* SALARY */}
          <p className="mt-4 text-2xl font-bold text-purple-600">
            ₹{helper.salaryExpectation || '—'}
          </p>
          <p className="text-xs text-gray-500 mt-1">per month</p>
          
          {/* ACTION BUTTON */}
          <button className="mt-6 w-full py-3 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105">
            Request Service
          </button>
        </div>

        {/* ========== PROFILE DETAILS ========== */}
        <div className="md:col-span-2 space-y-6">
          
          {/* ABOUT SECTION */}
          <div className="glass p-6 rounded-xl shadow-sm">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              About
            </h3>
            <p className="text-gray-600 leading-relaxed">
              {helper.description || 'Experienced cook with a focus on home-style meals. Available Monday - Saturday.'}
            </p>
            
            {/* DETAILS GRID */}
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 bg-white rounded-lg border border-gray-100 shadow-sm">
                <p className="text-sm text-gray-500 mb-1">Location</p>
                <span className="font-semibold text-gray-800">{helper.location}</span>
              </div>
              <div className="p-4 bg-white rounded-lg border border-gray-100 shadow-sm">
                <p className="text-sm text-gray-500 mb-1">Experience</p>
                <span className="font-semibold text-gray-800">{helper.experience} years</span>
              </div>
            </div>
          </div>

          {/* REVIEWS SECTION */}
          <div className="glass p-6 rounded-xl shadow-sm">
            <h4 className="font-semibold text-gray-800 mb-4">Reviews</h4>
            <div className="text-center py-8">
              <div className="text-4xl mb-2">⭐</div>
              <p className="text-gray-600">No reviews yet</p>
              <p className="text-sm text-gray-500 mt-1">Be the first to review this helper</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}