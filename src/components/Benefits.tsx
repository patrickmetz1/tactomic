
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

  const benefits = ['Increase exit value', 'Build administrative durability', 'Reduce financial and personnel risk', 'Stay tax ready'];

  return (
    <section id="benefits" className="section-padding relative overflow-hidden" ref={sectionRef}>
      <div className="absolute top-0 left-0 -z-10 w-full h-full bg-gradient-to-b from-book-50/20 via-book-50/40 to-book-50/60" />

      <div className="container mx-auto px-4 lg:px-8">
        {/* === Header === */}
        <div className="text-center mb-10">
          <h2 className="heading-lg mb-4">Why Choose Tactomic?</h2>
        </div>

        {/* === Benefits Items === */}
        <div className="flex justify-center opacity-0" ref={contentRef}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mb-8">
            {benefits.map((benefit, index) => (
              <div 
                key={index} 
                className="flex flex-col items-center text-center gap-2 opacity-0 bg-white/80 backdrop-blur-sm p-4 rounded-lg shadow-sm" 
                ref={el => itemsRef.current[index] = el} 
                style={{
                  animationDelay: `${(index + 1) * 100}ms`
                }}
              >
                <CheckCircle className="text-book-600 h-6 w-6" />
                <p className="text-foreground/90 text-sm md:text-base">{benefit}</p>
              </div>
            ))}
          </div>
        </div>

        {/* === Puzzle Graphic === */}
        <div className="w-full flex justify-center mb-6 opacity-0" ref={imageRef}>
          <div 
            ref={puzzleBubbleRef}
            className="bg-[#171629] text-white font-medium shadow-lg mx-auto py-6 px-6 rounded-3xl tech-hover max-w-4xl"
          >
            <div className="flex items-center gap-4">
              <img src="/lovable-uploads/1695440a-edf0-4c0b-b5e7-b4e914eb809f.png" alt="Puzzle Logo" className="w-12 h-12 flex-shrink-0" />
              <p className="text-base sm:text-lg break-words">
                Tactomic partners with{' '}
                <span className="text-[#50FAAB] font-semibold">Puzzle</span>,
                the AI-native ledger, to provide clients with tech-driven
                accounting services. Harmonize your tech-stack through
                Puzzle's seamless integrations with expense management,
                invoicing, payroll, and FP&A software.
              </p>
            </div>
          </div>
        </div>

        {/* === CTA Arrow === */}
        <div className="flex justify-center mt-6">
          <div className="text-book-600 font-medium flex items-center gap-2">
            Find Your Solution
            <ChevronDown className="w-4 h-4 animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
