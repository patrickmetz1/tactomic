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
            
            <p className="text-lg text-gray-700 mb-8">If you are enjoy learning, like serving others, and are technologically savvy or financially minded, we would love to hear from you. Please fill out the form below letting us know why you might be a good fit in our dynamic organization.</p>
            
            <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-8 mb-10">
              <h2 className="text-2xl font-semibold mb-4">Why Work With Us</h2>
              
              <ul className="space-y-4 mb-6">
                <li className="flex gap-3">
                  <div className="w-6 h-6 rounded-full bg-book-100 text-book-600 flex items-center justify-center flex-shrink-0">
                    ✓
                  </div>
                  <div>
                    <h3 className="font-medium">Professional Growth</h3>
                    <p className="text-gray-600">We develop and train our people to master the skills necessary to thrive in the modern accounting and finance landscape</p>
                  </div>
                </li>
                
                <li className="flex gap-3">
                  <div className="w-6 h-6 rounded-full bg-book-100 text-book-600 flex items-center justify-center flex-shrink-0">
                    ✓
                  </div>
                  <div>
                    <h3 className="font-medium">Flexibility</h3>
                    <p className="text-gray-600">We offer flexible and remote work opportunities in order to accomplish the highest quality work as efficiently as possible</p>
                  </div>
                </li>
                
                <li className="flex gap-3">
                  <div className="w-6 h-6 rounded-full bg-book-100 text-book-600 flex items-center justify-center flex-shrink-0">
                    ✓
                  </div>
                  <div>
                    <h3 className="font-medium">Day-to-Day Work</h3>
                    <p className="text-gray-600">We constantly work to take the mindless drudgery out of accounting tasks through the use of technology and process engineering</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>
      
      <CTA title="Contact Us" description="Submit the form below letting us know why you might be a good fit in our dynamic organization." steps={[]} formTitle="Apply Now" messageLabel="Why are you a good fit for our organization?" messagePlaceholder="Tell us about yourself" />
      <Footer />
    </div>;
};
export default Careers;