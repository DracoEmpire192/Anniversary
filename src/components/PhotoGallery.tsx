import React, { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react';

// Sample photos - replace with actual photos or keep as placeholder
const photos = [
  {
    id: 1,
    url: "/src/components/SS6.jpeg",
    caption: "The day we first met"
  },
  {
    id: 2,
    url: "/src/components/SS2.jpeg",
    caption: "Our priceless moments"
  },
  {
    id: 3,
    url: "/src/components/F2.jpeg",
    caption: "Family photo"
  },
  {
    id: 4,
    url: "/src/components/SS5.jpeg",
    caption: "Anniversary celebration"
  },
  {
    id: 5,
    url: "/src/components/SS1.jpeg",
    caption: "A special moment"
  }
];

export const PhotoGallery: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const galleryRef = useRef<HTMLDivElement>(null);
  const autoPlayRef = useRef<NodeJS.Timeout>();
  
  const nextPhoto = () => {
    setActiveIndex((prev) => (prev + 1) % photos.length);
  };
  
  const prevPhoto = () => {
    setActiveIndex((prev) => (prev - 1 + photos.length) % photos.length);
  };

  const toggleAutoPlay = () => {
    setIsPlaying(!isPlaying);
  };
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.2,
      }
    );
    
    if (galleryRef.current) {
      observer.observe(galleryRef.current);
    }
    
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isPlaying) {
      autoPlayRef.current = setInterval(() => {
        nextPhoto();
      }, 5000);
    }
    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [isPlaying]);
  
  return (
    <section 
      ref={galleryRef}
      className="py-16 md:py-24"
    >
      <div className="max-w-5xl mx-auto">
        <h2 className={`text-3xl md:text-4xl font-bold text-center mb-12 font-serif transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <span className="text-white-800">Treasured</span>
          <span className="text-yellow-600 ml-2">Memories</span>
        </h2>
        
        <div className={`relative transition-all duration-1500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
        }`}>
          <div className="relative overflow-hidden rounded-2xl shadow-2xl h-[500px] bg-gray-100">
            {photos.map((photo, index) => (
              <div 
                key={photo.id}
                className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                  index === activeIndex 
                    ? 'opacity-100 translate-x-0 z-10' 
                    : index < activeIndex 
                      ? 'opacity-0 -translate-x-full z-0' 
                      : 'opacity-0 translate-x-full z-0'
                }`}
              >
                <img 
                  src={photo.url} 
                  alt={photo.caption}
                  className="w-full h-full object-cover" 
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                  <p className="text-white text-xl font-medium">{photo.caption}</p>
                </div>
              </div>
            ))}
            
            <button 
              onClick={prevPhoto}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/30 hover:bg-white/50 backdrop-blur-sm text-white p-2 rounded-full shadow-lg z-20 transition"
              aria-label="Previous photo"
            >
              <ChevronLeft size={24} />
            </button>
            
            <button 
              onClick={nextPhoto}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/30 hover:bg-white/50 backdrop-blur-sm text-white p-2 rounded-full shadow-lg z-20 transition"
              aria-label="Next photo"
            >
              <ChevronRight size={24} />
            </button>

            <button
              onClick={toggleAutoPlay}
              className="absolute bottom-4 right-4 bg-white/30 hover:bg-white/50 backdrop-blur-sm text-white p-2 rounded-full shadow-lg z-20 transition"
              aria-label={isPlaying ? "Pause slideshow" : "Play slideshow"}
            >
              {isPlaying ? <Pause size={20} /> : <Play size={20} />}
            </button>
          </div>
          
          <div className="flex justify-center mt-4 gap-2">
            {photos.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  activeIndex === index 
                    ? 'bg-rose-500 scale-110' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to photo ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
