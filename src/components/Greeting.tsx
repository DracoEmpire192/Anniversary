import React, { useEffect, useState } from 'react';
import { Heart } from 'lucide-react';

export const Greeting: React.FC = () => {
  const [visible, setVisible] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <section className="py-16 md:py-24 flex flex-col items-center justify-center">
      <div className={`transform transition-all duration-1000 ease-out ${
        visible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-10'
      }`}>
        <div className="text-center max-w-4xl mx-auto px-6">
          <div className="inline-block p-3 rounded-full bg-red-900/20 mb-8 border border-red-500/50 shadow-[0_0_15px_rgba(255,0,0,0.5)]">
            <Heart size={40} className="text-red-500 animate-pulse" />
          </div>
          
          <div className="space-y-8 text-left bg-black/40 p-8 rounded-2xl border border-red-500/30 shadow-[0_0_30px_rgba(255,0,0,0.2)]">
            <h2 className="text-2xl md:text-3xl font-serif text-red-500 text-center mb-8 animate-glow">
              Dear Mom and Dad,
            </h2>

            <p className="text-gray-300 leading-relaxed">
              As I sit here writing this letter, my heart overflows with gratitude for the incredible parents you've been to me. I remember those warm Sunday mornings when we'd make pancakes together, Dad telling his signature jokes while Mom orchestrated our little kitchen symphony. Those moments, seemingly simple then, have become treasured memories that I carry with me always.
            </p>

            <p className="text-gray-300 leading-relaxed">
              You've sacrificed so much to give me the best life possible. From working extra hours to fund my education, to staying up late helping with school projects, to teaching me the values that have shaped who I am today. Your unwavering support and guidance have been the foundation of every success I've achieved.
            </p>

            <p className="text-gray-300 leading-relaxed">
              Mom, your strength and compassion have taught me how to face life's challenges with grace. Your warm hugs have been my safe harbor in every storm. Dad, your wisdom and integrity have shown me what it means to be a person of character. Your quiet confidence has given me the courage to chase my dreams.
            </p>

            <p className="text-gray-300 leading-relaxed">
              Today, as I watch you celebrate another year of your beautiful journey together, I'm filled with profound respect and appreciation. Your love story isn't just about romance – it's about partnership, resilience, and unwavering commitment. You've shown me what true love looks like, not just through words, but through countless actions and choices every single day.
            </p>

            <p className="text-gray-300 leading-relaxed">
              Every achievement in my life, every obstacle I've overcome, every dream I've dared to pursue – it all traces back to the foundation you built for me. Your belief in me has been my greatest strength, your love my greatest blessing.
            </p>

            <p className="text-gray-300 leading-relaxed font-semibold mt-8">
              With all my love and eternal gratitude,<br />
              Your loving child
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};