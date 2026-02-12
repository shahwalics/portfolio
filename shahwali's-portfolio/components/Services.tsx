
import React from 'react';

const Services: React.FC = () => {
  const services = [
    {
      title: 'Full Stack Development',
      description: 'I utilize Laravel Blade and PHP for robust, backend-heavy enterprise applications where security and data integrity are paramount.',
      icon: (
        <svg className="w-8 h-8 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
        </svg>
      ),
      tech: ['Laravel', 'Blade', 'MySQL', 'PHP']
    },
    {
      title: 'Interactive Interfaces',
      description: 'Specializing in Vue.js and React.js to build reactive, high-performance SPAs that delight users with smooth transitions and state management.',
      icon: (
        <svg className="w-8 h-8 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2 1 3 3 3h10c2 0 3-1 3-3V7c0-2-1-3-3-3H7C5 4 4 5 4 7zM9 12l2 2 4-4" />
        </svg>
      ),
      tech: ['Vue.js', 'React.js', 'TypeScript', 'Tailwind']
    },
    {
      title: 'Rapid Prototyping',
      description: 'When speed-to-market is the goal, I leverage Webflow to build pixel-perfect, SEO-optimized marketing sites in record time.',
      icon: (
        <svg className="w-8 h-8 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      tech: ['Webflow', 'Visual Design', 'SEO', 'CMS']
    }
  ];

  return (
    <section id="services" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-emerald-400 uppercase tracking-widest mb-3 mono">My Expertise</h2>
          <h3 className="text-4xl md:text-5xl font-black text-white">How I Help Your Business</h3>
          <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
            Choosing the right tool for the right job is the key to a successful project. I bridge the gap between design and heavy engineering.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div 
              key={idx} 
              className="group p-8 bg-slate-900/40 border border-slate-800 rounded-3xl hover:border-emerald-500/50 hover:bg-slate-900/60 transition-all duration-500"
            >
              <div className="w-16 h-16 bg-slate-800 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-slate-700 transition-all duration-500">
                {service.icon}
              </div>
              <h4 className="text-xl font-bold text-white mb-4">{service.title}</h4>
              <p className="text-slate-400 mb-8 leading-relaxed">
                {service.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {service.tech.map((t) => (
                  <span key={t} className="px-3 py-1 bg-slate-800/80 text-xs font-semibold text-slate-300 rounded-lg border border-slate-700">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
