import React, { useEffect, useRef } from 'react';
import { BarChart3, ChevronDown, Cpu, Server, Database, Code, Zap } from 'lucide-react';
const Hero = () => {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const paragraphRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const decorationRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const elements = [{
      ref: headingRef,
      delay: 100
    }, {
      ref: paragraphRef,
      delay: 300
    }, {
      ref: ctaRef,
      delay: 500
    }, {
      ref: decorationRef,
      delay: 700
    }];
    elements.forEach(({
      ref,
      delay
    }) => {
      if (ref.current) {
        ref.current.style.opacity = '0';
        ref.current.style.transform = 'translateY(20px)';
        setTimeout(() => {
          if (ref.current) {
            ref.current.style.opacity = '1';
            ref.current.style.transform = 'translateY(0)';
            ref.current.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
          }
        }, delay);
      }
    });
  }, []);
  return <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-bl from-purple-50 to-indigo-50 rounded-bl-full opacity-80"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-indigo-50 to-purple-50 rounded-tr-full opacity-60"></div>
        {/* Added tech pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMzYjgyZjYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djZoNnYtNmgtNnptMC0xMnY2aDZ2LTZoLTZ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-30"></div>
      </div>
      
      <div className="container mx-auto px-4 z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="w-full lg:w-1/2 max-w-2xl">
            <div className="inline-block px-3 py-1 rounded-full bg-book-100 text-book-800 font-medium mb-6 tech-glass" ref={decorationRef}>
              <span className="flex items-center gap-2">
                <Zap size={14} className="text-book-600" />
                Next-Gen Bookkeeping Services
              </span>
            </div>
            <h1 className="heading-xl mb-6 text-balance" ref={headingRef}>
              <span className="text-book-600">Tech-Powered</span> Financial Clarity for Your Business
            </h1>
            <p className="text-lg text-foreground/80 mb-8 max-w-lg" ref={paragraphRef}>
              We leverage cutting-edge technology to transform complex financial data into real-time insights, giving you the competitive edge in today's fast-paced business environment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4" ref={ctaRef}>
              <button className="px-8 py-3 rounded-full bg-book-600 text-white font-medium transition-fast hover:shadow-lg hover:shadow-book-500/20 tech-hover">
                Get Started Today
              </button>
              <button className="px-8 py-3 rounded-full border border-book-200 text-book-700 font-medium transition-fast hover:bg-book-50 hover:border-book-300 tech-hover">
                Explore Solutions
              </button>
            </div>

            <div className="flex items-center gap-8 mt-12">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500"></div>
                <span className="text-sm text-foreground/70">Bookkeeping+</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-book-500"></div>
                <span className="text-sm text-foreground/70">AI-Powered</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-amber-500"></div>
                <span className="text-sm text-foreground/70">Cloud-Based</span>
              </div>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 flex justify-center" ref={decorationRef}>
            <div className="relative">
              <div className="w-72 h-72 md:w-96 md:h-96 bg-book-100 rounded-full flex items-center justify-center">
                <div className="w-[90%] h-[90%] tech-glass rounded-full flex items-center justify-center">
                  <Database size={120} className="text-book-600" strokeWidth={1.5} />
                </div>
              </div>
              
              <div className="absolute -right-4 top-12 tech-glass rounded-xl py-3 px-4 shadow-xl animate-float">
                <div className="flex items-center gap-2">
                  <Server size={16} className="text-book-600" />
                  <p className="text-sm font-medium">Data Processing</p>
                </div>
                <div className="mt-1 w-full h-1 bg-book-100 rounded-full">
                  <div className="w-3/4 h-full bg-book-600 rounded-full"></div>
                </div>
              </div>
              
              <div className="absolute -left-8 bottom-20 tech-glass rounded-xl py-3 px-4 shadow-xl animate-float" style={{
              animationDelay: '1s'
            }}>
                <div className="flex items-center gap-2">
                  <Code size={16} className="text-book-600" />
                  <p className="text-sm font-medium">Automation Rate</p>
                </div>
                <p className="text-lg font-bold text-book-600">+94%</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center">
          <p className="text-sm text-foreground/70 mb-2">Discover Our Tech Stack</p>
          <a href="#services" className="w-8 h-8 rounded-full border border-book-200 flex items-center justify-center animate-bounce">
            <ChevronDown size={20} className="text-book-600" />
          </a>
        </div>
      </div>
    </section>;
};
export default Hero;