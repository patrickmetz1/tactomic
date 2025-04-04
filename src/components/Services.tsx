
import React, { useRef, useEffect } from 'react';
import { Calculator, Cpu, Database, BarChart3, Wallet } from 'lucide-react';

const serviceItems = [
  {
    icon: <Database className="w-6 h-6" />,
    title: "Bookkeeping",
    description: "Get reliable financial record keeping and timely reporting that you can rely on. Keep your books current or shift to a well-fitted accounting system with the help of experienced guides.",
    color: "bg-purple-50 text-purple-600"
  },
  {
    icon: <Wallet className="w-6 h-6" />,
    title: "Accounting Operations",
    description: "Offload transactional busywork like invoicing customers, paying bills, and running payroll to dependable operational experts.",
    color: "bg-indigo-50 text-indigo-600"
  },
  {
    icon: <Calculator className="w-6 h-6" />,
    title: "Fractional Finance",
    description: "Receive guidance through annual business planning process, establishing KPIs and monitoring processes. Always have a clear understanding of your financial position before making strategic decisions.",
    color: "bg-amber-50 text-amber-600"
  },
  {
    icon: <BarChart3 className="w-6 h-6" />,
    title: "Advisory",
    description: "Synchronize your tech-stack and align it with your growth strategies. Reduce financial risks and increase organizational durability through process engineering.",
    color: "bg-emerald-50 text-emerald-600"
  }
];

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

  return (
    <section id="services" className="section-padding pt-4 md:pt-8 pb-8 md:pb-16 relative overflow-hidden" ref={sectionRef}>
      <div className="absolute top-0 left-0 -z-10 w-full h-full bg-gradient-to-b from-white to-purple-50/30"></div>
      
      <div className="container mx-auto px-4">
        <div className="max-w-xl mx-auto text-center mb-6 md:mb-12 opacity-0" ref={el => itemsRef.current[0] = el}>
          <h2 className="heading-lg mb-4 md:mb-6">Our Capabilities</h2>
          
          <div className="inline-block px-5 py-2 rounded-full bg-gradient-to-r from-purple-100 to-indigo-100 text-purple-800 font-medium mt-3 flex items-center gap-2 justify-center tech-hover shadow-sm max-w-md mx-auto">
            <Cpu size={16} className="text-purple-600 flex-shrink-0" />
            <span className="text-sm md:text-base">Tech-driven, practical solutions designed precisely for your organization</span>
          </div>
        </div>
        
        <div className="relative max-w-5xl mx-auto">
          {serviceItems.map((service, index) => (
            <div 
              key={service.title} 
              className={`flex items-start gap-4 md:gap-8 mb-6 md:mb-12 last:mb-0 opacity-0 ${index % 2 === 0 ? '' : 'md:flex-row-reverse'}`} 
              ref={el => itemsRef.current[index + 1] = el} 
              style={{
                animationDelay: `${(index + 1) * 100}ms`
              }}
            >
              <div className="hidden md:flex items-center justify-center flex-shrink-0">
                <div className={`w-20 h-20 md:w-24 md:h-24 rounded-full ${service.color.split(' ')[0]} flex items-center justify-center transition-all duration-500 hover:scale-110 shadow-lg`}>
                  <div className={`w-14 h-14 md:w-16 md:h-16 rounded-full ${service.color} flex items-center justify-center`}>
                    {React.cloneElement(service.icon, {
                      className: "w-7 h-7 md:w-8 md:h-8"
                    })}
                  </div>
                </div>
              </div>
              
              <div className={`flex-1 p-4 md:p-6 rounded-xl bg-white/80 backdrop-blur-sm border border-purple-100/30 shadow-lg ${index % 2 === 0 ? 'md:ml-6' : 'md:mr-6'}`}>
                <div className="flex items-center gap-3 mb-3 md:mb-4">
                  <div className={`md:hidden w-10 h-10 rounded-full ${service.color} flex items-center justify-center flex-shrink-0`}>
                    {service.icon}
                  </div>
                  <h3 className="text-lg md:text-2xl font-semibold gradient-text">{service.title}</h3>
                </div>
                <p className="text-foreground/80 text-sm md:text-base">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
