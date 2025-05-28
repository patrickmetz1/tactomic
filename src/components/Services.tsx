import React, { useRef, useEffect } from 'react';
import { Calculator, Database, BarChart3 } from 'lucide-react';
import { Card, CardContent } from './ui/card';
const serviceItems = [{
  icon: <Database className="w-6 h-6" />,
  title: "Frictionless Accounting",
  description: "Get access to real time financial information any time of month, maintained in cash and accrual basis so you are always up to speed.",
  color: "bg-purple-50 text-purple-600"
}, {
  icon: <Calculator className="w-6 h-6" />,
  title: "Financial Awareness",
  description: "Know your organization's financial health so you can take action quickly based on data, not guesswork.",
  color: "bg-amber-50 text-amber-600"
}, {
  icon: <BarChart3 className="w-6 h-6" />,
  title: "Tech-enabled",
  description: "Harmonize your tech-stack through seamless integrations and best-in-class digital solutions that align with your strategic goals.",
  color: "bg-emerald-50 text-emerald-600"
}];
const Services = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);
  const imageRef = useRef<HTMLDivElement>(null);
  const puzzleBubbleRef = useRef<HTMLDivElement>(null);
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
    if (puzzleBubbleRef.current) observer.observe(puzzleBubbleRef.current);
    itemsRef.current.forEach(item => {
      if (item) observer.observe(item);
    });
    return () => observer.disconnect();
  }, []);
  return <section id="services" className="section-padding pt-4 md:pt-8 pb-16 md:pb-24 relative overflow-hidden" ref={sectionRef}>
      <div className="absolute top-0 left-0 -z-10 w-full h-full bg-gradient-to-b from-white to-book-50/20"></div>
      
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-8 md:mb-10 opacity-0" ref={el => itemsRef.current[0] = el}>
          <h2 className="heading-lg mb-3">Why Work With Us?</h2>
          <p className="text-lg text-foreground/80 font-medium">Make better decisions, faster</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 place-items-center max-w-6xl mx-auto">
          {serviceItems.map((service, index) => <Card key={service.title} className="opacity-0 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 w-full max-w-sm" ref={el => itemsRef.current[index + 1] = el} style={{
          animationDelay: `${(index + 1) * 100}ms`
        }}>
              <CardContent className="p-4 md:p-5">
                <div className="flex flex-col items-center text-center h-full">
                  <div className={`w-12 h-12 rounded-full ${service.color} flex items-center justify-center mb-3`}>
                    {service.icon}
                  </div>
                  <h3 className="text-base md:text-lg font-semibold gradient-text mb-2">{service.title}</h3>
                  <p className="text-foreground/80 text-sm">{service.description}</p>
                </div>
              </CardContent>
            </Card>)}
        </div>
        
        {/* === Puzzle Graphic === */}
        <div className="w-full flex justify-center mt-10 mb-6 opacity-0" ref={imageRef}>
          
        </div>
      </div>
    </section>;
};
export default Services;