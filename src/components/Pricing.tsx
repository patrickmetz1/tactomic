import React, { useRef, useEffect } from 'react';
import { CheckCircle, DollarSign, PlusCircle, InfoIcon } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from './ui/card';
const Pricing = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const foundationRef = useRef<HTMLDivElement>(null);
  const addonsRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const addons = [{
    name: 'Bill Pay',
    icon: <CheckCircle className="w-4 h-4" />
  }, {
    name: 'Customer Invoicing',
    icon: <CheckCircle className="w-4 h-4" />
  }, {
    name: 'Payroll Processing',
    icon: <CheckCircle className="w-4 h-4" />
  }, {
    name: 'Planning & Budgeting',
    icon: <CheckCircle className="w-4 h-4" />
  }, {
    name: 'Ad Hoc Financial Analysis',
    icon: <CheckCircle className="w-4 h-4" />
  }, {
    name: 'Process Engineering',
    icon: <CheckCircle className="w-4 h-4" />
  }];
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
    if (foundationRef.current) observer.observe(foundationRef.current);
    if (addonsRef.current) observer.observe(addonsRef.current);
    if (titleRef.current) observer.observe(titleRef.current);
    return () => observer.disconnect();
  }, []);
  return <section id="pricing" className="section-padding py-20 bg-gradient-to-b from-book-50/20 to-white relative" ref={sectionRef}>
      {/* Top wave pattern */}
      <div className="absolute top-0 left-0 right-0 w-full overflow-hidden">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-16">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-white"></path>
        </svg>
      </div>

      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12 opacity-0" ref={titleRef}>
          <h2 className="heading-lg mb-3">Pricing</h2>
          <p className="text-foreground/80 font-medium">Flat monthly service fee with no long term commitment</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Foundation plan - Takes up more space */}
          <div className="lg:col-span-2 opacity-0" ref={foundationRef}>
            <Card className="h-full border-2 border-book-200 shadow-md hover:shadow-lg transition-all">
              <CardHeader className="pb-4 pt-6 px-6">
                <div className="flex justify-between items-center mb-2">
                  <CardTitle className="text-2xl font-bold">
                    <span className="gradient-text">Foundations</span>
                  </CardTitle>
                  <div className="bg-book-50 p-2 rounded-full">
                    <DollarSign className="h-5 w-5 text-book-600" />
                  </div>
                </div>
                <CardDescription className="text-foreground/80">
                  Our core bookkeeping service provides the essential financial foundation your business needs.
                </CardDescription>
              </CardHeader>
              <CardContent className="pb-4 px-6">
                <div className="mb-4">
                  <span className="text-3xl font-bold">$300</span>
                  <span className="text-foreground/70 ml-1">/month</span>
                  <div className="text-foreground/60 text-sm mt-1">
                    $325/month on QuickBooks Online
                  </div>
                </div>
                
                <div className="space-y-3 mt-6">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-book-600 flex-shrink-0 mt-0.5" />
                    <span>Cash and bank reconciliations</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-book-600 flex-shrink-0 mt-0.5" />
                    <span>Transaction categorization</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-book-600 flex-shrink-0 mt-0.5" />
                    <span>Financial reporting (P&L, Balance Sheet)</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-book-600 flex-shrink-0 mt-0.5" />
                    <span>Dedicated accounting professional</span>
                  </div>
                  
                </div>
              </CardContent>
              <CardFooter className="px-6 pb-6">
                <Button size="lg" className="w-full bg-book-600 hover:bg-book-700">
                  Get Started
                </Button>
              </CardFooter>
            </Card>
          </div>

          {/* Add-ons card */}
          <div className="opacity-0" ref={addonsRef}>
            <Card className="h-full border border-book-100 shadow-sm hover:shadow-md transition-all">
              <CardHeader className="pb-4 pt-6 px-6">
                <div className="flex justify-between items-center mb-2">
                  <CardTitle className="text-xl font-bold">Add-On Services</CardTitle>
                  <div className="bg-book-50/50 p-2 rounded-full">
                    <PlusCircle className="h-5 w-5 text-book-500" />
                  </div>
                </div>
                <CardDescription className="text-foreground/80">
                  Customize your service with additional support based on your needs.
                </CardDescription>
              </CardHeader>
              <CardContent className="pb-4 px-6">
                <div className="text-sm text-foreground/70 mb-4 flex items-center gap-2">
                  <InfoIcon className="h-4 w-4" />
                  <span>Custom pricing based on complexity and volume</span>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-3 mt-4">
                  {addons.map((addon, index) => <div key={index} className="flex items-center gap-2 py-2 px-3 rounded-lg bg-book-50/30 hover:bg-book-50/60 transition-colors">
                      {addon.icon}
                      <span className="text-sm font-medium">{addon.name}</span>
                    </div>)}
                </div>
              </CardContent>
              <CardFooter className="px-6 pb-6">
                <Button variant="outline" size="lg" className="w-full border-book-200 hover:bg-book-50">
                  Contact for Details
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>

        <div className="text-center mt-10 text-foreground/70">
          <p className="text-sm">All services can be customized to fit your specific business requirements.</p>
        </div>
      </div>

      {/* Bottom wave pattern for transition to next section */}
      <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-16 rotate-180">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-white"></path>
        </svg>
      </div>
    </section>;
};
export default Pricing;