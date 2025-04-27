import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { LineChart, Line, ResponsiveContainer, XAxis, YAxis } from 'recharts';
import { ComposableMap, Geographies, Geography, Marker } from 'react-simple-maps';
import { FaArrowRightLong, FaArrowLeftLong } from 'react-icons/fa6';
import CountryProgress from './CountryProgress';

const pageTitles = {
  '/analytics': 'Overview',
  '/connect': 'Demographics',
};

const visitorData = [
  { date: 'Mar 1', value: 200 }, { date: 'Mar 2', value: 400 }, { date: 'Mar 3', value: 800 },
  { date: 'Mar 4', value: 1200 }, { date: 'Mar 5', value: 1400 }, { date: 'Mar 6', value: 1100 },
  { date: 'Mar 7', value: 950 }, { date: 'Mar 8', value: 1050 }, { date: 'Mar 9', value: 1150 },
  { date: 'Mar 10', value: 1100 }, { date: 'Mar 11', value: 850 }, { date: 'Mar 12', value: 750 },
  { date: 'Mar 13', value: 800 }, { date: 'Mar 14', value: 820 }, { date: 'Mar 15', value: 700 },
  { date: 'Mar 16', value: 680 }, { date: 'Mar 17', value: 720 }, { date: 'Mar 18', value: 700 },
  { date: 'Mar 19', value: 720 }, { date: 'Mar 20', value: 1800 }, { date: 'Mar 21', value: 1200 },
  { date: 'Mar 22', value: 800 }, { date: 'Mar 23', value: 900 }, { date: 'Mar 24', value: 700 },
  { date: 'Mar 25', value: 900 }, { date: 'Mar 26', value: 1100 }, { date: 'Mar 27', value: 1000 },
  { date: 'Mar 28', value: 1300 }, { date: 'Mar 29', value: 800 }, { date: 'Mar 30', value: 1600 },
];

const demographics = [
  { flag: "https://flagcdn.com/w40/in.png", country: "India", percent: 40, color: "#6043f2" },
  { flag: "https://flagcdn.com/w40/us.png", country: "USA", percent: 25, color: "#cf6005" },
  { flag: "https://flagcdn.com/w40/ca.png", country: "Canada", percent: 10, color: "#edba3a" },
  { flag: "https://flagcdn.com/w40/ae.png", country: "UAE", percent: 7, color: "#06be68" },
  { flag: "https://flagcdn.com/w40/pk.png", country: "Pakistan", percent: 2, color: "#02521a" },
];

const markers = [
  { label: 'V', coordinates: [78.9629, 20.5937], color: '#6241ff' },
  { label: 'S', coordinates: [-95.7129, 37.0902], color: '#f26c5b' },
  { label: '2', coordinates: [53.8478, 23.4241], color: '#25d4b1' },
];

const geoUrl = 'https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json';

const CustomDropdown = ({ options, selected, setSelected }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-black border border-gray-800 rounded-md px-4 py-2 flex items-center justify-between w-36 text-sm text-white hover:bg-[#171717]"
      >
        {selected}
        <svg className="w-4 h-4 ml-2" viewBox="0 0 20 20" fill="currentColor">
          <path d="M5.23 7.21a.75.75 0 011.06.02L10 11.584l3.71-4.353a.75.75 0 111.14.976l-4.25 5a.75.75 0 01-1.14 0l-4.25-5a.75.75 0 01.02-1.06z" />
        </svg>
      </button>
      {isOpen && (
        <div className="absolute mt-2 w-36 bg-black border border-gray-700 rounded-md shadow-lg z-10">
          {options.map((option) => (
            <button
              key={option}
              onClick={() => {
                setSelected(option);
                setIsOpen(false);
              }}
              className="block w-full px-4 py-2 text-left text-sm hover:bg-[#171717]"
            >
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

const Dashboard = () => {
  const { pathname } = useLocation();
  const [showAll, setShowAll] = useState(false);
  const [userType, setUserType] = useState("Visitors");
  const [timeRange, setTimeRange] = useState("Last 30 days");
  const [metric, setMetric] = useState("+ Add");

  const pageTitle = pageTitles[pathname] || "Dashboard";
  const displayedCountries = showAll ? demographics : demographics.slice(0, 4);

  return (
    <div className="bg-[#080808] min-h-screen text-white font-sans">
      
      {/* Navigation Buttons */}
      <div className="flex justify-between items-center  bg-[#000000] ">
        <div className="flex ">
          {Object.entries(pageTitles).map(([path, title]) => (
            <Link key={path} to={path}>
              <button className={`px-4 py-2 border border-[#171717]  ${pathname === path ? 'text-white' : 'text-gray-400'} hover:bg-[#171717]`}>
                {title}
              </button>
            </Link>
          ))}
        </div>
        <div className="text-sm cursor-pointer hover:underline px-8 py-2 border border-[#171717] hidden md:block">More</div>
      </div>

      {/* Main Section */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 p-6">

  {/* Left Section (Chart + Title inside Card) */}
  <div className="col-span-1 xl:col-span-2 flex flex-col">
    <div className="bg-black p-6 rounded-2xl flex flex-col flex-grow h-full">
      
      {/* Title */}
      <p className=" text-2xl font-bold mb-6">{pageTitle}</p>

      {/* Dropdowns */}
      <div className="flex flex-wrap gap-4 mb-6">
        <CustomDropdown options={["Visitors", "Admin", "Regular"]} selected={userType} setSelected={setUserType} />
        <CustomDropdown options={["Last 30 days", "Last 15 days", "Last 7 days"]} selected={timeRange} setSelected={setTimeRange} />
        <CustomDropdown options={["+ Add", "Connects", "Interactions", "Impressions"]} selected={metric} setSelected={setMetric} />
      </div>

      {/* Stats */}
      <div className="flex items-center gap-4 mb-6">
        <div className="text-4xl font-bold">13.49K</div>
        <div className="text-green-400 text-sm">
          +469%<br />
          <span className="text-gray-400">(897)</span>
        </div>
      </div>

      {/* Line Chart */}
      <div className="flex-grow  h-48 min-h-[200px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={visitorData}>
            <XAxis dataKey="date" stroke="#888" fontSize={10} />
            <YAxis stroke="#888" fontSize={10} domain={[200, 2000]} />
            <Line type="linear" dataKey="value" stroke="#ffffff" strokeWidth={2} dot={false} />
          </LineChart>
        </ResponsiveContainer>
      </div>

    </div>
  </div>

  {/* Right Section (Insights) */}
  <div className="bg-black p-6 rounded-2xl flex flex-col justify-between h-full">
  <h2 className="text-2xl font-bold mb-6">Insights</h2>
  <div className="space-y-6 flex-grow">
    <div>
      <p className="text-gray-400">Founders</p>
      <p className="text-3xl font-bold">7.4K</p>
      <p className="text-green-400 text-sm">+000%</p>
    </div>
    <div>
      <p className="text-gray-400">Investors</p>
      <p className="text-3xl font-bold">6.09K</p>
      <p className="text-green-400 text-sm">+000%</p>

      <hr className="border-gray-600 my-6 w-full" />

      <button className="text-blue-400 text-sm mt-2 hover:underline flex items-center gap-3">
  View detailed insights <span><FaArrowRightLong  className='mt-1'/></span>
</button>

    </div>
  </div>
</div>


</div>


     {/* Demographics Section */}
<div className="p-6 space-y-2">
  
  <div className="flex flex-col xl:flex-row gap-6 bg-[#000000] p-6 rounded-2xl relative overflow-hidden">
    
    {/* Map Container */}  <h2 className="text-2xl font-bold">Demographics</h2>

    <div className="w-full xl:w-2/3 relative">
      {/* Static Map Image */}
      <img 
        src="../../../public/img1.png" 
        alt="World Map" 
        className="w-full h-[200px] md:h-[450px]  rounded-2xl"
      />

      {/* Markers
      {markers.map(({ label, x, y, color }, idx) => (
        <div
          key={idx}
          className="absolute flex flex-col items-center"
          style={{
            top: `${y}%`,  // y: vertical position (percent)
            left: `${x}%`, // x: horizontal position (percent)
            transform: 'translate(-50%, -50%)', // center the marker
          }}
        >
          <div 
            className="w-5 h-5 rounded-full border-2 border-black"
            style={{ backgroundColor: color }}
          />
          <span className="text-white text-xs font-bold mt-1">{label}</span>
        </div>
      ))} */}
    </div>

    {/* Country Progress */}
    <div className="w-full xl:w-1/3 space-y-4">
      {displayedCountries.map((country, index) => (
        <CountryProgress key={index} {...country} />
      ))}
      <div className="flex justify-end">
        <button
          onClick={() => setShowAll(!showAll)}
          className="text-blue-400 text-sm flex items-center gap-2 hover:underline"
        >
          {showAll ? (
            <><FaArrowLeftLong /> Show less</>
          ) : (
            <>View all</>
          )}
        </button>
      </div>
    </div>
  </div>
</div>

      
    </div>
  );
};

export default Dashboard;
