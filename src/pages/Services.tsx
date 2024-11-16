import React from 'react';
import { Car, Plane, Building2 } from 'lucide-react';

const services = [
  {
    icon: Car,
    title: 'City Rides',
    description: 'Efficient and comfortable rides within Bengaluru city limits.',
  },
  {
    icon: Plane,
    title: 'Airport Transfers',
    description: 'Reliable and punctual airport pick-ups and drop-offs.',
  },
  {
    icon: Building2,
    title: 'Corporate Packages',
    description: 'Customized solutions for businesses and their employees.',
  },
];

export default function Services() {
  return (
    <div className="container mx-auto px-4 py-12 sm:py-20">
      <h2 className="text-2xl sm:text-3xl font-bold text-center text-white mb-8 sm:mb-12 font-display">Our Services</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {services.map((service, index) => (
          <div 
            key={service.title}
            className="bg-white bg-opacity-10 p-6 rounded-lg shadow-lg border-t-4 border-yellow-400 transform hover:scale-105 transition-all duration-300"
          >
            <service.icon className="w-12 h-12 text-yellow-400 mb-4" />
            <h3 className="text-lg sm:text-xl font-semibold mb-4 text-white">{service.title}</h3>
            <p className="text-white opacity-90">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}