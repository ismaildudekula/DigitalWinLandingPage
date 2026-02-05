import React from 'react';
import { Layers, Video, Palette, Cpu, Rocket, Lightbulb } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-slate-950">
      <div className="container mx-auto px-6">
        
        {/* Section 1: Multimedia */}
        <div className="grid lg:grid-cols-2 gap-16 mb-32 items-center">
          <div className="order-2 lg:order-1 relative">
            <div className="absolute -inset-4 bg-brand-500/20 rounded-2xl blur-2xl"></div>
            <img 
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=1000" 
              alt="Multimedia Training" 
              className="relative rounded-2xl border border-slate-800 shadow-2xl"
            />
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="text-brand-400 font-bold tracking-widest uppercase text-sm mb-2">
              Ready to Master the World of Multimedia
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Multimedia Training Institute in Hyderabad
            </h3>
            <p className="text-slate-400 mb-8 leading-relaxed">
              In multimedia training, individuals can learn a wide range of skills and techniques to enhance their digital media capabilities.
            </p>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="mt-1 bg-slate-800 p-2 rounded-lg h-fit text-brand-400">
                  <Palette className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg">Graphic Design</h4>
                  <p className="text-slate-400 text-sm mt-1">Learning how to use tools like Adobe Photoshop and Illustrator to create stunning visual assets.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="mt-1 bg-slate-800 p-2 rounded-lg h-fit text-brand-400">
                  <Video className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg">Video Editing</h4>
                  <p className="text-slate-400 text-sm mt-1">Mastering software such as Adobe Premiere Pro or Final Cut Pro to edit and enhance video content.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="mt-1 bg-slate-800 p-2 rounded-lg h-fit text-brand-400">
                  <Layers className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg">Animation</h4>
                  <p className="text-slate-400 text-sm mt-1">Understanding the principles of animation and learning how to create compelling animated graphics.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section 2: Robotics */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-brand-400 font-bold tracking-widest uppercase text-sm mb-2">
              Innovative Field Opportunities
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Robotics Training Institute in Hyderabad
            </h3>
            <p className="text-slate-400 mb-8 leading-relaxed">
              AI and robotics allow you to contribute to cutting-edge technology, solve problems, and make a positive difference in society.
            </p>

            <div className="space-y-8">
              <div className="bg-slate-900 border border-slate-800 p-6 rounded-xl hover:border-brand-500/50 transition-colors group">
                <div className="flex items-center gap-4 mb-3">
                  <div className="bg-brand-600/20 p-2 rounded-lg text-brand-400 group-hover:text-white group-hover:bg-brand-600 transition-colors">
                    <Rocket className="w-6 h-6" />
                  </div>
                  <h4 className="text-white font-bold text-lg">Technological Advancements</h4>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed">
                  AI and Robotics are rapidly advancing fields that offer exciting opportunities for innovation and discovery.
                </p>
              </div>

              <div className="bg-slate-900 border border-slate-800 p-6 rounded-xl hover:border-brand-500/50 transition-colors group">
                <div className="flex items-center gap-4 mb-3">
                  <div className="bg-brand-600/20 p-2 rounded-lg text-brand-400 group-hover:text-white group-hover:bg-brand-600 transition-colors">
                    <Lightbulb className="w-6 h-6" />
                  </div>
                  <h4 className="text-white font-bold text-lg">Entrepreneurial Opportunities</h4>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed">
                  The rapid growth of AI and Robotics has created a multitude of entrepreneurial opportunities.
                </p>
              </div>
            </div>
            
            <a href="#trainings" className="inline-block mt-8 text-brand-400 font-bold hover:text-white transition-colors">
              See More Details &rarr;
            </a>
          </div>

          <div className="relative">
             <div className="absolute -inset-4 bg-purple-500/20 rounded-2xl blur-2xl"></div>
             <img 
              src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=1000" 
              alt="Robotics AI Training" 
              className="relative rounded-2xl border border-slate-800 shadow-2xl"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;