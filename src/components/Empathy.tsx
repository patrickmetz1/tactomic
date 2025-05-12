import React, { useRef, useEffect } from 'react';
import { Clock, FileQuestion, Lightbulb, DollarSign } from 'lucide-react';
import { Card } from './ui/card';
const Empathy = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
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
    return () => observer.disconnect();
  }, []);
  const painPoints = [{
    icon: <Clock className="h-6 w-6 text-book-600" />,
    title: "Quit wrestling with bookkeeping software and manual spreadsheets"
  }, {
    icon: <FileQuestion className="h-6 w-6 text-book-600" />,
    title: "Keep your team lean and agile"
  }, {
    icon: <DollarSign className="h-6 w-6 text-book-600" />,
    title: "Stop struggling to understand and predict cash needs"
  }, {
    icon: <Lightbulb className="h-6 w-6 text-book-600" />,
    title: "Be free to grow your business"
  }];
  return <section className="py-10 bg-gradient-to-b from-white to-book-50/30" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-6 opacity-0" ref={headerRef}>
          <h2 className="heading-lg mb-2">Don't Just Get a Bookkeeper, Gain an Advantage</h2>
          <p className="text-lg text-muted-foreground">Don't just get a bookkeeper, gain a strategic advantage</p>
        </div>
        <div className="max-w-4xl mx-auto">
          {/* Grid layout for pain points */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
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
        </div>
      </div>
    </section>;
};
export default Empathy;