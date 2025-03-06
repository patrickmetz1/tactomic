
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled 
          ? 'py-3 glass' 
          : 'py-5 bg-transparent'
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-md bg-book-600 flex items-center justify-center text-white font-bold text-xl">
            B
          </div>
          <span className="font-semibold text-xl tracking-tight">Balance</span>
        </a>
        
        <nav className="hidden md:flex gap-8">
          {['Services', 'Benefits', 'Testimonials', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-foreground/90 hover:text-foreground font-medium transition-fast"
            >
              {item}
            </a>
          ))}
        </nav>
        
        <button className="hidden md:block px-6 py-2 rounded-full bg-book-600 text-white font-medium hover:bg-book-700 transition-fast">
          Get Started
        </button>
        
        <button 
          className="md:hidden text-foreground"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile menu */}
      <div 
        className={cn(
          "fixed inset-0 bg-background/95 backdrop-blur-sm z-40 pt-24 px-6 transition-all duration-300 ease-in-out",
          isMobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
      >
        <nav className="flex flex-col gap-6 items-center">
          {['Services', 'Benefits', 'Testimonials', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-xl font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item}
            </a>
          ))}
          <button className="mt-4 w-full px-6 py-3 rounded-full bg-book-600 text-white font-medium">
            Get Started
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
