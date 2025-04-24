// Required packages:
// npm install recharts react-simple-maps d3-geo

import React from 'react';
import { LineChart, Line, ResponsiveContainer } from 'recharts';
import { ComposableMap, Geographies, Geography, Marker } from 'react-simple-maps';

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
  { country: 'India', percent: 40, color: '#6241ff' },
  { country: 'USA', percent: 25, color: '#f26c5b' },
  { country: 'Canada', percent: 10, color: '#ffa726' },
  { country: 'UAE', percent: 7, color: '#25d4b1' },
];

const markers = [
  { label: 'V', coordinates: [78.9629, 20.5937], color: '#6241ff' },
  { label: 'S', coordinates: [-95.7129, 37.0902], color: '#f26c5b' },
  { label: '2', coordinates: [53.8478, 23.4241], color: '#25d4b1' },
];

const geoUrl =
  'https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json';

const Dashboard = () => {
  return (
    <div className="bg-[#0f0f0f] text-white min-h-screen w-full p-8 font-sans">
      <div className="flex gap-4 mb-8">
        <button className="bg-[#1a1a1a] px-6 py-2 rounded-lg">Overview</button>
        <button className="bg-[#1a1a1a] px-6 py-2 rounded-lg">Demographics</button>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 mb-12">
        <div className="col-span-2 bg-[#1a1a1a] p-6 rounded-2xl">
          <div className="flex justify-between mb-4">
            <div>
              <div className='flex gap-4'>
                <select className="bg-[#0f0f0f] text-gray-300 text-sm rounded-md px-3 py-1 border border-gray-700">
                  <option value="Visitors">Visitors</option>
                  <option value="Admin">Admin</option>
                  <option value="Regular">Regular</option>
                </select>
                <select className="bg-[#0f0f0f] text-gray-300 text-sm rounded-md px-3 py-1 border border-gray-700">
                  <option value="30">Last 30 days</option>
                  <option value="15">Last 15 days</option>
                  <option value="7">Last 7 days</option>
                </select>
              </div>
              <div className='flex justify-center items-center gap-4 mt-4'>
                <div className="text-4xl font-bold">13.49K</div>
                <div className=" text-sm">
                  <p className='text-green-400'>+469%</p>
                  <p className='text-gray-400'>(897)</p>
                </div>
              </div>
            </div>
            {/* Filter Dropdown */}

          </div>
          <div className="bg-[#0f0f0f] h-48 rounded-lg">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={visitorData} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
                <Line
                  type="monotone"
                  dataKey="value"
                  stroke="#ffffff"
                  strokeWidth={2}
                  dot={false}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>


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

      <div>
        <h2 className="text-2xl font-bold mb-6">Demographics</h2>
        <div className="bg-[#1a1a1a] p-6 rounded-2xl flex flex-col md:flex-row gap-6">
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
                    style={{ fontFamily: 'sans-serif', fill: '#fff', fontSize: 10, fontWeight: 'bold' }}>
                    {label}
                  </text>
                </Marker>
              ))}
            </ComposableMap>
          </div>

          <div className="w-full md:w-1/3">
            {demographics.map((item, index) => (
              <div key={index} className="mb-4">
                <div className="flex justify-between text-sm mb-1">
                  <span>{item.country}</span>
                  <span>{item.percent}%</span>
                </div>
                <div className="h-2 rounded-full" style={{ backgroundColor: item.color }}></div>
              </div>
            ))}
            <button className="mt-2 text-sm text-blue-400 hover:underline">View all countries</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
