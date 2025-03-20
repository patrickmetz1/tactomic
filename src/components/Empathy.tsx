
import React, { useRef, useEffect } from 'react';
import { AlertTriangle, CheckCircle, Clock, DollarSign, FileQuestion, Zap, ChevronDown } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Empathy = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

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
    cardsRef.current.forEach(card => {
      if (card) observer.observe(card);
    });
    return () => observer.disconnect();
  }, []);

  const painPoints = [{
    icon: <Clock className="h-8 w-8 text-book-600" />,
    title: "Swamped with Admin Tasks",
    problem: "Spending too much time wrestling with spreadsheets and software?",
    solution: "Be free to focus on your customers, products or take a vacation."
  }, {
    icon: <FileQuestion className="h-8 w-8 text-book-600" />,
    title: "Team Building",
    problem: "Having troulbe finding good accountants at a reasonable price?",
    solution: "Get access to well trained, cost effective professionals."
  }, {
    icon: <AlertTriangle className="h-8 w-8 text-book-600" />,
    title: "Innovation Overload",
    problem: "Wonder whether your company is missing out on beneficial novel technologies?",
    solution: "Team up with tech focused scouts that keep your needs top of mind."
  }, {
    icon: <DollarSign className="h-8 w-8 text-book-600" />,
    title: "Cash Management",
    problem: "Operating with poor visibility in the face of inflation, tariffs, and volatile markets?",
    solution: "Get a framework to provide higher quality information and specific recommendations."
  }];

  return <section className="py-16 bg-gradient-to-b from-white to-book-50/30" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 opacity-0" ref={headerRef}>
          <div className="inline-block px-3 py-1 rounded-full bg-book-100 text-book-800 font-medium mb-4">
            We Understand Your Challenges
          </div>
          <h2 className="heading-lg max-w-3xl mx-auto">Wearing Too Many Hats?</h2>
          <p className="text-foreground/80 mt-4 max-w-2xl mx-auto">Wearing Too Many Hats?</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {painPoints.map((point, index) => <Card key={index} className="border-none shadow-md hover:shadow-lg transition-all duration-300 opacity-0" ref={el => cardsRef.current[index] = el} style={{
          animationDelay: `${(index + 1) * 100}ms`
        }}>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-book-100 p-3 rounded-full">
                    {point.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{point.title}</h3>
                    <div className="space-y-3">
                      <div className="flex items-start gap-2">
                        <AlertTriangle className="h-5 w-5 text-amber-500 mt-0.5 flex-shrink-0" />
                        <p className="text-foreground/80">{point.problem}</p>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <p className="text-foreground/80">{point.solution}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>)}
        </div>

        <div className="mt-12 text-center">
          <a href="#services" className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-book-100 text-book-700 font-medium transition-fast hover:shadow-lg hover:shadow-book-500/20 group">
            <span className="flex items-center gap-2">
              Discover Our Services
              <ChevronDown className="h-4 w-4 group-hover:animate-bounce" />
            </span>
          </a>
        </div>
      </div>
    </section>;
};

export default Empathy;
