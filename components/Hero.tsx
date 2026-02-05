import React, { useState, useEffect } from 'react';
import { ArrowRight, ChevronRight, ChevronLeft } from 'lucide-react';

const slides = [
  {
    subtitle: "Robotics Training with Artificial Intelligence",
    title: "Robotics Training with Artificial Intelligence",
    description: "Step into the future of technology with our robotics training program.",
    cta: "Click Here",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=2070",
    gradient: "from-blue-600/20 to-cyan-600/20"
  },
  {
    subtitle: "Multimedia & Animation Training Institute",
    title: "Ready to Bring Your Creativity to Life",
    description: "Join us at our Multimedia & Animation Training Institute.",
    cta: "Click Here",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=2070",
    gradient: "from-purple-600/20 to-pink-600/20"
  }
];

const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section id="home" className="relative h-screen flex items-center overflow-hidden bg-slate-950">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          {/* Background Image with Overlay */}
          <div className="absolute inset-0">
            <img 
              src={slide.image} 
              alt={slide.title} 
              className="w-full h-full object-cover opacity-40"
            />
            <div className={`absolute inset-0 bg-gradient-to-r ${slide.gradient} mix-blend-overlay`} />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />
          </div>

          <div className="container mx-auto px-6 h-full flex items-center relative z-20 pt-20">
            <div className="max-w-3xl space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur border border-white/20 text-brand-300 text-sm font-bold uppercase tracking-widest">
                <span className="w-2 h-2 rounded-full bg-brand-400 animate-pulse"></span>
                {slide.subtitle}
              </div>
              
              <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white leading-[1.1]">
                {slide.title}
              </h1>
              
              <p className="text-xl text-slate-300 max-w-xl leading-relaxed">
                {slide.description}
              </p>
              
              <a
                href="#contact"
                className="inline-flex items-center gap-3 bg-brand-600 hover:bg-brand-500 text-white px-8 py-4 rounded-full font-bold text-lg transition-all transform hover:translate-x-1 shadow-lg shadow-brand-500/25"
              >
                {slide.cta}
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      ))}

      {/* Controls */}
      <div className="absolute bottom-12 right-6 md:right-12 z-30 flex gap-4">
        <button 
          onClick={prevSlide}
          className="p-3 rounded-full border border-white/20 text-white hover:bg-white/10 transition-colors backdrop-blur-sm"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button 
          onClick={nextSlide}
          className="p-3 rounded-full border border-white/20 text-white hover:bg-white/10 transition-colors backdrop-blur-sm"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-12 left-6 md:left-12 z-30 flex gap-3">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              idx === currentSlide ? 'w-12 bg-brand-400' : 'w-4 bg-slate-600'
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;