
import React, { useRef, useEffect } from 'react';
import { Clock, FileQuestion, Lightbulb, DollarSign } from 'lucide-react';

const Empathy = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<(HTMLLIElement | null)[]>([]);

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
      title: "Struggling to manage and predict cash needs?"
    }
  ];

  return (
    <section className="py-10 bg-gradient-to-b from-white to-book-50/30" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 opacity-0" ref={headerRef}>
          <div className="inline-block px-3 py-1 rounded-full bg-book-100 text-book-800 font-medium mb-2">
            Common Challenges
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
        </div>
      </div>
    </section>
  );
};

export default Empathy;
