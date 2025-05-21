import React, { useEffect, useState } from 'react';
import { Heart } from 'lucide-react';

interface EntranceAnimationProps {
  onComplete: () => void;
}

export const EntranceAnimation: React.FC<EntranceAnimationProps> = ({ onComplete }) => {
  const [stage, setStage] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setStage(1), 1000),
      setTimeout(() => setStage(2), 2500),
      setTimeout(() => setStage(3), 4000),
      setTimeout(() => onComplete(), 5500)
    ];

    return () => timers.forEach(timer => clearTimeout(timer));
  }, [onComplete]);

  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center">
      <div className="relative">
        {/* Envelope */}
        <div className={`transform transition-all duration-1000 ${
          stage >= 1 ? 'scale-110 opacity-100' : 'scale-90 opacity-0'
        }`}>
          <div className="w-80 h-60 bg-gradient-to-br from-red-600 to-red-800 rounded-lg shadow-neon-lg relative overflow-hidden">
            {/* Envelope flap */}
            <div className={`absolute inset-x-0 h-32 bg-gradient-to-b from-red-700 to-red-900 transform origin-top transition-all duration-1000 ${
              stage >= 2 ? '-rotate-180' : 'rotate-0'
            }`} style={{
              clipPath: 'polygon(0 0, 50% 100%, 100% 0)'
            }}></div>
            
            {/* Letter content */}
            <div className={`absolute inset-4 bg-white/90 rounded shadow-lg transform transition-all duration-1000 ${
              stage >= 2 ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
            }`}>
              <div className="h-full flex flex-col items-center justify-center p-4">
                <Heart className="text-red-500 mb-4 animate-pulse" size={32} />
                <p className="text-red-600 text-lg font-serif text-center animate-glow">
                  A Special Message
                  <br />
                  For
                  <br />
                  Mom & Dad
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Floating hearts */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <Heart
              key={i}
              size={16}
              className={`absolute text-red-500 animate-float opacity-0 ${
                stage >= 3 ? 'opacity-100' : ''
              }`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${2 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};