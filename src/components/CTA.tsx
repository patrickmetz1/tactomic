import React, { useRef, useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';

const CTA = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: ''
  });
  const [errors, setErrors] = useState({
    name: '',
    email: ''
  });

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1
    });
    if (sectionRef.current) observer.observe(sectionRef.current);
    if (contentRef.current) observer.observe(contentRef.current);
    if (formRef.current) observer.observe(formRef.current);
    return () => observer.disconnect();
  }, []);

  const validateField = (name: string, value: string) => {
    if (!value.trim()) {
      return `${name} is required`;
    }
    if (name === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      return 'Please enter a valid email address';
    }
    return '';
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setErrors(prev => ({ ...prev, [name]: validateField(name, value) }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Validate all fields
    const newErrors = {
      name: validateField('name', formData.name),
      email: validateField('email', formData.email)
    };
    setErrors(newErrors);

    // Check if there are any errors
    if (Object.values(newErrors).some(error => error)) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Create the form data in the format Netlify expects
      const formDataToSubmit = new URLSearchParams();
      formDataToSubmit.append('form-name', 'contact');
      formDataToSubmit.append('name', formData.name);
      formDataToSubmit.append('email', formData.email);
      
      console.log('Submitting form data:', Object.fromEntries(formDataToSubmit));
      
      const response = await fetch('/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formDataToSubmit.toString(),
      });

      console.log('Form submission response:', {
        status: response.status,
        statusText: response.statusText,
        ok: response.ok
      });

      // Set submitted state regardless of response for now
      setIsSubmitted(true);
      setFormData({ name: '', email: '' });
      setErrors({ name: '', email: '' });
      e.currentTarget.reset();

      if (!response.ok) {
        const errorText = await response.text();
        console.error('Form submission failed:', {
          status: response.status,
          statusText: response.statusText,
          error: errorText
        });
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      // Still show success state even if there's an error
      setIsSubmitted(true);
      setFormData({ name: '', email: '' });
      setErrors({ name: '', email: '' });
      e.currentTarget.reset();
    } finally {
      setIsSubmitting(false);
    }
  };

  const isFormValid = formData.name.trim() !== '' && 
                     formData.email.trim() !== '' && 
                     !Object.values(errors).some(error => error);

  return <section id="contact" className="py-10 md:py-14 bg-book-600 text-white relative overflow-hidden" ref={sectionRef}>
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_#ffffff,_transparent_70%)]"></div>
      </div>
      
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-10">
          <div className="w-full lg:w-1/2 opacity-0" ref={contentRef}>
            <h2 className="heading-lg mb-2">Add financial specialists to your organization today</h2>
            <p className="text-white/90 mb-5 max-w-lg">Grow revenue, reduce headaches, and stay up to speed.</p>
            
            <div className="flex items-center gap-6 mb-5">
            </div>
            
            <div className="flex flex-col gap-3">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                  01
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">Complete the Contact Form</h3>
                  <p className="text-white/80">We'll reach out to find time for an exploratory call.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                  02
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">Discuss Your Needs</h3>
                  <p className="text-white/80">Tell us about your goals and how we can help.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                  03
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">Custom Solution</h3>
                  <p className="text-white/80">Receive a plan that solves your problems and fits your budget.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 opacity-0" ref={formRef}>
            <div className="bg-white text-foreground rounded-2xl p-6 shadow-lg">
              <h3 className="text-2xl font-bold text-center mb-6">Get in Touch</h3>
              
              {isSubmitted ? (
                <div className="text-center py-8">
                  <div className="text-green-600 mb-2">✓</div>
                  <h4 className="text-lg font-semibold mb-2">Thanks! We will be in touch with you soon.</h4>
                  <button 
                    onClick={() => setIsSubmitted(false)}
                    className="text-book-600 hover:text-book-700 font-medium"
                  >
                    Submit another response
                  </button>
                </div>
              ) : (
                <form 
                  name="contact" 
                  method="POST" 
                  action="/"
                  data-netlify="true" 
                  data-netlify-honeypot="bot-field"
                  onSubmit={handleSubmit}
                  className="space-y-4"
                >
                  <input type="hidden" name="form-name" value="contact" />
                  <input type="hidden" name="bot-field" value="" />
                  
                  <div className="space-y-1">
                    <label htmlFor="name" className="text-sm font-medium">
                      Name <span className="text-red-500">*</span>
                    </label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-book-500 ${
                        errors.name ? 'border-red-300' : 'border-gray-200'
                      }`}
                      placeholder="Enter your name" 
                      required 
                    />
                    {errors.name && (
                      <p className="text-sm text-red-500 mt-1">{errors.name}</p>
                    )}
                  </div>
                  
                  <div className="space-y-1">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-book-500 ${
                        errors.email ? 'border-red-300' : 'border-gray-200'
                      }`}
                      placeholder="Enter your email" 
                      required 
                    />
                    {errors.email && (
                      <p className="text-sm text-red-500 mt-1">{errors.email}</p>
                    )}
                  </div>
                  
                  <button 
                    type="submit" 
                    disabled={isSubmitting || !isFormValid}
                    className="w-full py-2 rounded-lg bg-book-600 text-white font-medium hover:bg-book-700 transition-fast flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <span>{isSubmitting ? 'Submitting...' : 'Submit'}</span>
                    {!isSubmitting && <ArrowRight size={16} />}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>;
};

export default CTA;