import React, { useRef, useEffect } from 'react';
import { Clock, FileQuestion, Lightbulb, DollarSign } from 'lucide-react';
import { Card } from './ui/card';
const Empathy = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const bubbleRef = useRef<HTMLDivElement>(null);
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
    if (headerRef.current) observer.observe(headerRef.current);
    if (bubbleRef.current) observer.observe(bubbleRef.current);
    return () => observer.disconnect();
  }, []);
  const painPoints = [{
    icon: <Clock className="h-6 w-6 text-book-600" />,
    title: "Wrestling with administrative tasks and bookkeeping software?"
  }, {
    icon: <FileQuestion className="h-6 w-6 text-book-600" />,
    title: "Trouble finding quality accounting resources?"
  }, {
    icon: <DollarSign className="h-6 w-6 text-book-600" />,
    title: "Struggling to understand and predict cash demands?"
  }, {
    icon: <Lightbulb className="h-6 w-6 text-book-600" />,
    title: "Wondering which digital tool to incorporate into your operations?"
  }];
  return <section className="py-10 bg-gradient-to-b from-white to-book-50/30" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-6 opacity-0" ref={headerRef}>
          <h2 className="heading-lg mb-2">Refocus on High Leverage Activities</h2>
          <p className="text-lg text-muted-foreground">Don't just get a bookkeeper, gain a strategic advantage</p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Grid layout for pain points */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
            {painPoints.map((point, index) => <Card key={index} className="opacity-0 hover:shadow-md transition-all duration-300 border border-gray-100 hover:border-book-200 hover:scale-[1.02] hover:bg-gradient-to-br from-white to-book-50/40" ref={el => {
            if (el) {
              const observer = new IntersectionObserver(entries => {
                entries.forEach(entry => {
                  if (entry.isIntersecting) {
                    el.classList.add('animate-fade-in');
                    observer.unobserve(entry.target);
                  }
                });
              }, {
                threshold: 0.1
              });
              observer.observe(el);
              return () => observer.disconnect();
            }
          }} style={{
            animationDelay: `${(index + 1) * 100}ms`
          }}>
                <div className="flex items-center p-3">
                  <div className="bg-book-50 p-2 rounded-full mr-3 flex-shrink-0">
                    {point.icon}
                  </div>
                  <h3 className="font-medium text-foreground">{point.title}</h3>
                </div>
              </Card>)}
          </div>
          
          {/* Simplified Bubble Graphic */}
          <div className="opacity-0 mt-4 mx-auto max-w-lg text-center" ref={bubbleRef} style={{
          animationDelay: '600ms'
        }}>
            <div className="relative inline-block">
              <div className="bg-primary text-white px-6 py-3 rounded-xl shadow-md">
                <p className="font-semibold text-lg">Pivotal support has never been more accessible</p>
              </div>
              {/* Simple bubble pointer/tail */}
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rotate-45"></div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Empathy;