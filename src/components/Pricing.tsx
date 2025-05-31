import React, { useRef, useEffect } from 'react';
import { CheckCircle, Plus } from 'lucide-react';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from './ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from './ui/table';

const Pricing = () => {
  const sectionRef = useRef(null);
  const tier1Ref = useRef(null);
  const tier2Ref = useRef(null);
  const tier3Ref = useRef(null);
  const addonsRef = useRef(null);
  const titleRef = useRef(null);
  const bubbleRef = useRef(null);

  const baseFeatures = [
    'Month-end close & transaction categorization',
    'Financial statements - P&L and Balance Sheet',
    'Cash, net burn, runway, and ARR dashboard updated daily',
    'Annual tax package for external preparer',
    'ASC 606 adherent revenue recognition',
    'Dedicated, asyncronous U.S. based support',
  ];
  const tier2Features = [
    'Monthly financial review meetings',
    'Customized KPI and financial reports with Causal',
    'Causal subscription ($250 value)',
    'Cash flow forecast',
    'Tailored investor reporting materials',
  ];
  const tier3Features = [
    'Expense management and bill pay',
    'Payroll processing',
    'Annual business plan',
    'Monthly budget vs actual review',
    'IRC compliance support',
  ];
  const addonFeatures = [
    'Clean-up financial records',
    'Compliance filings',
    'Multi-entity Consolidation',
    'Internal control design',
    'Process engineering',
    'Cap table management with Carta',
    'Software selection',
    'Ad hoc financial reviews and analysis',
  ];

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
      {
        threshold: 0.1,
      }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    if (tier1Ref.current) observer.observe(tier1Ref.current);
    if (tier2Ref.current) observer.observe(tier2Ref.current);
    if (tier3Ref.current) observer.observe(tier3Ref.current);
    if (addonsRef.current) observer.observe(addonsRef.current);
    if (titleRef.current) observer.observe(titleRef.current);
    if (bubbleRef.current) observer.observe(bubbleRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="pricing"
      className="section-padding py-8 md:py-14 bg-gradient-to-b from-book-50/20 to-white relative"
      ref={sectionRef}
    >
      <div className="container mx-auto px-4">
        <div
          className="text-center max-w-3xl mx-auto mb-8 opacity-0"
          ref={titleRef}
        >
          <h2 className="heading-lg mb-3">Pricing</h2>
          <p className="text-foreground/80 font-medium">
            Recurring service packages: flat monthly fees and no long term
            commitment
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Bookkeeping */}
          <div className="opacity-0" ref={tier1Ref}>
            <Card className="h-full border-2 border-book-200 shadow-md hover:shadow-lg transition-all overflow-hidden">
              <CardHeader className="pb-2 pt-5 px-5 border-b border-book-100/50">
                <CardTitle className="text-xl font-bold">
                  <span className="gradient-text">Bookkeeping</span>
                </CardTitle>
                <CardDescription className="text-foreground/80 text-sm">
                  Foundational accounting services for accurate financial
                  records
                </CardDescription>
              </CardHeader>
              <CardContent className="pb-2 px-5 space-y-3">
                <div className="bg-book-50/50 p-3 rounded-lg mb-3">
                  <p className="text-center font-medium text-xl">$500/month</p>
                </div>
                <div className="space-y-3">
                  <p className="text-sm font-medium">Services Included:</p>
                  <div className="grid grid-cols-1 gap-x-3 gap-y-2">
                    {baseFeatures.map((feature, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-2 py-1.5 px-2.5 rounded-lg bg-book-50/30 hover:bg-book-50/60 transition-colors"
                      >
                        <CheckCircle className="w-4 h-4" />
                        <span className="font-medium text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
              <CardFooter className="px-5 pb-5 pt-2" />
            </Card>
          </div>

          {/* Insights */}
          <div className="opacity-0" ref={tier2Ref}>
            <Card className="h-full border-2 border-book-200 shadow-md hover:shadow-lg transition-all overflow-hidden">
              <CardHeader className="pb-2 pt-5 px-5 border-b border-book-100/50">
                <CardTitle className="text-xl font-bold">
                  <span className="gradient-text">Insights+Bookkeeping</span>
                </CardTitle>
                <CardDescription className="text-foreground/80 text-sm">
                  Enhanced financial support to help founders make decisions
                </CardDescription>
              </CardHeader>
              <CardContent className="pb-2 px-5 space-y-3">
                <div className="bg-book-50/50 p-3 rounded-lg mb-3">
                  <p className="text-center font-medium text-xl">
                    $1,200/month
                  </p>
                </div>
                <div className="space-y-3">
                  <p className="text-sm font-medium">Everything in Bookkeeping plus:</p>
                  <div className="grid grid-cols-1 gap-x-3 gap-y-2">
                    {tier2Features.map((feature, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-2 py-1.5 px-2.5 rounded-lg bg-book-50/30 hover:bg-book-50/60 transition-colors"
                      >
                        <CheckCircle className="w-4 h-4" />
                        <span className="font-medium text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
              <CardFooter className="px-5 pb-5 pt-2" />
            </Card>
          </div>

          {/* Controller */}
          <div className="opacity-0" ref={tier3Ref}>
            <Card className="h-full border-2 border-book-200 shadow-md hover:shadow-lg transition-all overflow-hidden">
              <CardHeader className="pb-2 pt-5 px-5 border-b border-book-100/50">
                <CardTitle className="text-xl font-bold">
                  <span className="gradient-text">Controller-as-a-Service</span>
                </CardTitle>
                <CardDescription className="text-foreground/80 text-sm">
                  Comprehensive accounting operations to optimize your back office
                </CardDescription>
              </CardHeader>
              <CardContent className="pb-2 px-5 space-y-3">
                <div className="bg-book-50/50 p-3 rounded-lg mb-3">
                  <p className="text-center font-medium text-xl">
                    $2,600+/month
                  </p>
                </div>
                <div className="space-y-3">
                  <p className="text-sm font-medium">
                    Everything in Insights+ plus:
                  </p>
                  <div className="grid grid-cols-1 gap-x-3 gap-y-2">
                    {tier3Features.map((feature, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-2 py-1.5 px-2.5 rounded-lg bg-book-50/30 hover:bg-book-50/60 transition-colors"
                      >
                        <CheckCircle className="w-4 h-4" />
                        <span className="font-medium text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
              <CardFooter className="px-5 pb-5 pt-2" />
            </Card>
          </div>

          {/* Add-ons */}
          <div className="opacity-0" ref={addonsRef}>
            <Card className="h-full border-2 border-dashed border-book-300 shadow-sm hover:shadow-md transition-all overflow-hidden">
              <CardHeader className="pb-2 pt-5 px-5 border-b border-book-100/50">
                <CardTitle className="text-xl font-bold flex items-center gap-2">
                  <Plus className="w-5 h-5" />
                  <span className="gradient-text">Add-ons</span>
                </CardTitle>
                <CardDescription className="text-foreground/80 text-sm">
                  Custom scoped services for specialized needs
                </CardDescription>
              </CardHeader>
              <CardContent className="pb-2 px-5 space-y-3">
                <div className="space-y-3">
                  <p className="text-sm font-medium">Service offerings:</p>
                  <div className="grid grid-cols-1 gap-x-3 gap-y-2">
                    {addonFeatures.map((feature, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-2 py-1.5 px-2.5 rounded-lg bg-book-50/30 hover:bg-book-50/60 transition-colors"
                      >
                        <CheckCircle className="w-4 h-4" />
                        <span className="font-medium text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
              <CardFooter className="px-5 pb-5 pt-2" />
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
