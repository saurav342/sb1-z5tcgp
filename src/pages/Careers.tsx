import React from 'react';

export default function Careers() {
  return (
    <div className="container mx-auto px-4 py-12 sm:py-20">
      <h2 className="text-2xl sm:text-3xl font-bold text-center text-white mb-8 sm:mb-12 font-display">
        Careers at Malama
      </h2>
      <div className="max-w-2xl mx-auto">
        <div className="bg-white bg-opacity-10 p-8 rounded-lg shadow-lg text-white">
          <h3 className="text-xl sm:text-2xl font-semibold text-yellow-400 mb-4">Join Our Team</h3>
          <p className="mb-6">
            We're looking for passionate individuals who want to be part of the sustainable transportation revolution. At Malama, you'll work with cutting-edge electric vehicles and help shape the future of urban mobility.
          </p>
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Current Openings</h4>
            <div className="space-y-4">
              <div className="border border-white border-opacity-20 rounded-lg p-4 hover:bg-white hover:bg-opacity-5 transition-colors duration-300">
                <h5 className="font-semibold">Electric Vehicle Driver</h5>
                <p className="text-sm opacity-90 mt-2">Full-time position • Multiple locations in Bengaluru</p>
              </div>
              <div className="border border-white border-opacity-20 rounded-lg p-4 hover:bg-white hover:bg-opacity-5 transition-colors duration-300">
                <h5 className="font-semibold">Fleet Manager</h5>
                <p className="text-sm opacity-90 mt-2">Full-time position • Central Bengaluru</p>
              </div>
              <div className="border border-white border-opacity-20 rounded-lg p-4 hover:bg-white hover:bg-opacity-5 transition-colors duration-300">
                <h5 className="font-semibold">Customer Support Specialist</h5>
                <p className="text-sm opacity-90 mt-2">Full-time position • Remote</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}