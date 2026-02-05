import React, { useState, useEffect } from 'react';
import { Menu, X, Rocket } from 'lucide-react';
import { NavItem } from '../types';

const navItems: NavItem[] = [
  { label: 'HOME', href: '#home' },
  { label: 'ABOUT US', href: '#about' },
  { label: 'TRAININGS', href: '#trainings' },
  { label: 'GALLERY', href: '#gallery' },
  { label: 'BLOG', href: '#blog' },
  { label: 'CONTACT US', href: '#contact' },
];

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-slate-950/90 backdrop-blur-md border-b border-white/5 py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2 group">
          <div className="bg-brand-600 p-2 rounded-lg group-hover:bg-brand-500 transition-colors">
            <Rocket className="w-6 h-6 text-white" />
          </div>
          <div className="flex flex-col leading-none">
            <span className="text-xl font-extrabold tracking-tight text-white uppercase">
              DigitalWin
            </span>
            <span className="text-xs text-brand-400 font-medium tracking-widest uppercase">
              Multimedia
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-bold text-slate-300 hover:text-brand-400 transition-colors tracking-wide"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            className="bg-brand-600 hover:bg-brand-500 text-white px-6 py-2.5 rounded-full text-sm font-bold transition-all shadow-lg shadow-brand-500/20 hover:shadow-brand-500/40 uppercase tracking-wide"
          >
            Enroll Now
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-slate-300 hover:text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-slate-900 border-b border-white/10 p-6 flex flex-col gap-4 shadow-2xl">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-lg font-bold text-slate-300 hover:text-brand-400 uppercase"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <hr className="border-white/10 my-2" />
          <a
            href="#contact"
            className="bg-brand-600 text-center text-white px-5 py-3 rounded-lg font-bold uppercase"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Enroll Now
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;