import React, { useEffect, useState } from 'react';
import { Heart } from 'lucide-react';

export const AnniversaryHeader: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`sticky top-0 z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-white/80 backdrop-blur-md shadow-md py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Heart 
            className={`transition-colors duration-500 ${
              scrolled ? 'text-red-500' : 'text-rose-600'
            }`} 
            fill="currentColor" 
            size={24} 
          />
          <h1 
            className={`font-serif font-bold transition-colors duration-500 ${
              scrolled ? 'text-gray-800' : 'text-rose-700'
            }`}
          >
            Anniversary Celebration 21 May 2025
          </h1>
        </div>
        <div className="flex items-center">
          <div className="bg-rose-100 text-rose-800 px-4 py-2 rounded-full font-semibold shadow-sm">
            
          </div>
        </div>
      </div>
    </header>
  );
};
