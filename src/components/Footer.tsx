import React, { useRef } from 'react';
import { Mail, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import Logo from '@/assets/Asset5.svg';

const Footer = () => {
  return <footer className="bg-gray-50 py-16">
      <div className="container mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <img 
                src={Logo} 
                alt="Tactomic Logo" 
                className="h-6 w-auto" 
              />
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
          </div>
          
          {/* Certification Badges */}
          <div className="flex flex-col items-center justify-center">
            <div className="flex flex-row items-center justify-center space-x-12">
              {/* Intuit Badge (replacing Credly Badge) */}
              <div className="flex items-center justify-center flex-shrink-0">
                <img 
                  src="/lovable-uploads/3b8aaad8-13b8-436a-92f8-43eac6a40c9b.png" 
                  alt="Intuit Trained Bookkeeper Badge" 
                  className="w-auto h-auto max-h-28" 
                />
              </div>
              
              {/* Xero Partner Badge */}
              <div className="flex items-center justify-center flex-shrink-0">
                <img 
                  src="https://brandfolder.xero.com/8HSCTPAX/at/cs5rpstbszfv43t7cwfk4qqx/xero-partner-badge-RGB.png?auto=webp&format=png" 
                  alt="Xero Partner Badge" 
                  className="w-auto h-auto max-h-28" 
                />
              </div>
            </div>
          </div>
          
          <div className="md:pl-8 xl:pl-16">
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-gray-600 hover:text-book-600 transition-fast">
                  About
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-10 pt-6 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4">
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
