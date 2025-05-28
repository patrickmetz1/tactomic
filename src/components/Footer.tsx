import React from 'react';
import { Mail, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import Logo from '@/assets/Asset5.svg';

const Footer = () => {
  return (
    <footer className="bg-gray-50 py-16">
      <div className="container mx-auto px-6 sm:px-8">
        {/* Puzzle Integration Section - Centrally positioned */}
        <div className="w-full flex justify-center mb-12">
          <div className="bg-[#171629] text-white font-medium shadow-lg py-6 px-8 rounded-xl hover:shadow-xl transition-shadow duration-300 max-w-5xl w-full mx-[10px]">
            <div className="flex items-center gap-4">
              <img src="/lovable-uploads/1695440a-edf0-4c0b-b5e7-b4e914eb809f.png" alt="Puzzle Logo" className="w-12 h-12 flex-shrink-0" />
              <p className="sm:text-md break-words text-sm">
                Tactomic partners with{' '}
                <span className="text-[#50FAAB] font-semibold">Puzzle</span>,
                the AI-native ledger, to provide clients with tech-driven
                accounting services.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-6 lg:gap-10">
          {/* Contact info (Logo & phone/email) */}
          <div>
            <div className="flex items-center justify-center md:justify-start gap-2 mb-6">
              <img src={Logo} alt="Tactomic Logo" className="h-16 w-48 object-contain" />
            </div>
            <ul className="space-y-4 mb-6 flex flex-col items-center md:items-start">
              <li className="flex items-center gap-3">
                <Phone className="text-book-600 flex-shrink-0" size={18} />
                <a href="tel:+12055658536" className="text-gray-600 hover:text-book-600 transition-fast">
                  (205) 565-8536
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-book-600 flex-shrink-0" size={18} />
                <a href="mailto:info@tactomic.com" className="text-gray-600 hover:text-book-600 transition-fast">
                  info@tactomic.com
                </a>
              </li>
            </ul>
          </div>
          
          {/* Quick Links */}
          <div className="md:ml-auto md:pr-4 lg:pr-0">
            <h3 className="text-lg font-semibold mb-6 text-center md:text-left">Quick Links</h3>
            <ul className="space-y-3 flex flex-col items-center md:items-start">
              <li>
                <Link to="/about" className="text-gray-600 hover:text-book-600 transition-fast">
                  About
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-gray-600 hover:text-book-600 transition-fast">
                  Careers
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-10 pt-6 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm text-center md:text-left">
            © {new Date().getFullYear()} Tactomic LLC. All rights reserved.
          </p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-500 text-sm hover:text-book-600 transition-fast">
              Terms of Service
            </a>
            <a href="#" className="text-gray-500 text-sm hover:text-book-600 transition-fast">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
