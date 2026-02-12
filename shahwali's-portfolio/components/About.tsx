
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-slate-950/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative group">
            <div className="relative z-10 rounded-3xl overflow-hidden aspect-square border-2 border-slate-800 shadow-2xl">
              <img 
                src="https://picsum.photos/800/800?grayscale" 
                alt="Shahwali working" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-emerald-500/10 rounded-full blur-3xl group-hover:bg-emerald-500/20 transition-all duration-500"></div>
            <div className="absolute -top-6 -left-6 bg-slate-900 border border-slate-800 p-6 rounded-2xl z-20 shadow-xl">
              <p className="text-4xl font-bold text-emerald-400">5+</p>
              <p className="text-sm text-slate-400 font-medium">Years of Crafting Code</p>
            </div>
          </div>

          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-8 flex items-center">
              <span className="w-12 h-1 bg-emerald-500 mr-4 rounded-full"></span>
              A Story of Clean Code
            </h2>
            
            <div className="space-y-6 text-slate-400 leading-relaxed text-lg">
              <p>
                Hello! I'm <span className="text-white font-semibold">Shahwali</span>. My journey into software development started with a simple question: "How can we make complex systems feel simple for the end user?"
              </p>
              <p>
                Over the years, I've specialized in the <span className="text-emerald-400 font-medium">Vue.js ecosystem</span>, finding it to be the perfect balance of flexibility and performance. Whether I'm architecting a scalable dashboard or a consumer-facing application, my focus is always on <span className="text-white">sustainable growth and developer experience</span>.
              </p>
              <p>
                My philosophy is simple: technology should serve human goals. I don't just write code; I build digital assets that help businesses scale without the technical debt that usually follows rapid growth.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-4">
              <div className="p-4 bg-slate-900/50 rounded-xl border border-slate-800">
                <p className="text-white font-bold mb-1">Performance First</p>
                <p className="text-sm text-slate-500 italic">Optimized to the millisecond.</p>
              </div>
              <div className="p-4 bg-slate-900/50 rounded-xl border border-slate-800">
                <p className="text-white font-bold mb-1">User Centric</p>
                <p className="text-sm text-slate-500 italic">Designed for real humans.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
