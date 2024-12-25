import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Clock, Leaf, Award, Star, Users, CarFront, Wallet } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Safe & Secure',
    description: 'Verified drivers and advanced vehicle tracking for your safety'
  },
  {
    icon: Clock,
    title: 'On-Time Pickup',
    description: 'Punctual service with real-time arrival updates'
  },
  {
    icon: Leaf,
    title: 'Eco-Friendly',
    description: '100% electric fleet for a sustainable future'
  },
  {
    icon: Award,
    title: 'Best Rates',
    description: 'Competitive pricing with no hidden charges'
  }
];

const stats = [
  { number: '50+', label: 'Electric Cars' },
  { number: '200+', label: 'Daily Rides' },
  { number: '15K+', label: 'Happy Customers' },
  { number: '4.9', label: 'Customer Rating' }
];

const whyChooseUs = [
  {
    icon: CarFront,
    title: 'Premium Fleet',
    description: 'Modern electric vehicles equipped with latest amenities'
  },
  {
    icon: Users,
    title: 'Expert Drivers',
    description: 'Professional, trained, and courteous chauffeurs'
  },
  {
    icon: Wallet,
    title: 'Transparent Pricing',
    description: 'Clear upfront rates with no surge pricing'
  }
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero container mx-auto px-4 py-20 sm:py-32 text-center">
        <div className="animate-fade-in">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6 font-display">
            Eco-Friendly Rides in Bengaluru
          </h2>
          <p className="text-lg sm:text-xl text-white mb-6 sm:mb-8 opacity-90">
            Experience the future of transportation with Malama's electric cab service
          </p>
          {/* <Link
            to="/services"
            className="inline-block bg-yellow-400 text-blue-800 font-bold py-3 px-8 rounded-full hover:bg-yellow-300 hover:transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Book a Ride
          </Link> */}
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white bg-opacity-10 backdrop-blur-sm py-16 sm:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div 
                key={feature.title}
                className="text-white text-center p-6 rounded-lg hover:bg-white hover:bg-opacity-5 transition-all duration-300"
              >
                <feature.icon className="w-12 h-12 mx-auto mb-4 text-yellow-400" />
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="opacity-80">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={stat.label}
                className="text-center"
              >
                <div className="text-3xl sm:text-4xl font-bold text-yellow-400 mb-2 font-display">
                  {stat.number}
                </div>
                <div className="text-white opacity-90">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-white bg-opacity-5 py-16 sm:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-white mb-12 font-display">
            Why Choose Malama
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => (
              <div 
                key={item.title}
                className="bg-white bg-opacity-10 p-6 rounded-lg text-white group hover:bg-opacity-20 transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-yellow-400 bg-opacity-20 rounded-lg mr-4 group-hover:bg-opacity-30 transition-all duration-300">
                    <item.icon className="w-6 h-6 text-yellow-400" />
                  </div>
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                </div>
                <p className="opacity-80">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center bg-white bg-opacity-10 p-8 rounded-lg">
            <div className="flex justify-center mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
              ))}
            </div>
            <blockquote className="text-lg sm:text-xl text-white mb-6 italic">
              "Malama has transformed my daily commute. The electric cars are comfortable, 
              the drivers are professional, and I feel good about reducing my carbon footprint."
            </blockquote>
            <div className="text-white">
              <div className="font-semibold">Priya Sharma</div>
              <div className="opacity-80 text-sm">Regular Customer</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-24 bg-gradient-to-r from-blue-700 to-blue-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 font-display">
            Ready to Experience the Future of Transportation?
          </h2>
          <p className="text-lg text-white opacity-90 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who have made the switch to eco-friendly rides.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-yellow-400 text-blue-800 font-bold py-3 px-8 rounded-full hover:bg-yellow-300 hover:transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Get Started Today
          </Link>
        </div>
      </section>
    </>
  );
}