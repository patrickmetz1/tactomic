
import React, { useRef, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

const CTA = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null); // Changed from HTMLFormElement to HTMLDivElement

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
    if (contentRef.current) observer.observe(contentRef.current);
    if (formRef.current) observer.observe(formRef.current);
    return () => observer.disconnect();
  }, []);
  
  return <section id="contact" className="py-10 md:py-14 bg-book-600 text-white relative overflow-hidden" ref={sectionRef}>
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_#ffffff,_transparent_70%)]"></div>
      </div>
      
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-10">
          <div className="w-full lg:w-1/2 opacity-0" ref={contentRef}>
            <h2 className="heading-lg mb-2">Optimize your financial ops today</h2>
            <p className="text-white/90 mb-5 max-w-lg">Grow revenue, reduce headaches, and stay up to speed.</p>
            
            <div className="flex items-center gap-6 mb-5">
              
              
            </div>
            
            <div className="flex flex-col gap-3">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                  01
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">Complete the Contact Form</h3>
                  <p className="text-white/80">We'll reach out to find time for an exploratory call.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                  02
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">Discuss Your Needs</h3>
                  <p className="text-white/80">We'll learn about your goals and how we can help.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                  03
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">Custom Solution</h3>
                  <p className="text-white/80">Receive a plan that solves your problems and fits your budget.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 opacity-0" ref={formRef}>
            <div className="bg-white text-foreground rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-semibold mb-4 text-center">Get Started Today</h3>
              
              <form className="space-y-4">
                <div className="space-y-1">
                  <label htmlFor="name" className="text-sm font-medium">
                    Name
                  </label>
                  <input type="text" id="name" className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-book-500" placeholder="Enter your name" required />
                </div>
                
                <div className="space-y-1">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email Address
                  </label>
                  <input type="email" id="email" className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-book-500" placeholder="Enter your email" required />
                </div>
                
                <button type="submit" className="w-full py-2 rounded-lg bg-book-600 text-white font-medium hover:bg-book-700 transition-fast flex items-center justify-center gap-2">
                  <span>Submit</span>
                  <ArrowRight size={16} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>;
};

export default CTA;
