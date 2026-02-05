import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* Contact Info */}
          <div>
            <h2 className="text-brand-400 font-bold tracking-widest uppercase text-sm mb-2">Contact Us</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">Want to take your career to the next level?</h3>
            <p className="text-slate-400 mb-12 leading-relaxed">
              Join our team at our innovative company and discover the countless opportunities waiting for you in the exciting fields of multimedia and robotics.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4 group">
                <div className="bg-slate-800 p-4 rounded-xl text-brand-400 group-hover:bg-brand-600 group-hover:text-white transition-all">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">Call Us</h4>
                  <a href="tel:+919154357401" className="text-slate-400 hover:text-brand-400 transition-colors block">
                    +91 9154357401
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="bg-slate-800 p-4 rounded-xl text-brand-400 group-hover:bg-brand-600 group-hover:text-white transition-all">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">Email Us</h4>
                  <a href="mailto:info@digitalwinmultimedia.com" className="text-slate-400 hover:text-brand-400 transition-colors">
                    info@digitalwinmultimedia.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="bg-slate-800 p-4 rounded-xl text-brand-400 group-hover:bg-brand-600 group-hover:text-white transition-all">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">Visit Us</h4>
                  <p className="text-slate-400 leading-relaxed max-w-xs">
                    MIG-161, 3rd Floor, Above Lenskart, Opp Sri Sri Holistic Hospital, Road No 1, KPHB, Hyderabad - 500085
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-slate-950 p-8 md:p-10 rounded-3xl border border-slate-800 shadow-2xl">
            <h4 className="text-xl font-bold text-white mb-6">Send a Message</h4>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-xs font-bold text-brand-400 uppercase tracking-wider mb-2">Name *</label>
                <input 
                  type="text" 
                  id="name"
                  className="w-full bg-slate-900 border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-all placeholder:text-slate-600"
                  placeholder="Enter your name"
                  required
                />
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-xs font-bold text-brand-400 uppercase tracking-wider mb-2">Email *</label>
                  <input 
                    type="email" 
                    id="email"
                    className="w-full bg-slate-900 border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-all placeholder:text-slate-600"
                    placeholder="Enter your email"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-xs font-bold text-brand-400 uppercase tracking-wider mb-2">Phone *</label>
                  <input 
                    type="tel" 
                    id="phone"
                    className="w-full bg-slate-900 border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-all placeholder:text-slate-600"
                    placeholder="Enter your number"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-bold text-brand-400 uppercase tracking-wider mb-2">Message *</label>
                <textarea 
                  id="message"
                  rows={4}
                  className="w-full bg-slate-900 border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-all resize-none placeholder:text-slate-600"
                  placeholder="How can we help you?"
                  required
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full bg-brand-600 text-white font-bold py-4 rounded-lg hover:bg-brand-500 transition-all flex items-center justify-center gap-2 group shadow-lg shadow-brand-600/20"
              >
                Submit
                <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;