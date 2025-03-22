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
  const benefits = [
    "Reclaim your time",
    "Increase exit value",
    "Build administrative durability",
    "Reduce financial and personnel risk",
    "Be prepared for tax filings"
  ];
  return <section id="benefits" className="section-padding bg-book-50/30" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <div className="w-full lg:w-1/2 relative opacity-0" ref={imageRef}>
            <div className="absolute -z-10 w-72 h-72 bg-book-100 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
            <div className="bg-white shadow-xl rounded-xl p-8 max-w-lg mx-auto">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <div className="text-center mb-8">
                    <h3 className="text-base font-medium text-muted-foreground">
                      <span className="text-book-600 font-bold">90%</span> of SMB owners want to consolidate their digital tools
                    </h3>
                  </div>
                </div>
              </div>
              
              <div className="space-y-3 mb-6">
                <div className="w-full h-2 bg-gray-100 rounded-full">
                  <div className="w-3/4 h-full bg-book-500 rounded-full"></div>
                </div>
                <div className="w-full h-2 bg-gray-100 rounded-full">
                  <div className="w-1/2 h-full bg-book-400 rounded-full"></div>
                </div>
                <div className="w-full h-2 bg-gray-100 rounded-full">
                  <div className="w-2/3 h-full bg-book-300 rounded-full"></div>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-500">Smaller organizations are <span className="text-book-600 font-semibold">2.7x</span> more likely to succeed in their digital initiatives than larger companies.</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-500">Digital organizations are <span className="text-book-600 font-semibold">3x</span> more likely to outperform their counterparts</p>
                </div>
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