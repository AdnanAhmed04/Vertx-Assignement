import { useLocation } from "react-router-dom";
import React from "react";

const Topbar = ({ sidebarOpen, toggleSidebar }) => {
  const location = useLocation();

  const pageTitles = {
    "/": "Dashboard",
    "/analytics": "Analytics",
    "/connect": "Connect",
    "/dealroom": "Dealroom",
    "/profile": "Profile",
    "/settings": "Settings",
  };

  const pageTitle = pageTitles[location.pathname] || "Page";

  return (
    <div className="border-b border-[#171717] flex items-center justify-between px-4  bg-black sticky top-0 z-50">
      {/* Left: Sidebar toggle + Titles */}
      <div className="flex items-center gap-4">
        {/* Hamburger / Close button */}
        <button onClick={toggleSidebar} className="md:hidden focus:outline-none">
          {sidebarOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>

        {/* Company + Page Title */}
        <div className="flex flex-col md:p-0 md:flex-row md:items-center gap-1 md:gap-4">
          <p className="text-sm font-semibold md:text-xl p-2">Vertxlabs, Inc</p>
          <p className="text-sm font-semibold hidden md:block  md:px-30 lg:px-34 md:text-2xl">{pageTitle}</p>
        </div>
      </div>

      {/* Right: Buttons */}
      <div className="hidden md:flex items-center ">
        <button className="border border-[#171717] px-4 py-3 hover:bg-[#171717] transition text-sm">Activity</button>
        <button className="border border-[#171717] px-4 py-3 hover:bg-[#171717] transition text-sm">Log out</button>
      </div>
    </div>
  );
};

export default Topbar;
