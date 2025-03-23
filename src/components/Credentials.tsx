
import React, { useRef, useEffect } from 'react';
import { Award, Check } from 'lucide-react';

const Credentials = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const credlyBadgeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Animation observer
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
    
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    // Load Credly embed script
    const script = document.createElement('script');
    script.src = "//cdn.credly.com/assets/utilities/embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Clean up script when component unmounts
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-12 md:py-16 bg-gradient-to-b from-book-50/30 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 opacity-0" ref={headerRef}>
          <h2 className="heading-lg mb-4">Certified Expertise</h2>
          <p className="text-xl text-muted-foreground">Professional credentials you can trust</p>
        </div>

        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-center gap-8">
          <div className="flex flex-col items-center">
            <div 
              ref={credlyBadgeRef}
              data-iframe-width="150" 
              data-iframe-height="270" 
              data-share-badge-id="c8d8af97-62e8-4826-9e32-8f53ad74fd46" 
              data-share-badge-host="https://www.credly.com"
            ></div>
          </div>
          
          <div className="max-w-md">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-purple-100">
              <div className="flex items-center gap-2 mb-3">
                <Award className="w-5 h-5 text-purple-600" />
                <h3 className="font-semibold text-lg">Validated Expertise</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                Our certifications demonstrate our commitment to maintaining the highest standards in financial operations and technology.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Industry-recognized credentials</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Up-to-date with best practices</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Demonstrated expertise in financial operations</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Credentials;
