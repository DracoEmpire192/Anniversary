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
            आई म्हणजे मायेचा सागर,
नजरेतच वाचते आपला उदास आधार.
क्षणोक्षणी चिंता तिची आपल्यासाठी,
तिच्या मिठीत जगाचं सुख सामावलेलं असतं किती!
            </p>

            <p className="text-gray-300 leading-relaxed">
            बाबा म्हणजे आधाराचा डोंगर,
शब्द कमी, पण कृतीतून प्रेमाचा झरा खोलवर.
रात्रंदिवस कष्ट करून जग सजवत असतात,
स्वतः झिजून आपल्याला सुखी ठेवतात.
            </p>

            <p className="text-gray-300 leading-relaxed">
            आई-बाबा दोघंही जीवनाचं खंबीर स्तंभ,
त्यांच्याशिवाय वाटतं सगळं काही कुणंही न संपलं.
त्यांचं प्रेम, त्यांची साथ — हीच खरी दौलत,
त्यांचं आशीर्व
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
