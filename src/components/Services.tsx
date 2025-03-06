
import React, { useRef, useEffect } from 'react';
import { Calculator, FileText, PiggyBank, BarChart3, FileCheck, BookOpen, Receipt } from 'lucide-react';

const serviceItems = [
  {
    icon: <BookOpen className="w-6 h-6" />,
    title: "Bookkeeping",
    description: "Complete daily, weekly, or monthly bookkeeping with accurate record keeping and categorization.",
    color: "bg-blue-50 text-blue-600"
  },
  {
    icon: <Receipt className="w-6 h-6" />,
    title: "Accounts Payable",
    description: "Efficient management of your company's payment obligations and vendor relationships.",
    color: "bg-purple-50 text-purple-600"
  },
  {
    icon: <Calculator className="w-6 h-6" />,
    title: "Tax Preparation",
    description: "Comprehensive tax preparation services to ensure compliance and maximize deductions.",
    color: "bg-amber-50 text-amber-600"
  },
  {
    icon: <BarChart3 className="w-6 h-6" />,
    title: "Financial Reporting",
    description: "Clear, insightful financial reports to help you make informed business decisions.",
    color: "bg-green-50 text-green-600"
  },
  {
    icon: <FileCheck className="w-6 h-6" />,
    title: "Payroll Services",
    description: "Complete payroll processing, including tax calculations and regulatory compliance.",
    color: "bg-rose-50 text-rose-600"
  },
  {
    icon: <PiggyBank className="w-6 h-6" />,
    title: "Financial Planning",
    description: "Strategic financial planning services to help your business achieve its long-term goals.",
    color: "bg-cyan-50 text-cyan-600"
  }
];

const Services = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    itemsRef.current.forEach((item) => {
      if (item) observer.observe(item);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id="services" 
      className="section-padding relative overflow-hidden"
      ref={sectionRef}
    >
      <div className="absolute top-0 left-0 -z-10 w-full h-full bg-gradient-to-b from-white to-book-50/30"></div>
      
      <div className="container mx-auto px-4">
        <div className="max-w-xl mx-auto text-center mb-16 opacity-0" ref={(el) => (itemsRef.current[0] = el)}>
          <div className="inline-block px-3 py-1 rounded-full bg-book-100 text-book-800 font-medium mb-4">
            Our Services
          </div>
          <h2 className="heading-lg mb-6">Comprehensive Financial Solutions</h2>
          <p className="text-foreground/80">
            We offer a full range of bookkeeping and financial services tailored to meet your business needs, all designed to save you time and provide clarity.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceItems.map((service, index) => (
            <div 
              key={service.title}
              className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-1 transition-all duration-300 opacity-0"
              ref={(el) => (itemsRef.current[index + 1] = el)}
              style={{ animationDelay: `${(index + 1) * 100}ms` }}
            >
              <div className={`w-12 h-12 rounded-lg ${service.color} flex items-center justify-center mb-4`}>
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-foreground/70">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
