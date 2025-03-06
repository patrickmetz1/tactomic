
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Benefits from '@/components/Benefits';
import Testimonials from '@/components/Testimonials';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    // Smooth scroll implementation for hash links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href')?.substring(1);
        if (!targetId) return;
        
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth'
          });
        }
      });
    });
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <Benefits />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
