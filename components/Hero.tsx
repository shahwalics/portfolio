
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 z-10">
            <div className="inline-flex items-center space-x-2 bg-slate-900/50 border border-slate-800 px-3 py-1 rounded-full mb-6">
              <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="text-xs font-semibold text-emerald-400 uppercase tracking-wider mono">Available for new opportunities</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6">
              Engineering High-Performance <br />
              <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-blue-500 bg-clip-text text-transparent">
                Vue.js Experiences.
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl leading-relaxed">
              I'm Shahwali, a software developer dedicated to building scalable, interactive web applications that combine robust logic with intuitive aesthetics.
            </p>
            
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <a
                href="#projects"
                className="group px-8 py-4 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl transition-all duration-300 flex items-center justify-center shadow-lg shadow-emerald-900/30"
              >
                View My Work
                <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
              <a
                href="#about"
                className="px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white font-bold rounded-xl transition-all duration-300 text-center border border-slate-700"
              >
                About Me
              </a>
            </div>

            <div className="mt-12 flex items-center space-x-6 text-slate-500">
              <div className="flex -space-x-3 overflow-hidden">
                {[1, 2, 3, 4].map((i) => (
                  <img
                    key={i}
                    className="inline-block h-10 w-10 rounded-full ring-2 ring-slate-900"
                    src={`https://picsum.photos/100/100?random=${i}`}
                    alt="Trusted Client"
                  />
                ))}
              </div>
              <p className="text-sm font-medium">Trusted by founders worldwide</p>
            </div>
          </div>

          <div className="lg:col-span-5 relative hidden lg:block">
            <div className="relative z-10 bg-gradient-to-br from-slate-900 to-slate-800 p-8 rounded-[40px] border border-slate-700 shadow-2xl">
              <div className="space-y-4">
                <div className="flex items-center space-x-3 text-slate-400 mb-4">
                  <div className="flex space-x-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                    <div className="w-3 h-3 rounded-full bg-amber-500/50"></div>
                    <div className="w-3 h-3 rounded-full bg-emerald-500/50"></div>
                  </div>
                  <span className="text-xs mono">shahwali.vue</span>
                </div>
                <div className="mono text-sm space-y-2">
                  <p><span className="text-emerald-400">const</span> developer = <span className="text-blue-400">{"{"}</span></p>
                  <p className="pl-4">name: <span className="text-amber-300">'Shahwali'</span>,</p>
                  <p className="pl-4">role: <span className="text-amber-300">'Full Stack Engineer'</span>,</p>
                  <p className="pl-4">focus: <span className="text-amber-300">'Vue.js & Scalability'</span>,</p>
                  <p className="pl-4">tech: [<span className="text-amber-300">'Laravel'</span>, <span className="text-amber-300">'React'</span>, <span className="text-amber-300">'Webflow'</span>],</p>
                  <p className="pl-4 text-slate-500">// Building digital solutions...</p>
                  <p className="pl-4">status: <span className="text-emerald-400">'Ready to Build'</span></p>
                  <p><span className="text-blue-400">{"}"}</span>;</p>
                </div>
              </div>
            </div>
            
            {/* Decorative background for code block */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-emerald-500/5 blur-[100px] -z-10 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
