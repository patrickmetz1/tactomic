
import React, { useRef, useEffect } from 'react';
import { Calculator, Database, BarChart3, Wallet } from 'lucide-react';
import { Card, CardContent } from './ui/card';

const serviceItems = [{
  icon: <Database className="w-6 h-6" />,
  title: "Bookkeeping",
  description: "Get reliable record keeping and real-time financial reporting that you can rely on. Experience frictionless accounting with best-in-class accounting platforms.",
  color: "bg-purple-50 text-purple-600"
}, {
  icon: <Wallet className="w-6 h-6" />,
  title: "Accounting Operations",
  description: "Offload transactional busywork like invoicing customers, paying bills, and running payroll to dependable operational experts.",
  color: "bg-indigo-50 text-indigo-600"
}, {
  icon: <Calculator className="w-6 h-6" />,
  title: "Fractional Finance",
  description: "Receive guidance through annual business planning process, establishing KPIs and monitoring processes. Always have a clear understanding of your financial position before making strategic decisions.",
  color: "bg-amber-50 text-amber-600"
}, {
  icon: <BarChart3 className="w-6 h-6" />,
  title: "Advisory",
  description: "Synchronize your tech-stack and align it with your growth strategies. Reduce financial risks and increase organizational durability through process engineering.",
  color: "bg-emerald-50 text-emerald-600"
}];

const Services = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
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

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    itemsRef.current.forEach(item => {
      if (item) observer.observe(item);
    });

    return () => observer.disconnect();
  }, []);

  return <section id="services" className="section-padding pt-4 md:pt-8 pb-8 md:pb-16 relative overflow-hidden" ref={sectionRef}>
      <div className="absolute top-0 left-0 -z-10 w-full h-full bg-gradient-to-b from-white via-white to-book-50/20"></div>
      
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-6 md:mb-8 opacity-0" ref={el => itemsRef.current[0] = el}>
          <h2 className="heading-lg mb-2 md:mb-3">Our Capabilities</h2>
          <p className="text-lg text-foreground/80 font-medium">Save time and money with outsourced office operations.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-6xl mx-auto">
          {serviceItems.map((service, index) => (
            <Card 
              key={service.title} 
              className="opacity-0 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              ref={el => itemsRef.current[index + 1] = el}
              style={{
                animationDelay: `${(index + 1) * 100}ms`
              }}
            >
              <CardContent className="p-4 md:p-5">
                <div className="flex flex-col items-start gap-3 h-full">
                  <div className={`w-12 h-12 rounded-full ${service.color} flex items-center justify-center mb-1`}>
                    {service.icon}
                  </div>
                  <h3 className="text-base md:text-lg font-semibold gradient-text">{service.title}</h3>
                  <p className="text-foreground/80 text-sm">{service.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>;
};

export default Services;
