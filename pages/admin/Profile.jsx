import React from "react";
import { Mail, Linkedin, X } from "lucide-react"; // using lucide icons
import { FaRegBuilding } from "react-icons/fa";
import { SiTicktick } from "react-icons/si";


const Profile = () => {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Navbar */}
      <nav className="flex items-center justify-center md:justify-between p-0 border-b border-gray-900 overflow-x-auto">
        <div className="flex">
          {['Overview', 'Portfolio', 'Experience', 'Media'].map((item, idx) => (
            <button
              key={item}
              className={`flex-1 text-white text-sm md:text-base py-3 px-4 hover:bg-gray-800 ${item === 'More' ? 'hidden md:block' : ''} ${idx !== 0 ? 'border-l border-gray-700' : ''}`}
            >
              {item}
            </button>
          ))}
        </div>
        <div className="hidden md:block">
          <p className="px-8">More</p>

        </div>
      </nav>

      {/* Content */}
      <div className="p-4 md:p-8 space-y-8">
        {/* Overview Title */}
        <h1 className="text-2xl md:text-3xl font-bold">Overview</h1>

        {/* Profile Card */}
        <div className="bg-gray-900 p-4 md:p-6 rounded-2xl flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
          <div className="bg-gray-700 rounded-full w-16 h-16"></div>
          <div className="text-center  md:text-left">
          <h2 className="text-lg md:text-xl flex justify-center md:justify-start gap-4 items-center font-semibold">
  Mr Adnan <SiTicktick className="text-green-400" />
</h2>
         <div className="flex justify-items-center gap-2">
         <p className="text-sm clear-bothf;ex ">Co-Founder & CEO @Vertx</p>
         <img className="w-4 h-4" src="../../../public/img2.png" alt="" srcset="" />
          
         </div>
          
            <span className="inline-block mt-1 px-2 py-0.5 bg-gray-700 text-xs rounded">Entrepreneur</span>
            <div className="flex justify-center md:justify-start space-x-4 mt-2">
              <Linkedin className="w-5 h-5 cursor-pointer" />
              <X className="w-5 h-5 cursor-pointer" />
              <Mail className="w-5 h-5 cursor-pointer" />
            </div>
          </div>
        </div>

        {/* Founded Companies and Experience */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Founded Companies */}
          <div className="bg-gray-900 p-4 md:p-6 rounded-2xl">
            <h3 className="text-lg font-semibold mb-4">Founded Companies</h3>
            <div className="text-3xl md:text-[64px] font-bold mb-4">02</div>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold">Vertx <span className="text-green-400 text-xs ml-2">LIVE</span></h4>
                <p className="text-sm text-gray-400">Founded in 2025, in Fintech.</p>
                <button className="text-blue-400 text-xs mt-1 cursor-pointer">View Profile</button>
              </div>
              <div>
                <h4 className="font-semibold">Company <span className="text-blue-400 text-xs ml-2 cursor-pointer">PROPRIETARY</span></h4>
                <p className="text-sm text-gray-400">Details/information like acquired text/m5a</p>
                <button className="text-blue-400 text-xs mt-1 cursor-pointer">View Profile</button>
              </div>
            </div>
          </div>

          {/* Experience */}
          <div className="bg-gray-900 p-4 md:p-6 rounded-2xl">
            <h3 className="text-lg font-semibold mb-4">Experience</h3>
            <div className="text-3xl md:text-[64px] font-bold mb-4">03</div>
            <div className="space-y-4">
              {['Company 1', 'Company 2', 'Company 3'].map((company, idx) => (
                <div key={idx}>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center ">
                      <div className="w-6 h-6 flex justify-between items-center">
                        <p><FaRegBuilding />
                        </p>
                      </div>
                      <span>{company}</span>
                    </div>
                    <button className="text-blue-400 text-xs cursor-pointer">View Profile</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;