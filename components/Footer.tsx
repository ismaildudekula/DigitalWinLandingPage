import React from 'react';
import { Rocket, Facebook, Twitter, Instagram, Linkedin, Heart, Calendar } from 'lucide-react';
import { BlogPost } from '../types';

const recentPosts: BlogPost[] = [
  { title: "Elevating Your Learning Experience in Multimedia", date: "June 3, 2024" },
  { title: "Digitalwin Academics Online Animation Courses: Unlock Your Creative Potential", date: "June 3, 2024" },
  { title: "Mastering Robotics: A Beginner’s Guide", date: "May 11, 2024" },
];

const Footer: React.FC = () => {
  return (
    <footer id="blog" className="bg-slate-950 pt-20 pb-10 border-t border-slate-800 text-sm">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand & Address */}
          <div>
            <a href="#" className="flex items-center gap-2 mb-6">
              <div className="bg-brand-600 p-2 rounded-lg">
                <Rocket className="w-5 h-5 text-white" />
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-lg font-bold text-white uppercase">DigitalWin</span>
              </div>
            </a>
            <p className="text-slate-400 mb-6 leading-relaxed">
              MIG-161, 3rd Floor, Above Lenskart, Opp Sri Sri Holistic Hospital, Road No 1, KPHB, Hyderabad - 500085
            </p>
            <div className="text-slate-400 mb-6 space-y-2">
              <p>+91 9154357401</p>
              <p>info@digitalwinmultimedia.com</p>
            </div>
            <div className="flex gap-4">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:bg-brand-600 hover:text-white hover:border-brand-500 transition-all">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider">More Links</h4>
            <ul className="space-y-3">
              {['HOME', 'Animation', 'Multimedia', 'VFX & AVG', 'Robotics With AI', 'Website Designing', 'Graphic Designing', 'CONTACT US'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-slate-400 hover:text-brand-400 transition-colors flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-700"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Recent Posts */}
          <div className="col-span-1 md:col-span-2">
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider">Recent Blog Posts</h4>
            <div className="space-y-6">
              {recentPosts.map((post, i) => (
                <div key={i} className="flex gap-4 group cursor-pointer">
                  <div className="w-16 h-16 rounded-lg bg-slate-900 border border-slate-800 flex-shrink-0 flex items-center justify-center text-slate-600 group-hover:border-brand-500/50 transition-colors">
                    <Calendar className="w-6 h-6" />
                  </div>
                  <div>
                    <h5 className="text-slate-300 font-medium leading-snug group-hover:text-brand-400 transition-colors mb-1">
                      {post.title}
                    </h5>
                    <span className="text-slate-500 text-xs">{post.date}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>
            © Copyright {new Date().getFullYear()} DigitalWin Multimedia. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Disclaimer</a>
            <span>Designed By DigitalWin Business Agency</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;