import React, { useState } from 'react';
import { LineChart, Line, ResponsiveContainer } from 'recharts';
import { ComposableMap, Geographies, Geography, Marker } from 'react-simple-maps';
import CountryProgress from './CountryProgress'; // import CountryProgress
import { FaArrowRightLong } from "react-icons/fa6";
import { FaArrowLeftLong } from "react-icons/fa6";
import { Link, useLocation } from "react-router-dom";

const visitorData = [
  { date: 'Mar 1', value: 400 },
  { date: 'Mar 5', value: 1400 },
  { date: 'Mar 10', value: 1100 },
  { date: 'Mar 15', value: 700 },
  { date: 'Mar 20', value: 1800 },
  { date: 'Mar 25', value: 900 },
  { date: 'Mar 30', value: 1600 },
];

const demographics = [
  {
    flag: "https://flagcdn.com/w40/in.png",
    country: "India",
    percent: 40,
    color: "#6241ff",
  },
  {
    flag: "https://flagcdn.com/w40/us.png",
    country: "USA",
    percent: 25,
    color: "#f26c5b",
  },
  {
    flag: "https://flagcdn.com/w40/ca.png",
    country: "Canada",
    percent: 10,
    color: "#ffa726",
  },
  {
    flag: "https://flagcdn.com/w40/ae.png",
    country: "UAE",
    percent: 7,
    color: "#25d4b1",
  },
  {
    flag: "https://flagcdn.com/w40/pk.png",
    country: "Pakistan",
    percent: 2,
    color: "#02521a",
  },
];

const markers = [
  { label: 'V', coordinates: [78.9629, 20.5937], color: '#6241ff' },
  { label: 'S', coordinates: [-95.7129, 37.0902], color: '#f26c5b' },
  { label: '2', coordinates: [53.8478, 23.4241], color: '#25d4b1' },
];

const geoUrl = 'https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json';

const Dashboard = () => {
  const [showAll, setShowAll] = useState(false);
  const { pathname } = useLocation(); // Get current path
  const displayedCountries = showAll ? demographics : demographics.slice(0, 4);

  const handleToggle = () => {
    setShowAll(!showAll);
  };

  return (
    <div className="bg-[#0f0f0f] text-white min-h-screen w-full p-8 font-sans">
      {/* Buttons */}
      <div className="flex gap-4 mb-8">
        <Link to="/analytics">
          <button
            className={`px-6 py-2 rounded-lg ${pathname === '/analytics' ? 'text-white' : 'text-gray-400'}`}
          >
            Overview
          </button>
        </Link>

        <Link to="/connect">
          <button
            className={`px-6 py-2 rounded-lg ${pathname === '/connect' ? 'text-white' : 'text-gray-400'}`}
          >
            Demographics
          </button>
        </Link>
      </div>

      {/* Visitors and Insights */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 mb-12">
        <div className="col-span-2 bg-[#1a1a1a] p-6 rounded-2xl">
          {/* Visitors Line Chart */}
          <div className="flex justify-between mb-4">
            <div>
              <div className='flex gap-4'>
                <select className="bg-[#0f0f0f] text-gray-300 text-sm rounded-md px-3 py-1 border border-gray-800">
                  <option value="Visitors">Visitors</option>
                  <option value="Admin">Admin</option>
                  <option value="Regular">Regular</option>
                </select>
                <select className="bg-[#0f0f0f] text-gray-300 text-sm rounded-md px-3 py-1 border border-gray-800">
                  <option value="30">Last 30 days</option>
                  <option value="15">Last 15 days</option>
                  <option value="7">Last 7 days</option>
                </select>
                <select className="bg-[#0f0f0f] text-gray-300 text-sm rounded-md px-3 py-1 border border-gray-800">
                  <option value="30">+ Add</option>
                  <option value="15">Connects</option>
                  <option value="7">Interactions</option>
                  <option value="7">Impressions</option>
                </select>
              </div>
              <div className='flex justify-center items-center gap-4 mt-4'>
                <div className="text-4xl font-bold">13.49K</div>
                <div className="text-sm">
                  <p className='text-green-400'>+469%</p>
                  <p className='text-gray-400'>(897)</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[#0f0f0f] h-48 rounded-lg">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={visitorData} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
                <Line type="monotone" dataKey="value" stroke="#ffffff" strokeWidth={2} dot={false} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Insights Panel */}
        <div className="bg-[#1a1a1a] p-6 rounded-2xl">
          <h2 className="text-xl font-semibold mb-6">Insights</h2>
          <div className="mb-6">
            <h3 className="text-sm text-gray-400">Founders</h3>
            <p className="text-2xl font-bold">7.4K</p>
            <p className="text-green-400 text-sm">+000%</p>
          </div>
          <div>
            <h3 className="text-sm text-gray-400">Investors</h3>
            <p className="text-2xl font-bold">6.09K</p>
            <p className="text-green-400 text-sm">+000%</p>
          </div>
          <button className="mt-6 text-sm text-blue-400 hover:underline">View detailed insights</button>
        </div>
      </div>

      {/* Demographics Section */}
      <div>
        <h2 className="text-2xl font-bold mb-6">Demographics</h2>
        <div className="bg-[#1a1a1a] p-6 rounded-2xl flex flex-col md:flex-row gap-6">
          {/* Map */}
          <div className="w-full md:w-2/3 h-[400px] relative">
            <ComposableMap projection="geoEqualEarth" projectionConfig={{ scale: 120 }}>
              <Geographies geography={geoUrl}>
                {({ geographies }) =>
                  geographies.map((geo) => (
                    <Geography key={geo.rsmKey} geography={geo} fill="#1f1f1f" stroke="#444" />
                  ))
                }
              </Geographies>
              {markers.map(({ label, coordinates, color }, idx) => (
                <Marker key={idx} coordinates={coordinates}>
                  <circle r={12} fill={color} stroke="#000" strokeWidth={2} />
                  <text
                    textAnchor="middle"
                    y={5}
                    style={{ fontFamily: 'sans-serif', fill: '#fff', fontSize: 10, fontWeight: 'bold' }}
                  >
                    {label}
                  </text>
                </Marker>
              ))}
            </ComposableMap>
          </div>

          <div className="w-full md:w-2/3">
            {displayedCountries.map((item, index) => (
              <CountryProgress
                key={index}
                flag={item.flag}
                country={item.country}
                percent={item.percent}
                color={item.color}
              />
            ))}

            <div className="flex justify-end">
              <button
                onClick={handleToggle}
                className="mt-2 text-sm text-blue-400 hover:underline flex items-center gap-2"
              >
                {showAll ? (
                  <>
                    <FaArrowLeftLong className='mt-1' /> Show less countries
                  </>
                ) : (
                  <>
                    View all countries <FaArrowRightLong className='mt-1' />
                  </>
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
