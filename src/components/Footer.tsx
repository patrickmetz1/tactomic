
import React from 'react';
import { Mail, Phone, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return <footer className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-md bg-book-600 flex items-center justify-center text-white font-bold text-xl">
                B
              </div>
              <span className="font-semibold text-xl tracking-tight">Tactomic</span>
            </div>
            
            {/* Contact information */}
            <ul className="space-y-4 mb-6">
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
            
            <div className="flex gap-4">
              <a href="#" className="w-8 h-8 rounded-full bg-book-100 text-book-600 flex items-center justify-center hover:bg-book-200 transition-fast" aria-label="Facebook">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-book-100 text-book-600 flex items-center justify-center hover:bg-book-200 transition-fast" aria-label="Twitter">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-book-100 text-book-600 flex items-center justify-center hover:bg-book-200 transition-fast" aria-label="LinkedIn">
                <Linkedin size={18} />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-book-100 text-book-600 flex items-center justify-center hover:bg-book-200 transition-fast" aria-label="Instagram">
                <Instagram size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
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
        
        <div className="border-t border-gray-200 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Tactomic LLC. All rights reserved.
          </p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-500 text-sm hover:text-book-600 transition-fast">
              Terms of Service
            </a>
            <a href="#" className="text-gray-500 text-sm hover:text-book-600 transition-fast">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-500 text-sm hover:text-book-600 transition-fast">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>;
};

export default Footer;
