
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { cn } from '@/lib/utils';

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Mission Section */}
      <section className="section-padding pt-32">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="heading-lg text-center mb-12">Our Mission</h2>
            <p className="text-lg leading-relaxed text-foreground/80 text-balance">
              Tactomic LLC was founded on a simple belief: back offices should create a framework to propel companies toward their growth goals. We free-up organizations to deploy their resources in a more productive and effective manner. Our approach combines best practices learned from companies of various sizes with a cutting-edge knowledge of the latest innovations. Efficiency, resourcefulness and a commitment to continuous improvement guide every aspect of our work.
            </p>
          </div>
        </div>
      </section>

      {/* People Section */}
      <section className="section-padding bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="heading-lg text-center mb-12">Our People</h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-8 p-6 rounded-xl bg-white shadow-lg">
              <div className="w-48 h-48 shrink-0">
                <img
                  src="/photo-1581092795360-fd1ca04f0952"
                  alt="Patrick Metz"
                  className="w-full h-full object-cover rounded-lg shadow-md"
                />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-semibold mb-2">Founder: Patrick Metz</h3>
                <p className="text-foreground/80 leading-relaxed">
                  A Big 4 CPA and finance professional with over a dozen years of experience in audit, accounting and FP&A. He has held roles with PwC, The Coca-Cola Company, Aflac, Inc., and family-owned SMBs. He has worked in a variety of capacities including process improvement and control design, establishment of new financial and administrative functions, digital transformation and automation, business modeling, and strategic analysis.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
