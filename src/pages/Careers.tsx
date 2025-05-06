import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CTA from '@/components/CTA';
const Careers = () => {
  return <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl font-bold mb-8">Careers at Tactomic</h1>
            
            <p className="text-lg text-gray-700 mb-8">If you are passionate about technology, service, and financially minded we would love to hear from you. Please fill out the form below letting us know why you might be a good fit in our dynamic organization.</p>
            
            <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-8 mb-10">
              <h2 className="text-2xl font-semibold mb-4">Why Work With Us</h2>
              
              <ul className="space-y-4 mb-6">
                <li className="flex gap-3">
                  <div className="w-6 h-6 rounded-full bg-book-100 text-book-600 flex items-center justify-center flex-shrink-0">
                    ✓
                  </div>
                  <div>
                    <h3 className="font-medium">Professional Growth</h3>
                    <p className="text-gray-600">Develop skills necessary to thrive in the modern accounting and finance landscape</p>
                  </div>
                </li>
                
                <li className="flex gap-3">
                  <div className="w-6 h-6 rounded-full bg-book-100 text-book-600 flex items-center justify-center flex-shrink-0">
                    ✓
                  </div>
                  <div>
                    <h3 className="font-medium">Work-Life Balance</h3>
                    <p className="text-gray-600">With efficiency at the core of our offerings, we offer flexible and remote work opportunities.</p>
                  </div>
                </li>
                
                <li className="flex gap-3">
                  <div className="w-6 h-6 rounded-full bg-book-100 text-book-600 flex items-center justify-center flex-shrink-0">
                    ✓
                  </div>
                  <div>
                    <h3 className="font-medium">Competitive Benefits</h3>
                    <p className="text-gray-600">Health insurance, retirement plans, and paid time off</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>
      
      <CTA title="Join Our Team" description="We're always looking for talented individuals who share our passion for excellence in financial services." steps={[{
      number: "01",
      title: "Submit Your Information",
      description: "Fill out the form with your contact details and experience."
    }, {
      number: "02",
      title: "Initial Screening",
      description: "We'll review your application and schedule an initial call if there's a good fit."
    }, {
      number: "03",
      title: "Interview Process",
      description: "Meet our team and explore how your skills align with our needs."
    }]} formTitle="Apply Now" />
      <Footer />
    </div>;
};
export default Careers;