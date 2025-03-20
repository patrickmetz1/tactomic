import React, { useRef, useEffect } from 'react';
import { CheckCircle } from 'lucide-react';
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
  const benefits = ["Get back time to spend on high leverage areas", "Be prepared for tax filings", "Build administrative durability", "Increase exit value of your business", "Reduce financial and personnel risk", "Unlimited support from real professionals"];
  return <section id="benefits" className="section-padding bg-book-50/30" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <div className="w-full lg:w-1/2 relative opacity-0" ref={imageRef}>
            <div className="absolute -z-10 w-72 h-72 bg-book-100 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
            <div className="bg-white shadow-xl rounded-xl p-8 max-w-lg mx-auto">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="font-medium text-gray-500">Monthly Revenue</h3>
                  <p className="text-2xl font-bold">$42,589.00</p>
                </div>
                <div className="bg-green-50 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                  +12.5%
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
                  <p className="text-sm text-gray-500">Expenses</p>
                  <p className="text-lg font-semibold">$18,242</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-500">Add financial specialists to your team at a fraction of the cost through outsourcing with Tactomic LLC. We continually evaluate the latest digital offerings for tools to incorporate into our clients' operations. Don't just get a bookkeeper, get a partner that shares your vision for your tech-enabled organization. We stay on the cutting edge so you don't have to.</p>
                  <p className="text-lg font-semibold">$24,347</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 opacity-0" ref={contentRef}>
            <div className="inline-block px-3 py-1 rounded-full bg-book-100 text-book-800 font-medium mb-4">
              Why Choose Us
            </div>
            <h2 className="heading-lg mb-6">Save time, increase profits and digitize your operations with a responsive financial partner.</h2>
            <p className="text-foreground/80 mb-8">Gain access to financial specialists at a fraction of the cost by outsourcing your work to Tactomic LLC. We continually evaluate the latest digital offerings for tools to incorporate into our clients' operations. Don't just get a bookkeeper, get a partner that shares your vision for your tech-enabled organization. We stay on the cutting edge so you don't have to.</p>
            
            <div className="space-y-4">
              {benefits.map((benefit, index) => <div key={index} className="flex items-start gap-3 opacity-0" ref={el => itemsRef.current[index] = el} style={{
              animationDelay: `${(index + 1) * 100}ms`
            }}>
                  <CheckCircle className="text-book-600 mt-0.5 flex-shrink-0" />
                  <p>{benefit}</p>
                </div>)}
            </div>
            
            <button className="mt-10 px-8 py-3 rounded-full bg-book-600 text-white font-medium transition-fast hover:bg-book-700 hover:shadow-lg">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>;
};
export default Benefits;