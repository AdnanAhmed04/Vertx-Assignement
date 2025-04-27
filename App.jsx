import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Dashboard from "./pages/admin/maincontent";
import Sidenavbar from "./pages/admin/sidenavbar";
import Analytics from "./pages/admin/Analytics";
import Connect from "./pages/admin/Connect";
import Dealroom from "./pages/admin/Dealroom";
import Profile from "./pages/admin/Profile";
import Settings from "./pages/admin/Settings";

// Create a small component to show the page name
const Topbar = () => {
  const location = useLocation();

  // Mapping URL paths to Page Names
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
    <div className="p-4 border border-gray-700 flex gap-[12%]">
      <p>Vertxlabs, Inc</p>
      <p>{pageTitle}</p>
    </div>
  );
};

function App() {
  return (
    <Router>
      <div className="dark bg-black min-h-screen text-white">
        {/* Top bar */}
        <Topbar />

        {/* Main content area */}
        <div className="flex">
          {/* Sidebar */}
          <Sidenavbar />

          {/* Pages */}
          <div className="flex-1 p-8">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/analytics" element={<Analytics />} />
              <Route path="/connect" element={<Connect />} />
              <Route path="/dealroom" element={<Dealroom />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/settings" element={<Settings />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
