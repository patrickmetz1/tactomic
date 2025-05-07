import React from 'react';
import { Mail, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import Logo from '@/assets/Asset5.svg';
import PuzzleCertified from '@/assets/PuzzleCertifiedAdvisorGrey.png';
import IntuitBookkeeper from '@/assets/IntuitTrainedBookkeeper.png';
import XeroCertified from '@/assets/XeroCertified.svg';
const Footer = () => {
  return <footer className="bg-gray-50 py-16">
      <div className="container mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Badge section - comes first on mobile, centered */}
          <div className="order-1 md:order-2 flex justify-center">
            <div className="flex flex-row items-center justify-center gap-4 flex-wrap md:min-w-[400px] lg:min-w-[480px]">
              <img src={PuzzleCertified} alt="Puzzle Certified Advisor" className="h-16 object-contain" />
              <img src={IntuitBookkeeper} alt="Intuit Trained Bookkeeper" className="h-24 w-auto object-contain" />
              <img src={XeroCertified} alt="Xero Certified" className="h-36 w-auto object-contain" />
            </div>
          </div>
          {/* Contact info (Logo & phone/email) */}
          <div className="order-2 md:order-1 text-left">
            <div className="flex items-center gap-2 mb-6">
              <img src={Logo} alt="Tactomic Logo" className="h-16 w-48 object-contain" />
            </div>
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
          {/* Quick Links */}
          <div className="order-3 md:order-3 text-left max-w-[10rem] ml-auto">
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