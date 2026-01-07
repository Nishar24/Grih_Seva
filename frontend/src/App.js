import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Page Components
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Helpers from './pages/Helpers';
import HelperProfile from './pages/HelperProfile';
import Dashboard from './pages/Dashboard';

// Layout Components
import Navbar from './components/Navbar';

export default function App() {
  return (
    <BrowserRouter>
      
      {/* ========== LAYOUT COMPONENTS ========== */}
      <Navbar />
      
      {/* ========== MAIN CONTENT ROUTES ========== */}
      <Routes>
        
        {/* PUBLIC ROUTES */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/helpers" element={<Helpers />} />
        <Route path="/helper/:id" element={<HelperProfile />} />
        
        {/* PROTECTED ROUTES (Add authentication later) */}
        <Route path="/dashboard" element={<Dashboard />} />
        
        {/* ========== 404 PAGE ========== */}
        <Route 
          path="*" 
          element={
            <div className="min-h-[80vh] flex items-center justify-center">
              <div className="text-center">
                <h1 className="text-4xl font-bold text-gray-800 mb-4">404</h1>
                <p className="text-gray-600 mb-6">Page not found</p>
                <a 
                  href="/" 
                  className="px-6 py-3 bg-gradient-to-r from-[#7b2ff7] to-[#ff6a88] text-white rounded-lg hover:shadow-lg transition-all duration-200"
                >
                  Go Home
                </a>
              </div>
            </div>
          } 
        />
      </Routes>
    </BrowserRouter>
  );
}