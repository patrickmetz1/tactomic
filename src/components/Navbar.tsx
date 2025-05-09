import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import Logo from '@/assets/Asset7.svg';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Using the globally defined function to open Calendly
  const handleCalendlyOpen = (e) => {
    e.preventDefault();
    if (window.openCalendlyPopup) {
      window.openCalendlyPopup();
    } else {
      // Direct implementation as fallback
      if (typeof Calendly !== 'undefined') {
        Calendly.initPopupWidget({
          url: 'https://calendly.com/patrick-metz-tactomic'
        });
      } else {
        console.error("Calendly widget not loaded");
        // Create a direct link as ultimate fallback
        window.open('https://calendly.com/patrick-metz-tactomic', '_blank');
      }
    }
  };

  return (
    <header className={cn('fixed top-0 left-0 right-0 z-50 transition-all duration-300', 
      isScrolled ? 'py-3 bg-white/90 backdrop-blur-sm shadow-sm' : 'py-5 bg-transparent')}>
      <div className="container mx-auto px-6 sm:px-8 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <img 
            src={Logo} 
            alt="Tactomic Logo" 
            className="h-6 w-auto" 
          />
        </Link>
        
        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {/* Add your desktop navigation links here if needed */}
        </nav>
        
        {/* Schedule Call button - shown on both mobile and desktop */}
        <div className="flex items-center">
          <a 
            href="#"
            onClick={handleCalendlyOpen}
            className="px-6 py-2 rounded-full bg-book-600 text-white font-medium hover:shadow-lg hover:shadow-book-500/20 transition-fast"
          >
            Schedule a Call
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
