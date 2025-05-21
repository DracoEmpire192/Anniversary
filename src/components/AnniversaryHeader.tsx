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
            Anniversary Celebration
          </h1>
        </div>
        <div className="flex items-center">
          <div className="bg-rose-100 text-rose-800 px-4 py-2 rounded-full font-semibold shadow-sm">
            <AnniversaryCounter />
          </div>
        </div>
      </div>
    </header>
  );
};

const AnniversaryCounter: React.FC = () => {
  // You can change this to the actual anniversary date
  const anniversaryDate = new Date('1990-06-15'); // Example date
  const today = new Date();
  
  const years = today.getFullYear() - anniversaryDate.getFullYear();
  const months = today.getMonth() - anniversaryDate.getMonth();
  const days = today.getDate() - anniversaryDate.getDate();
  
  const adjustedMonths = months < 0 ? months + 12 : months;
  
  return (
    <span>
      {years} Years, {adjustedMonths} Months
    </span>
  );
};