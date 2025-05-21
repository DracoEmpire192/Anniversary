import React, { useState, useEffect } from 'react';
import { AnniversaryHeader } from './components/AnniversaryHeader';
import { Greeting } from './components/Greeting';
import { Quote } from './components/Quote';
import { PhotoGallery } from './components/PhotoGallery';
import { Footer } from './components/Footer';
import { EntranceAnimation } from './components/EntranceAnimation';

function App() {
  const [isEntranceComplete, setIsEntranceComplete] = useState(false);

  return (
    <>
      {!isEntranceComplete ? (
        <EntranceAnimation onComplete={() => setIsEntranceComplete(true)} />
      ) : (
        <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-black via-red-950/10 to-black">
          {/* Decorative background elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute -top-24 -left-24 w-96 h-96 bg-red-500/10 rounded-full mix-blend-overlay filter blur-3xl opacity-30 animate-blob"></div>
            <div className="absolute top-1/3 -right-24 w-96 h-96 bg-red-600/10 rounded-full mix-blend-overlay filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
            <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-red-700/10 rounded-full mix-blend-overlay filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
          </div>
          
          <div className="relative z-10">
            <AnniversaryHeader />
            <main className="container mx-auto px-4 py-8">
              <h1 className="text-center text-4xl md:text-5xl font-serif text-red-500 mb-12 animate-glow">
                Happy Anniversary Mom & Dad
                <span className="block text-2xl md:text-3xl mt-4 text-red-400">
                  From your Daughter Shravani Harel
                </span>
              </h1>
              <Greeting />
              <Quote />
              <PhotoGallery />
            </main>
            <Footer />
          </div>
        </div>
      )}
    </>
  );
}

export default App;