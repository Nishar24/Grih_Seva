// import React from 'react';
// import { Link } from 'react-router-dom';

// export default function Home() {
//   return (
//     <main className="min-h-[80vh] flex items-center justify-center px-4 bg-gradient-to-br from-blue-50 to-purple-50">
      
//       {/* MAIN CONTAINER */}
//       <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
//         {/* ========== HERO CONTENT SECTION ========== */}
//         <div className="space-y-6">
          
//           {/* MAIN HEADLINE */}
//           <h1 
//             className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight"
//             style={{
//               background: 'linear-gradient(90deg, #7b2ff7, #ff6a88)',
//               WebkitBackgroundClip: 'text',
//               backgroundClip: 'text',
//               color: 'transparent'
//             }}
//           >
//             Trusted helpers, at your doorstep
//           </h1>
          
//           {/* SUBTITLE */}
//           <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
//             Find maids, cooks, babysitters, patient caretakers and more. 
//             Trusted profiles with ratings and availability.
//           </p>

//           {/* ACTION BUTTONS */}
//           <div className="flex flex-col sm:flex-row gap-4 pt-4">
//             <Link 
//               to="/helpers" 
//               className="px-8 py-4 rounded-xl bg-gradient-to-r from-[#7b2ff7] to-[#ff6a88] text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 text-center"
//             >
//               Find Helpers
//             </Link>
//             <Link 
//               to="/signup" 
//               className="px-8 py-4 rounded-xl border-2 border-gray-300 text-gray-700 font-semibold hover:border-[#7b2ff7] hover:text-[#7b2ff7] transition-all duration-300 hover:scale-105 text-center"
//             >
//               Become a Helper
//             </Link>
//           </div>
//         </div>

//         {/* ========== SEARCH SECTION ========== */}
//         <div className="flex items-center justify-center">
//           <div className="w-full max-w-md">
            
//             {/* SEARCH CARD */}
//             <div className="glass p-8 rounded-2xl shadow-xl border border-white/50 backdrop-blur-sm">
              
//               {/* CARD HEADER */}
//               <h3 className="text-xl font-semibold mb-6 text-gray-800 text-center">
//                 Quick Search
//               </h3>
              
//               {/* SEARCH INPUTS */}
//               <div className="space-y-4">
//                 <input 
//                   className="w-full p-4 rounded-xl border border-gray-200 focus:border-[#7b2ff7] focus:ring-2 focus:ring-[#7b2ff7]/20 transition-all duration-200 outline-none"
//                   placeholder="Search category, e.g. Cook, Maid" 
//                 />
//                 <input 
//                   className="w-full p-4 rounded-xl border border-gray-200 focus:border-[#7b2ff7] focus:ring-2 focus:ring-[#7b2ff7]/20 transition-all duration-200 outline-none"
//                   placeholder="Location, e.g. Gurgaon" 
//                 />
                
//                 {/* SEARCH BUTTON */}
//                 <button className="w-full py-4 rounded-xl bg-gradient-to-r from-[#7b2ff7] to-[#ff6a88] text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
//                   Search Helpers
//                 </button>
//               </div>
//             </div>
            
//             {/* PRO TIP */}
//             <div className="mt-6 text-center">
//               <p className="text-sm text-gray-500 bg-white/50 rounded-lg py-2 px-4 inline-block">
//                 💡 Pro tip: Use filters to narrow your search
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </main>
//   );
// }


// ========================================================
// Home.jsx  — KaamwaliJobs-like Home (React + Tailwind)
// Uses uploaded mock image at: /mnt/data/A_2D_digital_graphic_design_displays_a_signup_page.png
// ========================================================
import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  const categories = [
    { id: 1, title: "Housekeeping", subtitle: "Maid, Cleaner", icon: "🧹" },
    { id: 2, title: "Cooking", subtitle: "Home Cooks", icon: "👩‍🍳" },
    { id: 3, title: "Elder Care", subtitle: "Patient / Caretaker", icon: "🩺" },
    { id: 4, title: "Baby Care", subtitle: "Nannies", icon: "🍼" },
    { id: 5, title: "Plumbing", subtitle: "Plumber", icon: "🔧" },
    { id: 6, title: "Electrical", subtitle: "Electrician", icon: "💡" },
    { id: 7, title: "Cleaning Deep", subtitle: "Pest & Deep Clean", icon: "🧼" },
    { id: 8, title: "Laundry", subtitle: "Washing & Ironing", icon: "👕" },
  ];

  const featured = [
    { id: 1, name: "Suman Kumari", role: "Cook", rating: 4.8, price: 450 },
    { id: 2, name: "Ramesh Kumar", role: "Plumber", rating: 4.6, price: 800 },
    { id: 3, name: "Kavita Devi", role: "Maid", rating: 4.7, price: 500 },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* ================================================== */}
      {/* HERO: Left - text/search | Right - artwork */}
      {/* ================================================== */}
      <section className="max-w-6xl mx-auto px-6 md:px-8 py-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* LEFT: Headline + Search */}
        <div>
          {/* <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            Trusted helpers at your doorstep
          </h1> */}

          {/* MAIN HEADLINE */}
          <h1 
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight"
            style={{
              background: 'linear-gradient(90deg, #7b2ff7, #ff6a88)',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              color: 'transparent'
            }}
          >
            Trusted helpers, at your doorstep
          </h1>

          <p className="mt-3 text-gray-600">Book verified maids, cooks, caregivers and more — fast & safe.</p>

          {/* SEARCH BAR */}
          <div className="mt-6 bg-white p-4 rounded-lg shadow-sm flex gap-3 items-center">
            <input
              className="flex-1 p-3 border rounded-md outline-none"
              placeholder="Search service, e.g. Cook, Maid, Baby Care"
            />
            <input
              className="w-40 p-3 border rounded-md outline-none"
              placeholder="City / Area"
            />
            <button className="px-5 py-3 rounded-md btn-uc text-white" style={{background: "linear-gradient(90deg,#6F2DBD,#7C3AED)"}}>
              Search
            </button>
          </div>

          {/* Quick categories (mobile inline) */}
          <div className="mt-4 hidden md:flex gap-3 flex-wrap">
            {categories.slice(0,4).map(c => (
              <button key={c.id} className="px-3 py-2 rounded-md bg-white border text-sm shadow-sm">{c.icon} {c.title}</button>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-6 flex gap-3">
            <Link to="/helpers" className="px-6 py-3 rounded-md text-white btn-uc" style={{background: "linear-gradient(90deg,#6F2DBD,#7C3AED)"}}>
              Find Helpers
            </Link>
            <Link to="/signup" className="px-6 py-3 rounded-md border border-gray-200">
              Become a Helper
            </Link>
          </div>
        </div>

        {/* RIGHT: Artwork */}
        <div className="flex items-center justify-center">
          <div className="w-full max-w-md rounded-lg overflow-hidden shadow-lg">
            {/* NOTE: local path to uploaded image */}
            <img
              src={"https://images.pexels.com/photos/4947388/pexels-photo-4947388.jpeg"}
              alt="mock"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </section>

      {/* ================================================== */}
      {/* CATEGORIES GRID — UrbanCompany style cards */}
      {/* ================================================== */}
      <section className="max-w-6xl mx-auto px-6 md:px-8 py-8">
        <div className="bg-white rounded-2xl shadow-sm p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Categories</h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {categories.map(cat => (
              <div key={cat.id} className="flex flex-col items-center gap-2 p-4 rounded-xl hover:shadow-md transition cursor-pointer bg-gray-50 border">
                <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center text-2xl shadow-sm">{cat.icon}</div>
                <div className="text-sm font-medium text-gray-700 text-center">{cat.title}</div>
                <div className="text-xs text-gray-400">{cat.subtitle}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================== */}
      {/* FEATURED HELPERS — cards */}
      {/* ================================================== */}
      <section className="max-w-6xl mx-auto px-6 md:px-8 py-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-semibold">Featured helpers</h3>
          <Link to="/helpers" className="text-sm text-indigo-600">See all</Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {featured.map(h => (
            <div key={h.id} className="bg-white rounded-xl p-4 shadow-sm flex gap-4 items-center">
              <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center text-2xl">👩‍🔧</div>
              <div className="flex-1">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-semibold">{h.name}</h4>
                    <div className="text-xs text-gray-500">{h.role} • {h.rating} ★</div>
                  </div>
                  <div className="text-right">
                    <div className="font-semibold">₹{h.price}</div>
                    <div className="text-xs text-gray-400">per day</div>
                  </div>
                </div>

                <div className="mt-3 flex gap-2">
                  <Link to={`/helper/${h.id}`} className="px-3 py-2 rounded-md border text-sm">View</Link>
                  <button className="px-3 py-2 rounded-md btn-uc text-white" style={{background: "linear-gradient(90deg,#6F2DBD,#7C3AED)"}}>
                    Book
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================================================== */}
      {/* FOOTER (simple) */}
      {/* ================================================== */}
      <footer className="mt-10 bg-white border-t py-6">
        <div className="max-w-6xl mx-auto px-6 md:px-8 text-sm text-gray-600">
          © {new Date().getFullYear()} GrihSeva — All rights reserved.
        </div>
      </footer>
    </div>
  );
}
