
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Careers = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold mb-8">Careers at Tactomic</h1>
            
            <p className="text-lg text-gray-700 mb-8">
              Join our team of passionate professionals dedicated to helping businesses achieve financial success. 
              At Tactomic, we believe in fostering a collaborative environment where innovation and excellence thrive.
            </p>
            
            <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-8 mb-10">
              <h2 className="text-2xl font-semibold mb-4">Why Work With Us</h2>
              
              <ul className="space-y-4 mb-6">
                <li className="flex gap-3">
                  <div className="w-6 h-6 rounded-full bg-book-100 text-book-600 flex items-center justify-center flex-shrink-0">
                    ✓
                  </div>
                  <div>
                    <h3 className="font-medium">Professional Growth</h3>
                    <p className="text-gray-600">Continuous learning opportunities and career advancement paths</p>
                  </div>
                </li>
                
                <li className="flex gap-3">
                  <div className="w-6 h-6 rounded-full bg-book-100 text-book-600 flex items-center justify-center flex-shrink-0">
                    ✓
                  </div>
                  <div>
                    <h3 className="font-medium">Work-Life Balance</h3>
                    <p className="text-gray-600">Flexible scheduling and remote work opportunities</p>
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
            
            <div className="mb-12">
              <h2 className="text-2xl font-semibold mb-6">Current Openings</h2>
              
              <div className="space-y-6">
                <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow">
                  <h3 className="text-xl font-medium mb-2">Senior Bookkeeper</h3>
                  <p className="text-gray-600 mb-4">Full-time position with opportunity for remote work</p>
                  <button className="px-4 py-2 bg-book-600 text-white rounded-md hover:bg-book-700 transition-colors">
                    Apply Now
                  </button>
                </div>
                
                <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow">
                  <h3 className="text-xl font-medium mb-2">Tax Specialist</h3>
                  <p className="text-gray-600 mb-4">Full-time position based in our main office</p>
                  <button className="px-4 py-2 bg-book-600 text-white rounded-md hover:bg-book-700 transition-colors">
                    Apply Now
                  </button>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-2xl font-semibold mb-4">Don't See a Fit?</h2>
              <p className="text-gray-700 mb-4">
                We're always looking for talented individuals to join our team. Send your resume to 
                <a href="mailto:careers@tactomic.com" className="text-book-600 ml-1">
                  careers@tactomic.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Careers;
