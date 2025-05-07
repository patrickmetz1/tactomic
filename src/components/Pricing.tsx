import React, { useRef, useEffect } from 'react';
import { CheckCircle, PlusCircle } from 'lucide-react';
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
  return <section id="pricing" className="section-padding py-10 md:py-16 bg-gradient-to-b from-book-50/20 to-white relative" ref={sectionRef}>
      {/* Top wave pattern */}
      <div className="absolute top-0 left-0 right-0 w-full overflow-hidden">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-16">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-white"></path>
        </svg>
      </div>

      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-8 opacity-0" ref={titleRef}>
          <h2 className="heading-lg mb-3">Pricing</h2>
          <p className="text-foreground/80 font-medium">Flat monthly service fee with no long term commitment</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Foundation plan - Reduced size */}
          <div className="opacity-0" ref={foundationRef}>
            <Card className="h-full border-2 border-book-200 shadow-md hover:shadow-lg transition-all">
              <CardHeader className="pb-2 pt-5 px-5">
                <div className="flex justify-between items-center mb-1">
                  <CardTitle className="text-xl font-bold">
                    <span className="gradient-text">Core Bookkeeping</span>
                  </CardTitle>
                </div>
                <CardDescription className="text-foreground/80 text-sm">Foundational bookkeeping services - does not include software subscription costs</CardDescription>
              </CardHeader>
              <CardContent className="pb-2 px-5 space-y-3">
                <div>
                  <span className="text-2xl font-bold">$500</span>
                  <span className="text-foreground/70 ml-1 text-sm">/month for Puzzle users</span>
                  <div className="text-foreground/60 text-xs mt-0.5">$550/month for QBO, other ledger systems</div>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2 mt-3">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-book-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Cash and bank reconciliations</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-book-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Transaction categorization</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-book-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Financial reporting</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-book-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Unlimited async support</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="px-5 pb-5">
                {/* Footer content can be added here if needed */}
              </CardFooter>
            </Card>
          </div>

          {/* Add-ons card */}
          <div className="opacity-0" ref={addonsRef}>
            <Card className="h-full border border-book-100 shadow-sm hover:shadow-md transition-all">
              <CardHeader className="pb-2 pt-5 px-5">
                <div className="flex justify-between items-center mb-1">
                  <CardTitle className="text-lg font-bold">Add Other Accounting & Financial Services</CardTitle>
                  <div className="bg-book-50/50 p-2 rounded-full">
                    <PlusCircle className="h-4 w-4 text-book-500" />
                  </div>
                </div>
                <CardDescription className="text-foreground/80 text-sm">$/based on complexity, volume, and recurrence</CardDescription>
              </CardHeader>
              <CardContent className="pb-2 px-5">
                <div className="grid grid-cols-2 gap-x-3 gap-y-2 mt-3">
                  {addons.map((addon, index) => <div key={index} className="flex items-center gap-2 py-1.5 px-2.5 rounded-lg bg-book-50/30 hover:bg-book-50/60 transition-colors">
                      {addon.icon}
                      <span className="text-xs font-medium">{addon.name}</span>
                    </div>)}
                </div>
              </CardContent>
              <CardFooter className="px-5 pb-5">
                <Button variant="outline" size="sm" className="w-full border-book-200 hover:bg-book-50 text-sm">
                  Contact for Details
                </Button>
              </CardFooter>
            </Card>
          </div>
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