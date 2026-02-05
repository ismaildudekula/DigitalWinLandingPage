import React from 'react';
import { Quote } from 'lucide-react';
import { TestimonialItem } from '../types';

const testimonial: TestimonialItem = {
  quote: "Multimedia training plays a pivotal role in today’s digital landscape, equipping individuals with the skills to create, edit, and manage multimedia content effectively. This comprehensive review explores the benefits, types, and effectiveness of multimedia training programs.",
  author: "DIGITALWIN MULTIMEDIA"
};

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-brand-900 relative overflow-hidden">
      {/* Abstract Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
           <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
             <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5"/>
           </pattern>
           <rect width="100" height="100" fill="url(#grid)" />
        </svg>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex justify-center mb-8">
            <div className="bg-white/10 p-4 rounded-full backdrop-blur-sm">
               <Quote className="w-8 h-8 text-brand-300" />
            </div>
          </div>
          
          <blockquote className="text-2xl md:text-3xl font-medium text-white leading-relaxed mb-10">
            "{testimonial.quote}"
          </blockquote>
          
          <div className="flex items-center justify-center gap-4">
            <div className="h-px w-12 bg-brand-400/50"></div>
            <cite className="not-italic font-bold tracking-widest text-brand-300 uppercase">
              {testimonial.author}
            </cite>
            <div className="h-px w-12 bg-brand-400/50"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;