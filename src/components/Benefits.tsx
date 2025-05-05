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
  return <section id="benefits" className="section-padding relative overflow-hidden" ref={sectionRef}>
      <div className="absolute top-0 left-0 -z-10 w-full h-full bg-gradient-to-b from-book-50/20 via-book-50/40 to-book-50/60" />

      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-20">
          {/* === Left Column: Content === */}
          <div className="w-full lg:w-1/2 order-1 lg:order-1 opacity-0" ref={contentRef}>
            <div className="inline-block px-3 py-1 rounded-full bg-book-100 text-book-800 font-medium mb-4">
              Why Choose Us
            </div>
            <h2 className="heading-lg mb-6">
              Save time and money with outsourced office operations.
            </h2>
            <p className="text-foreground/80 mb-8">
              Partner with someone that shares your vision for your tech-enabled
              organization. We actively seek digital innovations that can
              deliver meaningful value to our clients.
            </p>

            <div className="space-y-4">
              {benefits.map((benefit, index) => <div key={index} className="flex items-start gap-3 opacity-0 bg-white/80 backdrop-blur-sm p-3 rounded-lg shadow-sm" ref={el => itemsRef.current[index] = el} style={{
              animationDelay: `${(index + 1) * 100}ms`
            }}>
                  <CheckCircle className="text-book-600 mt-0.5 flex-shrink-0" />
                  <p className="text-foreground/90">{benefit}</p>
                </div>)}
            </div>
          </div>

          {/* === Right Column: Puzzle Graphic === */}
          <div className="w-full lg:w-1/2 order-2 lg:order-2 opacity-0" ref={imageRef}>
            <div ref={puzzleBubbleRef} className="bg-[#171629] text-white font-medium shadow-lg flex flex-col justify-center mx-auto max-w-md tech-hover py-6 rounded-3xl px-[30px]">
              <div className="flex items-start gap-3">
                <img src="/lovable-uploads/1695440a-edf0-4c0b-b5e7-b4e914eb809f.png" alt="Puzzle Logo" className="w-12 h-12 flex-shrink-0 mt-1" />
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
        </div>

        {/* === CTA Arrow === */}
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