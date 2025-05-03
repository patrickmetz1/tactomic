
import React, { useRef, useEffect } from 'react';
import { CheckCircle, ChevronDown } from 'lucide-react';

const Benefits = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);
  const puzzleBubbleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1
    });
    if (sectionRef.current) observer.observe(sectionRef.current);
    if (imageRef.current) observer.observe(imageRef.current);
    if (contentRef.current) observer.observe(contentRef.current);
    if (puzzleBubbleRef.current) observer.observe(puzzleBubbleRef.current);
    itemsRef.current.forEach(item => {
      if (item) observer.observe(item);
    });
    return () => observer.disconnect();
  }, []);

  const benefits = ["Reclaim your time", "Increase exit value", "Build administrative durability", "Reduce financial and personnel risk", "Be prepared for tax filings"];

  return <section id="benefits" className="section-padding bg-book-50/30" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <div className="w-full lg:w-1/2 relative opacity-0" ref={imageRef}>
            <div className="absolute -z-10 w-72 h-72 bg-book-100 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
            
            {/* Puzzle bubble added here - updated width, height, and text size */}
            <div 
              className="bg-[#171629] text-white font-medium p-6 rounded-xl shadow-lg flex flex-col justify-center mx-auto max-w-md h-52 opacity-0 tech-hover" 
              ref={puzzleBubbleRef}
            >
              <div className="flex items-center gap-3 mb-3">
                <img 
                  src="/lovable-uploads/1695440a-edf0-4c0b-b5e7-b4e914eb809f.png" 
                  alt="Puzzle Logo" 
                  className="w-6 h-6 flex-shrink-0"
                />
                <span className="text-lg">
                  Tactomic partners with <span className="text-[#50FAAB]">Puzzle</span>, the AI-native ledger, to provide clients with tech-driven accounting services. Harmonize your tech-stack through <span className="text-[#50FAAB]">Puzzle's</span> seamless integrations.
                </span>
              </div>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 opacity-0" ref={contentRef}>
            <div className="inline-block px-3 py-1 rounded-full bg-book-100 text-book-800 font-medium mb-4">
              Why Choose Us
            </div>
            <h2 className="heading-lg mb-6">Save time and money with outsourced office operations.</h2>
            <p className="text-foreground/80 mb-8">Don't just get a bookkeeper, get a partner that shares your vision for your tech-enabled organization. We actively seek digital innovations that can deliver meaningful value to our clients. We stay on the cutting edge so you don't have to.</p>
            
            <div className="space-y-4">
              {benefits.map((benefit, index) => <div key={index} className="flex items-start gap-3 opacity-0" ref={el => itemsRef.current[index] = el} style={{
              animationDelay: `${(index + 1) * 100}ms`
            }}>
                  <CheckCircle className="text-book-600 mt-0.5 flex-shrink-0" />
                  <p>{benefit}</p>
                </div>)}
            </div>
          </div>
        </div>
        
        <div className="flex justify-center mt-10">
          <div className="text-book-600 font-medium flex items-center gap-2">
            Find Your Solution
            <ChevronDown className="w-4 h-4 animate-bounce" />
          </div>
        </div>
      </div>
    </section>;
};
export default Benefits;
