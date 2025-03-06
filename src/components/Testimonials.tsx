
import React, { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "Switching to Balance was the best business decision I've made this year. They've freed up my time and provided insights that have directly contributed to our growth.",
    author: "Sarah Johnson",
    position: "CEO, Retail Solutions Inc.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80"
  },
  {
    quote: "Their attention to detail and proactive approach to our finances has saved us from costly mistakes. I appreciate their clarity and professionalism.",
    author: "Michael Chen",
    position: "Owner, Chen Consulting",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80"
  },
  {
    quote: "The financial reporting has been a game-changer for our decision-making process. We now have clear visibility into our financial health and growth opportunities.",
    author: "Emily Richards",
    position: "Director, Innovative Tech",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80"
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const testimonialRef = useRef<HTMLDivElement>(null);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    if (testimonialRef.current) observer.observe(testimonialRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id="testimonials" 
      className="section-padding relative overflow-hidden"
      ref={sectionRef}
    >
      <div className="absolute top-0 right-0 -z-10 w-1/2 h-1/2 bg-book-50 rounded-bl-full opacity-60"></div>
      
      <div className="container mx-auto px-4">
        <div className="max-w-xl mx-auto text-center mb-16 opacity-0" ref={testimonialRef}>
          <div className="inline-block px-3 py-1 rounded-full bg-book-100 text-book-800 font-medium mb-4">
            Testimonials
          </div>
          <h2 className="heading-lg mb-6">What Our Clients Say</h2>
          <p className="text-foreground/80">
            Don't just take our word for it — hear from the businesses we've helped achieve financial clarity and growth.
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto relative">
          <div className="relative bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <Quote className="absolute top-8 left-8 text-book-100 w-12 h-12 opacity-40" />
            
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
              <div className="w-full md:w-1/3 flex justify-center">
                <div className="relative">
                  <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-white shadow-md">
                    <img 
                      src={testimonials[currentIndex].image} 
                      alt={testimonials[currentIndex].author}
                      className="w-full h-full object-cover" 
                    />
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-book-600 rounded-full flex items-center justify-center text-white">
                    "
                  </div>
                </div>
              </div>
              
              <div className="w-full md:w-2/3 text-center md:text-left">
                <p className="text-lg md:text-xl font-medium mb-6">
                  "{testimonials[currentIndex].quote}"
                </p>
                <div>
                  <p className="font-semibold">{testimonials[currentIndex].author}</p>
                  <p className="text-sm text-foreground/70">{testimonials[currentIndex].position}</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center mt-8 gap-4">
            <button 
              onClick={handlePrev}
              className="w-10 h-10 rounded-full border border-book-200 flex items-center justify-center hover:bg-book-50 transition-fast"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-fast ${
                    index === currentIndex ? 'bg-book-600' : 'bg-book-200'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            <button 
              onClick={handleNext}
              className="w-10 h-10 rounded-full border border-book-200 flex items-center justify-center hover:bg-book-50 transition-fast"
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
