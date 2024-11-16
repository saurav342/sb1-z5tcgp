import React, { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';

export default function ScrollToTop() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return showScrollTop ? (
    <button
      onClick={scrollToTop}
      className="fixed bottom-6 right-6 p-3 bg-yellow-400 text-blue-800 rounded-full shadow-lg hover:bg-yellow-300 transform hover:scale-110 transition-all duration-300 animate-bounce-in"
      aria-label="Scroll to top"
    >
      <ChevronUp className="w-6 h-6" />
    </button>
  ) : null;
}