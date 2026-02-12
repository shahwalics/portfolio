
import React, { useState } from 'react';

const Projects: React.FC = () => {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      title: 'VueTask Pro',
      category: 'vue',
      description: 'A comprehensive project management tool built with Vue 3 Composition API and Pinia for seamless state management across massive data sets.',
      image: 'https://picsum.photos/600/400?random=11',
      tags: ['Vue.js', 'Pinia', 'Tailwind']
    },
    {
      title: 'E-Commerce Nexus',
      category: 'react',
      description: 'A high-performance storefront featuring real-time inventory tracking and integrated Stripe payments, leveraging React\'s concurrent rendering.',
      image: 'https://picsum.photos/600/400?random=12',
      tags: ['React', 'Next.js', 'Prisma']
    },
    {
      title: 'Solaris Branding',
      category: 'webflow',
      description: 'A visually stunning marketing experience for a green-tech startup, focusing on high-end animations and responsive storytelling.',
      image: 'https://picsum.photos/600/400?random=13',
      tags: ['Webflow', 'Animations', 'CMS']
    }
  ];

  const filteredProjects = filter === 'all' ? projects : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 space-y-4 md:space-y-0">
          <div>
            <h2 className="text-sm font-bold text-emerald-400 uppercase tracking-widest mb-3 mono">Recent Work</h2>
            <h3 className="text-4xl font-black text-white">Selected Projects</h3>
          </div>
          
          <div className="flex space-x-2 p-1 bg-slate-900 border border-slate-800 rounded-xl">
            {['all', 'vue', 'react', 'webflow'].map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-lg text-sm font-semibold capitalize transition-all duration-300 ${
                  filter === cat ? 'bg-emerald-600 text-white shadow-lg' : 'text-slate-400 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, idx) => (
            <div key={idx} className="group relative bg-slate-900 border border-slate-800 rounded-[2rem] overflow-hidden hover:shadow-2xl hover:shadow-emerald-500/10 transition-all duration-500">
              <div className="aspect-video overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="p-8">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-[10px] font-bold uppercase tracking-widest text-emerald-400 px-2 py-1 bg-emerald-500/10 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                <h4 className="text-xl font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors">{project.title}</h4>
                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  {project.description}
                </p>
                <a href="#" className="inline-flex items-center text-sm font-bold text-white group-hover:text-emerald-400">
                  Case Study
                  <svg className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
