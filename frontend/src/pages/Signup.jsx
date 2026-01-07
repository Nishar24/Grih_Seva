import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

export default function Signup() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    role: 'customer'
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    // Basic validation
    if (!formData.name || !formData.email || !formData.password) {
      setError('Please fill in all fields');
      setLoading(false);
      return;
    }

    if (formData.password.length < 6) {
      setError('Password must be at least 6 characters');
      setLoading(false);
      return;
    }

    try {
      await axios.post(
        `${process.env.REACT_APP_API_URL || 'http://localhost:5000'}/api/auth/register`,
        formData
      );
      
      // Success message with better UX
      setError('success');
      setTimeout(() => {
        navigate('/login');
      }, 1500);
      
    } catch (err) {
      const errorMessage = err?.response?.data?.message || 'Registration failed. Please try again.';
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 bg-gradient-to-br from-blue-50 to-purple-50 py-8">
      
      {/* SIGNUP CONTAINER */}
      <div className="w-full max-w-md">
        
        {/* ========== HEADER SECTION ========== */}
        <div className="text-center mb-8">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#7b2ff7] to-[#ff6a88] flex items-center justify-center text-white font-bold text-xl mx-auto mb-4 shadow-lg">
            GS
          </div>
          <h2 className="text-3xl font-bold text-gray-800 mb-2">
            Join GrihSeva
          </h2>
          <p className="text-gray-600">
            Create your account and get started
          </p>
        </div>

        {/* ========== SIGNUP FORM ========== */}
        <div className="glass p-8 rounded-2xl shadow-xl border border-white/50 backdrop-blur-sm">
          
          {/* SUCCESS MESSAGE */}
          {error === 'success' && (
            <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg text-green-700 text-sm">
              ✅ Account created successfully! Redirecting to login...
            </div>
          )}

          {/* ERROR MESSAGE */}
          {error && error !== 'success' && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
              ⚠️ {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* FULL NAME INPUT */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Full Name
              </label>
              <input 
                name="name"
                value={formData.name}
                onChange={handleChange}
                type="text"
                placeholder="Enter your full name"
                className="w-full p-4 rounded-xl border border-gray-200 focus:border-[#7b2ff7] focus:ring-2 focus:ring-[#7b2ff7]/20 transition-all duration-200 outline-none"
                required
                disabled={loading}
              />
            </div>

            {/* EMAIL INPUT */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <input 
                name="email"
                value={formData.email}
                onChange={handleChange}
                type="email"
                placeholder="Enter your email"
                className="w-full p-4 rounded-xl border border-gray-200 focus:border-[#7b2ff7] focus:ring-2 focus:ring-[#7b2ff7]/20 transition-all duration-200 outline-none"
                required
                disabled={loading}
              />
            </div>

            {/* PASSWORD INPUT */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <input 
                name="password"
                value={formData.password}
                onChange={handleChange}
                type="password"
                placeholder="Create a password (min. 6 characters)"
                className="w-full p-4 rounded-xl border border-gray-200 focus:border-[#7b2ff7] focus:ring-2 focus:ring-[#7b2ff7]/20 transition-all duration-200 outline-none"
                required
                disabled={loading}
                minLength="6"
              />
            </div>

            {/* ROLE SELECTION */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                I want to
              </label>
              <select 
                name="role"
                value={formData.role}
                onChange={handleChange}
                className="w-full p-4 rounded-xl border border-gray-200 focus:border-[#7b2ff7] focus:ring-2 focus:ring-[#7b2ff7]/20 transition-all duration-200 outline-none"
                disabled={loading}
              >
                <option value="customer">Find Helpers (Customer)</option>
                <option value="helper">Work as Helper</option>
              </select>
            </div>

            {/* SIGNUP BUTTON */}
            <button 
              type="submit"
              disabled={loading}
              className="w-full py-4 rounded-xl bg-gradient-to-r from-[#7b2ff7] to-[#ff6a88] text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  Creating Account...
                </>
              ) : (
                'Create Account'
              )}
            </button>
          </form>
        </div>

        {/* ========== LOGIN LINK ========== */}
        <div className="text-center mt-6 p-4 bg-white/50 rounded-xl">
          <p className="text-gray-600 text-sm">
            Already have an account?{' '}
            <Link 
              to="/login" 
              className="text-[#7b2ff7] font-semibold hover:text-[#ff6a88] transition-colors duration-200"
            >
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}