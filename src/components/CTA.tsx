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
  return <section id="contact" className="section-padding bg-book-600 text-white relative overflow-hidden" ref={sectionRef}>
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_#ffffff,_transparent_70%)]"></div>
      </div>
      
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
          <div className="w-full lg:w-1/2 opacity-0" ref={contentRef}>
            <h2 className="heading-lg mb-6">Ready to Transform Your Organization?</h2>
            <p className="text-white/90 mb-8 max-w-lg">Get in touch with us to take a big step toward modernizing and growing your business.</p>
            
            <div className="flex items-center gap-8 mb-8">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-white"></div>
                <span className="font-medium">Free Consultation</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-white"></div>
                <span className="font-medium">No Obligation</span>
              </div>
            </div>
            
            <div className="flex flex-col gap-6">
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
                  <p className="text-white/80">Receive a customized plan for your business.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 opacity-0" ref={formRef}>
            <div className="bg-white text-foreground rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-semibold mb-6 text-center">Get Started Today</h3>
              
              <form className="space-y-5">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Full Name
                  </label>
                  <input type="text" id="name" className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-book-500" placeholder="Enter your name" required />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email Address
                  </label>
                  <input type="email" id="email" className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-book-500" placeholder="Enter your email" required />
                </div>
                
                <button type="submit" className="w-full py-3 rounded-lg bg-book-600 text-white font-medium hover:bg-book-700 transition-fast flex items-center justify-center gap-2">
                  <span>Submit</span>
                  <ArrowRight size={18} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default CTA;