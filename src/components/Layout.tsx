import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Zap, Menu, X } from 'lucide-react';
import ScrollToTop from './ScrollToTop';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Careers', path: '/careers' },
    { name: 'Contact', path: '/contact' },
    { name: 'Privacy Policy', path: '/privacy-policy' },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-600 to-blue-800">
      <header className="fixed w-full bg-white bg-opacity-95 shadow-md backdrop-blur-sm z-50 transition-all duration-300">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link to="/" className="flex items-center group">
            <Zap className="text-blue-600 w-6 h-6 sm:w-8 sm:h-8 mr-2 animate-spin-slow group-hover:text-yellow-400 transition-colors duration-300" />
            <h1 className="text-xl sm:text-2xl font-bold text-gray-800 font-display">Malama</h1>
          </Link>
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className={`text-gray-600 hover:text-blue-600 transition-colors duration-300 relative group ${
                      location.pathname === item.path ? 'text-blue-600' : ''
                    }`}
                  >
                    {item.name}
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <button 
            className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors duration-300"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
        {isMenuOpen && (
          <nav className="md:hidden bg-white animate-slide-down">
            <ul className="flex flex-col items-center py-4">
              {navigation.map((item) => (
                <li key={item.name} className="w-full">
                  <Link
                    to={item.path}
                    className={`block py-3 text-center text-gray-600 hover:text-blue-600 hover:bg-gray-50 transition-all duration-300 ${
                      location.pathname === item.path ? 'text-blue-600 bg-gray-50' : ''
                    }`}
                    onClick={toggleMenu}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </header>

      <main className="pt-16">
        {children}
      </main>

      <Footer />

      <ScrollToTop />
    </div>
  );
}