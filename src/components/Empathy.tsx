
import React, { useRef, useEffect } from 'react';
import { Clock, FileQuestion, Lightbulb, DollarSign, Sparkles } from 'lucide-react';

const Empathy = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<(HTMLLIElement | null)[]>([]);
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
    itemsRef.current.forEach(item => {
      if (item) observer.observe(item);
    });
    
    return () => observer.disconnect();
  }, []);

  const painPoints = [
    {
      icon: <Clock className="h-6 w-6 text-book-600" />,
      title: "Spending time on administrative and bookkeeping tasks?"
    },
    {
      icon: <FileQuestion className="h-6 w-6 text-book-600" />,
      title: "Trouble finding quality accounting support?"
    },
    {
      icon: <Lightbulb className="h-6 w-6 text-book-600" />,
      title: "Concerned that your operations are missing out on technological opportunities?"
    },
    {
      icon: <DollarSign className="h-6 w-6 text-book-600" />,
      title: "Struggling to predict and manage cash demands?"
    }
  ];

  return (
    <section className="py-10 bg-gradient-to-b from-white to-book-50/30" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 opacity-0" ref={headerRef}>
          <div className="inline-block px-3 py-1 rounded-full bg-book-100 text-book-800 font-medium mb-2">
            We understand your challenges
          </div>
          <h2 className="heading-lg">Wearing Too Many Hats?</h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <ul className="space-y-3">
            {painPoints.map((point, index) => (
              <li 
                key={index} 
                className="opacity-0 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100"
                ref={el => itemsRef.current[index] = el}
                style={{ animationDelay: `${(index + 1) * 100}ms` }}
              >
                <div className="flex items-center p-4">
                  <div className="bg-book-50 p-2 rounded-full mr-4">
                    {point.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground">{point.title}</h3>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          
          {/* Bubble Graphic */}
          <div 
            className="opacity-0 mt-12 mb-2 mx-auto max-w-lg text-center" 
            ref={bubbleRef}
            style={{ animationDelay: '600ms' }}
          >
            <div className="relative inline-block">
              <div className="bg-primary/95 text-white px-6 py-4 rounded-2xl shadow-lg tech-glass pulse-glow">
                <div className="flex items-center justify-center gap-2">
                  <Sparkles className="h-5 w-5 text-yellow-200" />
                  <p className="font-medium text-lg">Pivotal support has never been more accessible</p>
                  <Sparkles className="h-5 w-5 text-yellow-200" />
                </div>
              </div>
              {/* Bubble pointer/tail */}
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary/95 rotate-45"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Empathy;
