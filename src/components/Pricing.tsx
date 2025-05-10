import React, { useRef, useEffect } from 'react';
import { CheckCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from './ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/table';
const Pricing = () => {
  const sectionRef = useRef(null);
  const tier1Ref = useRef(null);
  const tier2Ref = useRef(null);
  const tier3Ref = useRef(null);
  const titleRef = useRef(null);

  // Common features for all tiers
  const baseFeatures = ['Month-end close', 'Transaction categorization', 'ASC 606 adherent revenue recognition', 'P&L and Balance Sheet', 'Cash, net burn, runway, and ARR dashboard updated daily', 'Annual tax package for external preparer', 'Asyncronous support'];

  // Additional features for tier 2 and 3
  const tier2Features = ['Monthly review meetings', 'Custom financial reports with Runway', 'Cap table management with Carta', 'Cash flow forecast'];

  // Premium features for tier 3 only
  const tier3Features = ['Expense management and bill pay', 'Payroll processing', 'Annual business plan', 'Monthly budget vs actual review', 'IRC compliance support with Carta', 'Tailored investor reporting materials'];
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
    if (tier1Ref.current) observer.observe(tier1Ref.current);
    if (tier2Ref.current) observer.observe(tier2Ref.current);
    if (tier3Ref.current) observer.observe(tier3Ref.current);
    if (titleRef.current) observer.observe(titleRef.current);
    return () => observer.disconnect();
  }, []);
  return <section id="pricing" className="section-padding py-8 md:py-14 bg-gradient-to-b from-book-50/20 to-white relative" ref={sectionRef}>
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

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Tier 1: Core Bookkeeping */}
          <div className="opacity-0" ref={tier1Ref}>
            <Card className="h-full border-2 border-book-200 shadow-md hover:shadow-lg transition-all overflow-hidden">
              <CardHeader className="pb-2 pt-5 px-5 border-b border-book-100/50">
                <div className="flex justify-between items-center mb-1">
                  <CardTitle className="text-xl font-bold">
                    <span className="gradient-text">Core Bookkeeping</span>
                  </CardTitle>
                </div>
                <CardDescription className="text-foreground/80 text-sm">
                  Foundational accounting services for accurate financial records.
                </CardDescription>
              </CardHeader>
              <CardContent className="pb-2 px-5 space-y-3">
                <div className="bg-book-50/50 p-3 rounded-lg mb-3">
                  <p className="text-center font-medium">$500/month</p>
                  <p className="text-center text-xs text-foreground/70">Powered by Puzzle's AI-native ledger</p>
                </div>
                
                <div className="space-y-3">
                  <p className="text-sm font-medium">Services Included:</p>
                  <div className="grid grid-cols-1 gap-x-3 gap-y-2">
                    {baseFeatures.map((feature, index) => <div key={index} className="flex items-center gap-2 py-1.5 px-2.5 rounded-lg bg-book-50/30 hover:bg-book-50/60 transition-colors">
                        <CheckCircle className="w-4 h-4" />
                        <span className="text-xs font-medium">{feature}</span>
                      </div>)}
                  </div>
                </div>
              </CardContent>
              <CardFooter className="px-5 pb-5 pt-2">
                {/* Footer content can be added here if needed */}
              </CardFooter>
            </Card>
          </div>

          {/* Tier 2: Finance Upgrade */}
          <div className="opacity-0" ref={tier2Ref}>
            <Card className="h-full border-2 border-book-200 shadow-md hover:shadow-lg transition-all overflow-hidden">
              <CardHeader className="pb-2 pt-5 px-5 border-b border-book-100/50">
                <div className="flex justify-between items-center mb-1">
                  <CardTitle className="text-xl font-bold">
                    <span className="gradient-text">Finance Upgrade</span>
                  </CardTitle>
                </div>
                <CardDescription className="text-foreground/80 text-sm">
                  Enhanced financial services for growing businesses.
                </CardDescription>
              </CardHeader>
              <CardContent className="pb-2 px-5 space-y-3">
                <div className="bg-book-50/50 p-3 rounded-lg mb-3">
                  <p className="text-center font-medium">$1,100/month</p>
                  <p className="text-center text-xs text-foreground/70">Everything in Core Bookkeeping plus</p>
                </div>
                
                <div className="space-y-3">
                  <p className="text-sm font-medium">Services Included:</p>
                  <div className="grid grid-cols-2 gap-x-3 gap-y-2">
                    {[...baseFeatures, ...tier2Features].map((feature, index) => <div key={index} className="flex items-center gap-2 py-1.5 px-2.5 rounded-lg bg-book-50/30 hover:bg-book-50/60 transition-colors">
                        <CheckCircle className="w-4 h-4" />
                        <span className="text-xs font-medium">{feature}</span>
                      </div>)}
                  </div>
                </div>
              </CardContent>
              <CardFooter className="px-5 pb-5">
                {/* Footer content can be added here if needed */}
              </CardFooter>
            </Card>
          </div>

          {/* Tier 3: Premium Finance */}
          <div className="opacity-0" ref={tier3Ref}>
            <Card className="h-full border-2 border-book-200 shadow-md hover:shadow-lg transition-all overflow-hidden">
              <CardHeader className="pb-2 pt-5 px-5 border-b border-book-100/50">
                <div className="flex justify-between items-center mb-1">
                  <CardTitle className="text-xl font-bold">
                    <span className="gradient-text">Premium Finance</span>
                  </CardTitle>
                </div>
                <CardDescription className="text-foreground/80 text-sm">
                  Comprehensive financial management for established businesses.
                </CardDescription>
              </CardHeader>
              <CardContent className="pb-2 px-5 space-y-3">
                <div className="bg-book-50/50 p-3 rounded-lg mb-3">
                  <p className="text-center font-medium">$2,400/month</p>
                  <p className="text-center text-xs text-foreground/70">Comprehensive financial management</p>
                </div>
                
                <div className="space-y-3">
                  <p className="text-sm font-medium">Services Included:</p>
                  <div className="grid grid-cols-2 gap-x-3 gap-y-2">
                    {tier3Features.map((feature, index) => <div key={index} className="flex items-center gap-2 py-1.5 px-2.5 rounded-lg bg-book-50/30 hover:bg-book-50/60 transition-colors">
                        <CheckCircle className="w-4 h-4" />
                        <span className="text-xs font-medium">{feature}</span>
                      </div>)}
                  </div>
                </div>
              </CardContent>
              <CardFooter className="px-5 pb-5">
                {/* Footer content can be added here if needed */}
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