import React, { useRef, useEffect } from 'react';
import { CheckCircle, ChevronDown } from 'lucide-react';

const Benefits = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);

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
    itemsRef.current.forEach(item => {
      if (item) observer.observe(item);
    });

    return () => observer.disconnect();
  }, []);

  const benefits = ['Bookkeeping & Reporting', 'Financial Planning & Analysis', 'Payroll, Payables, and Invoicing', 'Policy & Process Advisory'];

  return (
    <section id="benefits" className="section-padding relative overflow-hidden bg-white" ref={sectionRef}>
      {/* Decorative top wave divider */}
      <div className="absolute top-0 left-0 right-0 w-full overflow-hidden">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-16">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-book-50/60"></path>
        </svg>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* === Header === */}
        <div className="text-center mb-6">
          <h2 className="heading-lg mb-2">Our Capabilities</h2>
          <p className="text-foreground/80 font-medium max-w-3xl mx-auto mb-6 text-base">Save time and energy with outsourced financial support</p>
        </div>

        {/* === Benefits Items === */}
        <div className="flex justify-center opacity-0 mb-8" ref={contentRef}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl">
            {benefits.map((benefit, index) => (
              <div 
                key={index} 
                className="flex flex-col items-center text-center gap-3 opacity-0 bg-white shadow-lg hover:shadow-xl p-6 rounded-xl border-2 border-gray-200/60 hover:border-book-300 transition-all duration-300 transform hover:-translate-y-1 backdrop-blur-sm" 
                ref={el => itemsRef.current[index] = el} 
                style={{
                  animationDelay: `${(index + 1) * 100}ms`,
                  background: 'linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.9) 100%)',
                  boxShadow: '0 8px 32px rgba(0,0,0,0.08), 0 2px 8px rgba(0,0,0,0.04)'
                }}
              >
                <div className="bg-book-100/80 p-3 rounded-full">
                  <CheckCircle className="text-book-600 h-6 w-6" />
                </div>
                <p className="text-gray-800 text-sm font-medium leading-snug">{benefit}</p>
              </div>
            ))}
          </div>
        </div>

        {/* === CTA Arrow === */}
        <div className="flex justify-center mt-4 mb-2">
          <div className="text-book-600 font-medium flex items-center gap-2">
            Learn More
            <ChevronDown className="w-4 h-4 animate-bounce" />
          </div>
        </div>
      </div>

      {/* Bottom gradient for transition to next section */}
      <div className="absolute bottom-0 left-0 -z-10 w-full h-8 bg-gradient-to-b from-white to-book-50/20" />
    </section>
  );
};

export default Benefits;
