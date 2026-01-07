import React from 'react';

export default function Dashboard() {
  return (
    <div className="min-h-[80vh] p-6 bg-gray-50">
      
      {/* MAIN CONTAINER */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6">
        
        {/* ========== SIDEBAR SECTION ========== */}
        <aside className="md:col-span-1 glass p-6 rounded-xl shadow-sm">
          
          {/* SIDEBAR HEADER */}
          <h4 className="font-semibold text-lg text-gray-800 mb-4">
            Dashboard
          </h4>
          
          {/* NAVIGATION MENU */}
          <ul className="text-sm space-y-3">
            <li className="p-2 rounded-lg hover:bg-purple-50 hover:text-purple-600 cursor-pointer transition-colors duration-200 font-medium">
              My Requests
            </li>
            <li className="p-2 rounded-lg hover:bg-purple-50 hover:text-purple-600 cursor-pointer transition-colors duration-200 font-medium">
              My Earnings
            </li>
            <li className="p-2 rounded-lg hover:bg-purple-50 hover:text-purple-600 cursor-pointer transition-colors duration-200 font-medium">
              Profile
            </li>
          </ul>
        </aside>

        {/* ========== MAIN CONTENT SECTION ========== */}
        <main className="md:col-span-3">
          
          {/* WELCOME CARD */}
          <div className="glass p-6 rounded-xl shadow-sm">
            
            {/* WELCOME HEADER */}
            <div className="mb-6">
              <h3 className="font-semibold text-xl text-gray-800">
                Welcome back!
              </h3>
              <p className="text-sm text-gray-600 mt-1">
                Overview of recent requests and earnings
              </p>
            </div>

            {/* STATS GRID */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              
              {/* PENDING REQUESTS CARD */}
              <div className="p-4 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200">
                <p className="text-sm text-gray-600 mb-2">Pending Requests</p>
                <span className="font-bold text-2xl text-purple-600">2</span>
              </div>
              
              {/* COMPLETED CARD */}
              <div className="p-4 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200">
                <p className="text-sm text-gray-600 mb-2">Completed</p>
                <span className="font-bold text-2xl text-green-600">10</span>
              </div>
              
              {/* EARNINGS CARD */}
              <div className="p-4 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200">
                <p className="text-sm text-gray-600 mb-2">Earnings</p>
                <span className="font-bold text-2xl text-blue-600">₹12,000</span>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}