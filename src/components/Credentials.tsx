
import React, { useRef, useEffect } from 'react';

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
    <section ref={sectionRef} className="py-8 md:py-12 bg-gradient-to-b from-book-50/30 to-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-center md:gap-12">
          <div className="text-center md:text-left opacity-0 mb-6 md:mb-0" ref={headerRef}>
            <h2 className="heading-lg">Certified Expertise</h2>
          </div>

          <div>
            <div 
              ref={credlyBadgeRef}
              data-iframe-width="150" 
              data-iframe-height="270" 
              data-share-badge-id="c8d8af97-62e8-4826-9e32-8f53ad74fd46" 
              data-share-badge-host="https://www.credly.com"
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Credentials;
