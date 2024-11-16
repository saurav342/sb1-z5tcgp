import React from 'react';
import { MapPin, PhoneCall, Mail, Twitter, MessageCircle } from 'lucide-react';

export default function Contact() {
  return (
    <div className="container mx-auto px-4 py-12 sm:py-20">
      <h2 className="text-2xl sm:text-3xl font-bold text-center text-white mb-8 sm:mb-12 font-display">Contact Us</h2>
      <div className="flex flex-col md:flex-row -mx-4">
        <div className="w-full md:w-1/2 px-4 mb-8 md:mb-0">
          <form className="bg-white bg-opacity-10 p-6 rounded-lg shadow-lg space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 bg-white bg-opacity-20 border border-white border-opacity-20 rounded-lg text-white placeholder-white placeholder-opacity-70 focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-300"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 bg-white bg-opacity-20 border border-white border-opacity-20 rounded-lg text-white placeholder-white placeholder-opacity-70 focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-300"
            />
            <textarea
              placeholder="Your Message"
              rows={4}
              className="w-full p-3 bg-white bg-opacity-20 border border-white border-opacity-20 rounded-lg text-white placeholder-white placeholder-opacity-70 focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-300"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-yellow-400 text-blue-800 font-bold py-3 px-6 rounded-lg hover:bg-yellow-300 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Send Message
            </button>
          </form>
        </div>
        <div className="w-full md:w-1/2 px-4">
          <div className="bg-white bg-opacity-10 p-6 rounded-lg shadow-lg space-y-6">
            {[
              { Icon: MapPin, text: '123 Blue Street, Bengaluru, Karnataka 560001' },
              { Icon: PhoneCall, text: '+91 80 1234 5678' },
              { Icon: Mail, text: 'info@malamacabs.com' },
            ].map(({ Icon, text }, index) => (
              <div key={index} className="flex items-center group">
                <Icon className="text-yellow-400 w-6 h-6 mr-3 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                <span className="text-white opacity-90 group-hover:opacity-100 transition-opacity duration-300">{text}</span>
              </div>
            ))}
            <div className="flex items-center mt-8 space-x-4">
              {[
                { Icon: Twitter, href: 'https://twitter.com/malamacabs' },
                { Icon: MessageCircle, href: 'https://wa.me/918012345678' },
              ].map(({ Icon, href }, index) => (
                <a
                  key={index}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-blue-700 rounded-full hover:bg-blue-600 transform hover:scale-110 transition-all duration-300"
                >
                  <Icon className="text-yellow-400 w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}