
<template>
  <div class="space-y-24">
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div class="lg:col-span-7">
          <div class="inline-flex items-center space-x-2 bg-slate-900/50 border border-slate-800 px-3 py-1 rounded-full mb-6">
            <span class="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span class="text-xs font-semibold text-emerald-400 uppercase tracking-wider mono">Vue.js Specialist & Full Stack Dev</span>
          </div>
          <h1 class="text-5xl md:text-7xl font-extrabold leading-tight mb-6">
            Crafting Scalable <br />
            <span class="bg-gradient-to-r from-emerald-400 via-teal-400 to-blue-500 bg-clip-text text-transparent">Digital Assets.</span>
          </h1>
          <p class="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl leading-relaxed">
            I'm Shahwali. I build high-performance web applications using Vue.js, React, and Laravel, focusing on speed, scalability, and pixel-perfect design.
          </p>
          <div class="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <router-link to="/projects" class="group px-8 py-4 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl transition-all shadow-lg shadow-emerald-900/30 flex items-center justify-center">
              View Portfolio
              <svg class="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </router-link>
            <router-link to="/about" class="px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white font-bold rounded-xl transition-all border border-slate-700 text-center">
              Learn More
            </router-link>
          </div>
        </div>
        <div class="lg:col-span-5 relative hidden lg:block">
          <div class="bg-gradient-to-br from-slate-900 to-slate-800 p-8 rounded-[40px] border border-slate-700 shadow-2xl">
            <div class="mono text-sm space-y-2">
              <p><span class="text-emerald-400">const</span> dev = {</p>
              <p class="pl-4">name: <span class="text-amber-300">'Shahwali'</span>,</p>
              <p class="pl-4">expert: <span class="text-amber-300">'Vue.js'</span>,</p>
              <p class="pl-4">stack: [<span class="text-amber-300">'Laravel'</span>, <span class="text-amber-300">'React'</span>],</p>
              <p class="pl-4">mission: <span class="text-amber-300">'User First'</span></p>
              <p>};</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
