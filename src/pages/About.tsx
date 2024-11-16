import React from 'react';

export default function About() {
  return (
    <div className="container mx-auto px-4 py-12 sm:py-20">
      <h2 className="text-2xl sm:text-3xl font-bold text-center text-white mb-8 sm:mb-12 font-display">About Malama</h2>
      <div className="flex flex-col md:flex-row -mx-4">
        <div className="w-full md:w-1/2 px-4 mb-8 md:mb-0">
          <img 
            src="https://images.unsplash.com/photo-1593941707882-a5bba14938c7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
            alt="Electric Car" 
            className="rounded-lg shadow-md w-full h-auto animate-fade-in"
          />
        </div>
        <div className="w-full md:w-1/2 px-4">
          <div className="bg-white bg-opacity-10 p-6 rounded-lg shadow-lg text-white">
            <p className="leading-relaxed mb-4">
              Malama is Bengaluru's premier electric cab service, committed to providing eco-friendly transportation solutions. Our fleet of state-of-the-art electric vehicles offers a comfortable, quiet, and emission-free ride through the bustling streets of Bengaluru.
            </p>
            <p className="leading-relaxed">
              By choosing Malama, you're not just getting from point A to B; you're contributing to a cleaner, greener future for our city. Join us in our mission to reduce carbon emissions and make Bengaluru a more sustainable place to live.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}