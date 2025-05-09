import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { cn } from '@/lib/utils';
import Headshot from '@/assets/Headshot1.png';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  return <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Enhanced Mission Section - Added more top padding */}
      <section className="section-padding pt-54 pb-18">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="heading-lg md:heading-xl bg-gradient-to-r from-book-600 to-book-800 bg-clip-text text-transparent animate-fade-in">Our Mission</h1>
              <div className="w-24 h-1 bg-gradient-to-r from-book-400 to-book-600 mx-auto mt-4 rounded-full"></div>
            </div>
            
            <Card className="p-2 bg-gradient-to-br from-white to-slate-50 shadow-xl border-book-100 overflow-hidden animate-fade-in animate-delay-200">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-book-400 to-book-600"></div>
              <CardContent className="p-8 md:p-10">
                <div className="prose prose-lg max-w-none">
                  <p className="text-xl md:text-2xl leading-relaxed text-foreground/80 text-balance mb-6">
                    Tactomic operates from a simple belief: back offices should create frameworks that propel companies toward their growth goals.
                  </p>
                  
                  <p className="text-lg md:text-xl leading-relaxed text-foreground/80 text-balance mb-6">
                    We free-up organizations to deploy their resources in a more productive and effective manner resulting in reduced overhead burdens.
                  </p>
                  
                  <p className="text-lg md:text-xl leading-relaxed text-foreground/80 text-balance">
                    Our approach combines best practices learned from companies of various sizes with a working knowledge of the latest innovations. Excellence, resourcefulness and a commitment to continuous improvement guide every aspect of our work.
                  </p>
                </div>
                
                <div className="mt-10 flex justify-center">
                  <div className="w-16 h-16 rounded-full bg-book-50 flex items-center justify-center">
                    <div className="w-10 h-10 rounded-full bg-book-100 flex items-center justify-center">
                      <div className="w-6 h-6 rounded-full bg-book-600"></div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 animate-fade-in animate-delay-300">
              <div className="bg-white p-8 rounded-xl shadow-md border border-book-100 text-center hover:shadow-lg transition-all">
                <div className="w-16 h-16 bg-book-50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="w-10 h-10 bg-book-100 rounded-full flex items-center justify-center">
                    <span className="text-book-600 text-xl font-bold">E</span>
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2">Excellence</h3>
                <p className="text-foreground/70">Delivering the highest quality service without exception.</p>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-md border border-book-100 text-center hover:shadow-lg transition-all">
                <div className="w-16 h-16 bg-book-50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="w-10 h-10 bg-book-100 rounded-full flex items-center justify-center">
                    <span className="text-book-600 text-xl font-bold">R</span>
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2">Resourcefulness</h3>
                <p className="text-foreground/70">Creating effective solutions through understanding, creativity and connections.</p>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-md border border-book-100 text-center hover:shadow-lg transition-all">
                <div className="w-16 h-16 bg-book-50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="w-10 h-10 bg-book-100 rounded-full flex items-center justify-center">
                    <span className="text-book-600 text-xl font-bold">I</span>
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2">Innovation</h3>
                <p className="text-foreground/70">Constantly challenging the status quo in financial operations in pursuit of continuous advancement.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

    {/* Our People Section */}
<section className="section-padding pt-24 pb-24">
  <div className="container mx-auto px-4">
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="heading-lg md:heading-xl bg-gradient-to-r from-book-600 to-book-800 bg-clip-text text-transparent animate-fade-in">
          Our People
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-book-400 to-book-600 mx-auto mt-4 rounded-full"></div>
      </div>

      <Card className="p-2 bg-gradient-to-br from-white to-slate-50 shadow-xl border-book-100 overflow-hidden animate-fade-in animate-delay-200">
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-book-400 to-book-600"></div>
        <CardContent className="p-8 md:p-10 flex flex-col md:flex-row items-center gap-8">
          {/* Headshot Placeholder */}
          <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-book-100 shadow-md">
            <img
              src={Headshot}
              alt="Team Member"
              className="object-cover w-full h-full"
            />
          </div>

          {/* Text */}
          <div className="prose prose-lg max-w-none text-foreground/80 text-balance">
            <p>
              Patrick is a Big 4 CPA and finance professional with over a decade of experience in audit, 
              accounting, and FP&A. He has held roles with PwC, The Coca-Cola Company, Aflac, Inc., and 
              family-owned SMBs. He has worked in a variety of capacities including: process improvement 
              design and implementation, establishing new financial and administrative functions, 
              digitizing and automating day-to-day back office operations, and strategic analysis.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  </div>
</section>

      <Footer />
    </div>;
};
export default About;
