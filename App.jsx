import React, { useState, useEffect, useRef } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/admin/maincontent";
import Sidenavbar from "./pages/admin/sidenavbar";
import Analytics from "./pages/admin/Analytics";
import Connect from "./pages/admin/Connect";
import Dealroom from "./pages/admin/Dealroom";
import Profile from "./pages/admin/Profile";
import Settings from "./pages/admin/Settings";
import Topbar from "./Topbar";
import Adminlanding from "./pages/admin/adminlanding";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const sidebarRef = useRef(null);

  const toggleSidebar = () => {
    setSidebarOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setSidebarOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <Router>
      <div className="dark bg-black min-h-screen text-white flex flex-col">
        <Topbar sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />

        <div className="flex flex-1">
          <div
            ref={sidebarRef}
            className={`fixed top-0 left-0 h-full w-64 bg-black border-r border-[#171717] z-40 transform transition-transform duration-300 md:relative md:translate-x-0 ${
              sidebarOpen ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            <div className="pt-16 md:pt-0">
              <Sidenavbar />
            </div>
          </div>

          <div className="flex-1 ml-0 border-l border-[#171717]">
            <div className="h-full w-full rounded-lg  ">
              <Routes>
                <Route path="/" element={<Adminlanding />} />
                <Route path="/analytics" element={<Analytics />} />
                <Route path="/connect" element={<Connect />} />
                <Route path="/dealroom" element={<Dealroom />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/settings" element={<Settings />} />
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
