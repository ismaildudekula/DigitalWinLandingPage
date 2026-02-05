import React from 'react';
import { Bot, Layers, Video, Palette, Gamepad2, Tv, MonitorSmartphone, Wand2, Globe } from 'lucide-react';
import { TrainingItem } from '../types';

const trainings: TrainingItem[] = [
  {
    title: "Robotics with AI",
    description: "AI and Robotics have seen big advancements lately, thanks to progress in machine learning, computer vision, language processing & hardware.",
    icon: Bot
  },
  {
    title: "Multimedia",
    description: "Dive into the world of digital content creation, video editing, and graphic design with expert guidance from industry professionals.",
    icon: Layers
  },
  {
    title: "Animation 2D/3D",
    description: "Learn from experienced professionals in the industry and improve your skills in crafting engaging animations that breathe life into narratives.",
    icon: Wand2
  },
  {
    title: "Graphic Designing",
    description: "Are you prepared to elevate your design skills to the next level? We invite you to enroll in our comprehensive Graphic Design Training program.",
    icon: Palette
  },
  {
    title: "Video Editing",
    description: "Learn the most recent techniques and software applications available to develop visually striking videos that will engage and enthrall your viewers.",
    icon: Video
  },
  {
    title: "VFX & AVG",
    description: "Enhance your skills in Visual Effects (VFX) Animation & Visual Graphics (AVG) with our specially designed comprehensive training program.",
    icon: MonitorSmartphone
  },
  {
    title: "UI/UX Website Designing",
    description: "Master the art of crafting seamless user experiences with our User Interface (UI) and User Experience (UX) Website Designing Training.",
    icon: Globe
  },
  {
    title: "Gaming",
    description: "Join us for our gaming training sessions, organized to help you enhance your skills & stand out among competitors in the gaming world.",
    icon: Gamepad2
  },
  {
    title: "TV & Film Broadcast",
    description: "Elevate your career by enrolling in our specialized training program designed to help you thrive in the exciting industries of television and filmmaking.",
    icon: Tv
  }
];

const Trainings: React.FC = () => {
  return (
    <section id="trainings" className="py-24 bg-slate-900 relative">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-900/5 blur-[120px] pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-brand-400 font-bold tracking-widest uppercase text-sm mb-3">Our Courses</h2>
          <h3 className="text-3xl md:text-5xl font-extrabold text-white mb-6">
            Choose AI Driven Trainings and <span className="text-brand-400">Elevate Your Skills</span> Today
          </h3>
          <p className="text-slate-400 text-lg">
            Comprehensive curriculum designed to bridge the gap between academic learning and industry requirements.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {trainings.map((item, index) => (
            <div 
              key={index}
              className="group p-8 rounded-2xl bg-slate-950 border border-slate-800 hover:border-brand-500 hover:shadow-2xl hover:shadow-brand-900/20 transition-all duration-300 hover:-translate-y-2"
            >
              <div className="w-16 h-16 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center mb-6 group-hover:bg-brand-600 group-hover:border-brand-500 transition-all duration-300">
                <item.icon className="w-8 h-8 text-brand-400 group-hover:text-white transition-colors" />
              </div>
              <h4 className="text-xl font-bold text-white mb-4 group-hover:text-brand-300 transition-colors">{item.title}</h4>
              <p className="text-slate-400 leading-relaxed text-sm">
                {item.description}
              </p>
              <div className="mt-6 flex items-center text-sm font-semibold text-brand-500 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                Read More <span className="ml-2">&rarr;</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Trainings;