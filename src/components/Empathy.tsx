
import React, { useRef, useEffect } from 'react';
import { Clock, FileQuestion, Lightbulb, DollarSign } from 'lucide-react';

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
      title: "Wrestling with administrative tasks and bookkeeping software?"
    },
    {
      icon: <FileQuestion className="h-6 w-6 text-book-600" />,
      title: "Trouble finding quality accounting support?"
    },
    {
      icon: <DollarSign className="h-6 w-6 text-book-600" />,
      title: "Struggling to understand and predict cash demands?"
    },
    {
      icon: <Lightbulb className="h-6 w-6 text-book-600" />,
      title: "Wondering whether you should incorporate new digital tools?"
    }
  ];

  return (
    <section className="py-10 bg-gradient-to-b from-white to-book-50/30" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 opacity-0" ref={headerRef}>
          <h2 className="heading-lg">Wearing Too Many Hats?</h2>
          <div className="inline-block mt-2 relative">
            <span className="text-book-600 italic font-medium tracking-wide border-b border-dashed border-book-300">we get it</span>
            <div className="absolute -left-2 -right-2 -bottom-0.5 h-0.5 bg-gradient-to-r from-transparent via-book-200 to-transparent"></div>
          </div>
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
          
          {/* Simplified Bubble Graphic */}
          <div 
            className="opacity-0 mt-10 mb-2 mx-auto max-w-lg text-center" 
            ref={bubbleRef}
            style={{ animationDelay: '600ms' }}
          >
            <div className="relative inline-block">
              <div className="bg-primary text-white px-6 py-4 rounded-xl shadow-md">
                <p className="font-semibold text-xl">Pivotal support has never been more accessible</p>
              </div>
              {/* Simple bubble pointer/tail */}
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rotate-45"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Empathy;
