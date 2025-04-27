import React from 'react';

const CountryProgress = ({ flag, country, percent, color }) => {
  return (
    <div className="flex items-center gap-4 mb-6">
      <img src={flag} alt={country} className="w-6 h-6 rounded-sm object-cover" />
      <div className="w-full">
        <div className="flex justify-between text-sm mb-1">
          <span className="font-semibold">{country}</span>
          <span>{percent}%</span>
        </div>
        <div className="w-full h-2 bg-gray-700 rounded-full">
          <div
            className="h-2 rounded-full transition-all duration-700"
            style={{
              width: `${percent}%`,
              backgroundColor: color,
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default CountryProgress;
