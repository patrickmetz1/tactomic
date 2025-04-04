import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';
import Logo from '@/assets/Asset7.svg';

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
    <header className={cn('fixed top-0 left-0 right-0 z-50 transition-all duration-300', 
      isScrolled ? 'py-3 bg-white/90 backdrop-blur-sm shadow-sm' : 'py-5 bg-transparent')}>
      <div className="container mx-auto px-6 sm:px-8 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <img 
            src={Logo} 
            alt="Tactomic Logo" 
            className="h-16 w-auto" 
          />
        </Link>
        
        {/* Right-aligned About link */}
        <div className="flex items-center gap-4">
          <Link 
            to="/about"
            className="hidden md:block px-6 py-2 rounded-full bg-book-600 text-white font-medium hover:shadow-lg hover:shadow-book-500/20 transition-fast"
          >
            About
          </Link>
          
          <button 
            className="md:hidden text-foreground" 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div className={cn("fixed inset-0 bg-white/95 backdrop-blur-md z-40 pt-24 px-6 transition-all duration-300 ease-in-out",
        isMobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none")}>
        <nav className="flex flex-col gap-6 items-center">
          <Link
            to="/about"
            className="mt-4 w-full px-6 py-3 rounded-full bg-book-600 text-white font-medium text-center"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            About
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
