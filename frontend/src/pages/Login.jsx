import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    // Basic validation
    if (!email || !password) {
      setError('Please fill in all fields');
      setLoading(false);
      return;
    }

    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API_URL || 'http://localhost:5000'}/api/auth/login`,
        { email, password }
      );
      
      localStorage.setItem('token', res.data.token);
      localStorage.setItem('user', JSON.stringify(res.data.user));
      
      navigate('/dashboard');
    } catch (err) {
      const errorMessage = err?.response?.data?.message || 'Login failed. Please try again.';
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 bg-gradient-to-br from-blue-50 to-purple-50 py-8">
      
      {/* LOGIN CONTAINER */}
      <div className="w-full max-w-md">
        
        {/* ========== HEADER SECTION ========== */}
        <div className="text-center mb-8">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#7b2ff7] to-[#ff6a88] flex items-center justify-center text-white font-bold text-xl mx-auto mb-4 shadow-lg">
            GS
          </div>
          <h2 className="text-3xl font-bold text-gray-800 mb-2">
            Welcome Back
          </h2>
          <p className="text-gray-600">
            Sign in to manage requests & bookings
          </p>
        </div>

        {/* ========== LOGIN FORM ========== */}
        <div className="glass p-8 rounded-2xl shadow-xl border border-white/50 backdrop-blur-sm">
          
          {/* ERROR MESSAGE */}
          {error && (
            <div className="mb-6 p-3 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
              ⚠️ {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* EMAIL INPUT */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <input 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="Enter your password"
                className="w-full p-4 rounded-xl border border-gray-200 focus:border-[#7b2ff7] focus:ring-2 focus:ring-[#7b2ff7]/20 transition-all duration-200 outline-none"
                required
                disabled={loading}
              />
            </div>

            {/* LOGIN BUTTON */}
            <button 
              type="submit"
              disabled={loading}
              className="w-full py-4 rounded-xl bg-gradient-to-r from-[#7b2ff7] to-[#ff6a88] text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  Signing in...
                </>
              ) : (
                'Login to Account'
              )}
            </button>
          </form>
        </div>

        {/* ========== SIGNUP LINK ========== */}
        <div className="text-center mt-6 p-4 bg-white/50 rounded-xl">
          <p className="text-gray-600 text-sm">
            Don't have an account?{' '}
            <Link 
              to="/signup" 
              className="text-[#7b2ff7] font-semibold hover:text-[#ff6a88] transition-colors duration-200"
            >
              Create Account
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}