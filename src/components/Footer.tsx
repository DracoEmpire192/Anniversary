import React from 'react';
import { Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="relative py-10 bg-gradient-to-b from-transparent to-rose-100">
      <div className="container mx-auto px-4 text-center">
        <div className="flex justify-center items-center space-x-2 mb-4">
          <Heart className="text-rose-500" fill="currentColor" size={18} />
          <span className="text-rose-700 font-medium">Forever & Always</span>
          <Heart className="text-rose-500" fill="currentColor" size={18} />
        </div>
        
        <p className="text-gray-600">
          With all our love on this special day, 
          Happy Anniversary Mom and Dad.
        </p>
        
        <div className="mt-8 inline-flex p-3 rounded-full bg-white/50 backdrop-blur-sm shadow-sm">
          <div className="text-xs text-gray-500">
            {new Date().getFullYear()}
          </div>
        </div>
      </div>
    </footer>
  );
};
