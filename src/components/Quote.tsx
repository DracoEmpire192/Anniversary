import React, { useEffect, useState, useRef } from 'react';

export const Quote: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const quoteRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.3,
      }
    );
    
    if (quoteRef.current) {
      observer.observe(quoteRef.current);
    }
    
    return () => observer.disconnect();
  }, []);
  
  return (
    <section 
      ref={quoteRef}
      className="py-20 relative overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-40 h-40 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        <div className="absolute bottom-0 right-0 w-40 h-40 bg-yellow-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      </div>
      
      <div className="max-w-4xl mx-auto px-6 relative">
        <div className={`transition-all duration-1500 transform ${
          isVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-20'
        }`}>
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 md:p-10 shadow-xl border border-pink-100">
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
              <div className="w-12 h-12 bg-rose-500 rounded-full flex items-center justify-center shadow-lg">
                <div className="text-white text-2xl leading-none">"</div>
              </div>
            </div>
            
            <blockquote className="text-center">
              <p className={`text-xl md:text-2xl lg:text-3xl text-gray-700 leading-relaxed font-serif italic transition-all duration-2000 ${
                isVisible ? 'opacity-100' : 'opacity-0'  
              }`}>
                "The best love is the kind that awakens the soul; that makes us reach for more, 
                that plants the fire in our hearts and brings peace to our minds. 
                That's what I hope to give you forever."
              </p>
              
              <footer className={`mt-6 transition-all duration-2000 delay-500 ${
                isVisible ? 'opacity-100' : 'opacity-0'
              }`}>
                <div className="w-16 h-1 bg-rose-300 mx-auto my-4"></div>
                <cite className="text-gray-600 not-italic font-medium">
                  — Nicholas Sparks
                </cite>
              </footer>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};