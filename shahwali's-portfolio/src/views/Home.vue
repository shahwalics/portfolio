<template>
  <div class="space-y-24">
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 min-h-[80vh] flex items-center">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div class="lg:col-span-7 reveal-on-scroll">
          <div
            class="inline-flex items-center space-x-2 bg-slate-900/50 border border-slate-800 px-3 py-1 rounded-full mb-6 backdrop-blur-sm">
            <span class="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span class="text-xs font-semibold text-emerald-400 uppercase tracking-wider mono">Vue.js Specialist & Full
              Stack Dev</span>
          </div>
          <h1 class="text-5xl md:text-7xl font-extrabold leading-tight mb-6">
            Code. Create. <br />
            <span
              class="bg-gradient-to-r from-emerald-400 via-teal-400 to-blue-500 bg-clip-text text-transparent">
            Scale.</span>
          </h1>
          <p class="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl leading-relaxed">
            I'm Shahwali. I build high-performance web applications using Vue.js, React, and Laravel, focusing on speed,
            scalability, and pixel-perfect design.
          </p>
          <div class="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <router-link to="/projects"
              class="group px-8 py-4 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl transition-all shadow-lg shadow-emerald-900/30 flex items-center justify-center transform hover:-translate-y-1">
              View Portfolio
              <svg class="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24"
                stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </router-link>
            <router-link to="/contact"
              class="px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white font-bold rounded-xl transition-all border border-slate-700 text-center transform hover:-translate-y-1">
              Contact Me
            </router-link>
          </div>
        </div>
        <div class="lg:col-span-5 relative hidden lg:block reveal-on-scroll delay-200">
          <div class="absolute -inset-4 bg-emerald-500/20 rounded-[40px] blur-xl"></div>
          <div
            class="relative bg-gradient-to-br from-slate-900 to-slate-800 p-8 rounded-[40px] border border-slate-700 shadow-2xl transform hover:scale-[1.02] transition-transform duration-500">
            <div class="flex space-x-2 mb-4">
              <div class="w-3 h-3 rounded-full bg-red-500"></div>
              <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div class="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <div class="mono text-sm space-y-4 font-medium">
              <p><span class="text-purple-400">const</span> <span class="text-blue-400">developer</span> = {</p>
              <p class="pl-4">name: <span class="text-amber-300">'Shahwali'</span>,</p>
              <p class="pl-4">role: <span class="text-amber-300">'Full Stack Engineer'</span>,</p>
              <p class="pl-4">skills: [</p>
              <p class="pl-8"><span class="text-amber-300">'Vue.js'</span>, <span class="text-amber-300">'React'</span>,
                <span class="text-amber-300">'Laravel'</span>,</p>
              <p class="pl-8"><span class="text-amber-300">'Webflow'</span>, <span class="text-amber-300">'Tailwind
                  CSS'</span></p>
              <p class="pl-4">],</p>
              <p class="pl-4">status: <span class="text-emerald-400">'Building the Future'</span></p>
              <p>};</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="relative py-6 md:py-10 overflow-hidden reveal-on-scroll">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div class="relative rounded-[2.5rem] overflow-hidden shadow-2xl border border-slate-800 group">
          
          <div class="h-[500px] md:h-[600px] w-full relative">
            <img 
              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=3000&auto=format&fit=crop" 
              alt="Feature Showcase" 
              class="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000 ease-out"
            />
            
            <div class="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60"></div>
            
            <div class="absolute bottom-8 left-8 md:bottom-12 md:left-12 max-w-lg">
              <div class="inline-flex items-center space-x-2 bg-emerald-500/20 backdrop-blur-md border border-emerald-500/30 px-4 py-2 rounded-full mb-4">
                 <span class="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></span>
                 <span class="text-emerald-100 text-xs font-bold uppercase tracking-widest">Visionary</span>
              </div>
            </div>
          </div>

          <div class="absolute inset-0 border-2 border-white/5 rounded-[2.5rem] pointer-events-none"></div>
          
        </div>

      </div>
    </section>

    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 overflow-hidden">
      <div class="text-center mb-20 reveal-on-scroll">
        <h2 class="text-sm font-bold text-emerald-400 uppercase tracking-widest mb-3 mono">Tech Stack</h2>
        <h3 class="text-4xl md:text-5xl font-black text-white mb-4">Technologies I Master</h3>
        <p class="text-slate-400 text-lg max-w-2xl mx-auto">Building exceptional digital experiences with cutting-edge tools and frameworks</p>
      </div>
      
      <div class="relative">
        <div class="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-slate-950 to-transparent z-10 pointer-events-none"></div>
        <div class="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-slate-950 to-transparent z-10 pointer-events-none"></div>
        
        <div class="tech-slider-container">
          <div class="tech-slider">
            <div v-for="(tech, index) in technologies" :key="`tech-1-${index}`"
              class="tech-card group">
              <div class="tech-card-inner">
                <div class="absolute inset-0 bg-gradient-to-br from-emerald-500/0 via-emerald-500/0 to-blue-500/0 group-hover:from-emerald-500/10 group-hover:via-blue-500/5 group-hover:to-purple-500/10 transition-all duration-500 rounded-3xl"></div>
                
                <div class="w-20 h-20 mb-4 bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg shadow-slate-950/50 group-hover:shadow-emerald-500/20 border border-slate-700/50 group-hover:border-emerald-500/30 relative z-10">
                  <img :src="tech.icon" :alt="tech.name" class="w-11 h-11 object-contain group-hover:drop-shadow-[0_0_8px_rgba(16,185,129,0.5)] transition-all duration-500" />
                </div>

                <h4 class="text-white font-bold text-base group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-emerald-400 group-hover:to-blue-400 group-hover:bg-clip-text transition-all duration-300 relative z-10">
                  {{ tech.name }}
                </h4>
                
                <span class="mt-2 px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-emerald-400 text-xs font-medium relative z-10">
                  {{ tech.level }}
                </span>
              </div>
            </div>
            
            <div v-for="(tech, index) in technologies" :key="`tech-2-${index}`"
              class="tech-card group">
              <div class="tech-card-inner">
                <div class="absolute inset-0 bg-gradient-to-br from-emerald-500/0 via-emerald-500/0 to-blue-500/0 group-hover:from-emerald-500/10 group-hover:via-blue-500/5 group-hover:to-purple-500/10 transition-all duration-500 rounded-3xl"></div>
                
                <div class="w-20 h-20 mb-4 bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg shadow-slate-950/50 group-hover:shadow-emerald-500/20 border border-slate-700/50 group-hover:border-emerald-500/30 relative z-10">
                  <img :src="tech.icon" :alt="tech.name" class="w-11 h-11 object-contain group-hover:drop-shadow-[0_0_8px_rgba(16,185,129,0.5)] transition-all duration-500" />
                </div>

                <h4 class="text-white font-bold text-base group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-emerald-400 group-hover:to-blue-400 group-hover:bg-clip-text transition-all duration-300 relative z-10">
                  {{ tech.name }}
                </h4>
                
                <span class="mt-2 px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-emerald-400 text-xs font-medium relative z-10">
                  {{ tech.level }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div class="mt-16 flex flex-wrap justify-center gap-3 reveal-on-scroll">
        <span v-for="badge in additionalSkills" :key="badge" 
          class="px-5 py-2.5 bg-slate-900/50 border border-slate-800/50 rounded-full text-slate-400 text-sm font-medium hover:border-emerald-500/50 hover:text-emerald-400 hover:bg-slate-800/50 transition-all duration-300 cursor-default backdrop-blur-sm">
          {{ badge }}
        </span>
      </div>
    </section>

    <section class="relative py-32 overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900/50 to-slate-950"></div>
      <div class="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl"></div>
      <div class="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div class="text-center mb-20 reveal-on-scroll">
          <h2 class="text-sm font-bold text-emerald-400 uppercase tracking-widest mb-3 mono">What I Do</h2>
          <h3 class="text-4xl md:text-5xl font-black text-white mb-4">Specialized Services</h3>
          <p class="text-slate-400 text-lg max-w-2xl mx-auto">Delivering end-to-end solutions that transform ideas into exceptional digital products</p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div v-for="(service, index) in services" :key="index"
            class="service-card group relative overflow-hidden reveal-on-scroll"
            :style="{ transitionDelay: `${index * 100}ms` }">
            
            <div class="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-900/95 to-slate-950 transition-all duration-500"></div>
            
            <div class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div class="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-blue-500/5 to-purple-500/10"></div>
              <div class="absolute -inset-1 bg-gradient-to-r from-emerald-500/20 via-blue-500/20 to-purple-500/20 blur-xl"></div>
            </div>
            
            <div class="absolute inset-0 rounded-3xl border border-slate-800/50 group-hover:border-emerald-500/30 transition-all duration-500"></div>
            
            <div class="relative p-8 md:p-10 h-full flex flex-col">
              <div class="relative mb-8">
                <div class="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-blue-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div class="relative w-16 h-16 bg-gradient-to-br from-emerald-500/10 to-blue-500/10 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 border border-emerald-500/20">
                  <component :is="service.icon" class="w-8 h-8 text-emerald-400 group-hover:text-emerald-300 transition-colors duration-300" />
                </div>
              </div>
              
              <h4 class="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-emerald-400 group-hover:to-blue-400 group-hover:bg-clip-text transition-all duration-300">
                {{ service.title }}
              </h4>
              
              <p class="text-slate-400 leading-relaxed mb-6 flex-grow group-hover:text-slate-300 transition-colors duration-300">
                {{ service.description }}
              </p>
              
              <div class="flex items-center text-emerald-400 font-medium text-sm opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                <span class="mr-2">Learn more</span>
                <svg class="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
              
              <div class="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-emerald-500/5 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div class="absolute top-6 right-6 text-6xl font-black text-slate-800/30 group-hover:text-emerald-500/10 transition-colors duration-500">
                0{{ index + 1 }}
              </div>
            </div>
          </div>
        </div>
        
        <div class="mt-16 text-center reveal-on-scroll">
          <p class="text-slate-400 mb-6">Need something custom?</p>
          <router-link to="/contact" 
            class="inline-flex items-center px-8 py-4 bg-gradient-to-r from-emerald-600 to-blue-600 text-white font-bold rounded-full hover:shadow-2xl hover:shadow-emerald-500/20 hover:scale-105 transition-all duration-300">
            <span>Let's discuss your project</span>
            <svg class="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </router-link>
        </div>
      </div>
    </section>

    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div class="flex justify-between items-end mb-12 reveal-on-scroll">
        <div>
          <h2 class="text-sm font-bold text-emerald-400 uppercase tracking-widest mb-3 mono">Portfolio</h2>
          <h3 class="text-3xl md:text-4xl font-black text-white">Featured Work</h3>
        </div>
        <router-link to="/projects"
          class="hidden md:flex items-center text-slate-400 hover:text-emerald-400 font-bold transition-colors">
          View All Projects
          <svg class="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </router-link>
      </div>

     <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div v-for="(project, index) in featuredProjects" :key="index"
        class="group relative bg-slate-900 border border-slate-800 rounded-[2rem] overflow-hidden hover:border-emerald-500/50 hover:shadow-2xl hover:shadow-emerald-500/10 transition-all duration-300 flex flex-col h-full reveal-on-scroll"
        :style="{ transitionDelay: `${index * 150}ms` }">
        
        <div class="relative h-64 overflow-hidden border-b border-slate-800/50">
          <img :src="project.image" :alt="project.title"
            class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
          
          <div class="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-300"></div>

          <div class="absolute top-4 left-4">
            <span class="px-3 py-1 text-xs font-bold text-emerald-300 bg-emerald-950/80 backdrop-blur-md border border-emerald-500/30 rounded-full uppercase tracking-wider">
              {{ project.category }}
            </span>
          </div>
        </div>

        <div class="p-8 flex flex-col flex-grow relative z-10">
          <h4 class="text-2xl font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors duration-300">
            {{ project.title }}
          </h4>
          
          <p class="text-slate-400 text-sm leading-relaxed mb-6 line-clamp-3">
            {{ project.description }}
          </p>

          <div v-if="project.tags" class="flex flex-wrap gap-2 mb-6 mt-auto">
            <span v-for="tag in project.tags" :key="tag" 
                  class="text-[10px] font-medium text-slate-400 bg-slate-800/50 px-2.5 py-1 rounded-md border border-slate-700/50">
              {{ tag }}
            </span>
          </div>

          <div class="mt-auto pt-6 border-t border-slate-800/50 flex items-center justify-between">
            <a :href="project.link" target="_blank"
              class="inline-flex items-center gap-2 text-sm font-bold text-white group-hover:text-emerald-400 transition-colors">
              View Project
              <svg class="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>

      <div class="mt-8 text-center md:hidden reveal-on-scroll">
        <router-link to="/projects" class="inline-flex items-center text-emerald-400 font-bold">
          View All Projects
          <svg class="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </router-link>
      </div>
    </section>

    <section class="py-20 bg-slate-950 relative overflow-hidden reveal-on-scroll">
      <div class="absolute inset-0 opacity-10" 
          style="background-image: radial-gradient(#10b981 1px, transparent 1px); background-size: 32px 32px;">
      </div>

      <div class="max-w-4xl mx-auto px-4 relative z-10">
        
       <div class="text-center mb-10">
          <h2 class="text-3xl md:text-4xl font-black text-white mb-6">
            <span class="text-4xl md:text-5xl font-black text-white">Let's Play a Game</span>
          </h2>
          
          <p class="text-slate-300 text-md max-w-2xl mx-auto leading-relaxed mb-8">
            Before you move on, take a moment to test your logic. <br class="hidden md:block" />
            Can you crack the code?
          </p>

          <div class="inline-block text-left bg-slate-900/50 border border-slate-800 rounded-2xl p-6 backdrop-blur-sm">
            <h3 class="text-emerald-400 font-bold mb-3 uppercase tracking-wider text-xs">How to Play:</h3>
            <ul class="space-y-3 text-slate-400 text-sm">
              <li class="flex items-start">
                <span class="mr-3 mt-1 w-2 h-2 bg-emerald-500 rounded-full shrink-0"></span>
                <span>Guess the <strong>3-digit secret code</strong>.</span>
              </li>
              <li class="flex items-start">
                <span class="mr-3 mt-1 w-2 h-2 bg-emerald-500 rounded-full shrink-0"></span>
                <span><strong class="text-white">Green</strong> means the number is correct and in the right spot.</span>
              </li>
              <li class="flex items-start">
                <span class="mr-3 mt-1 w-2 h-2 bg-yellow-500 rounded-full shrink-0"></span>
                <span><strong class="text-white">Yellow</strong> means the number is correct but in the wrong spot.</span>
              </li>
              <li class="flex items-start">
                <span class="mr-3 mt-1 w-2 h-2 bg-slate-600 rounded-full shrink-0"></span>
                <span><strong class="text-white">Grey</strong> means the number is not in the code at all.</span>
              </li>
            </ul>
          </div>
        </div>

        <div class="bg-slate-900 border-2 border-slate-800 rounded-xl shadow-2xl overflow-hidden max-w-lg mx-auto transform transition-all hover:border-emerald-500/30">
          
          <div class="bg-slate-800 p-3 flex items-center justify-between border-b border-slate-700">
            <div class="flex space-x-2">
              <div class="w-3 h-3 rounded-full bg-red-500"></div>
              <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div class="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <div class="text-xs font-mono text-slate-400">SECURE_VAULT_V1.0</div>
          </div>

          <div class="p-6 md:p-8 bg-slate-950/90 min-h-[400px] flex flex-col items-center justify-center">
            
            <div v-if="gameState === 'won'" class="text-center animate-bounce">
              <div class="text-6xl mb-4">🔓</div>
              <h3 class="text-2xl font-bold text-emerald-400 mb-2">ACCESS GRANTED</h3>
              <p class="text-slate-400 mb-6">You cracked the mainframe!</p>
              <button @click="resetGame" class="px-6 py-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded shadow-lg transition-colors">
                Reboot System
              </button>
            </div>

            <div v-else-if="gameState === 'lost'" class="text-center">
              <div class="text-6xl mb-4">💀</div>
              <h3 class="text-2xl font-bold text-red-500 mb-2">ACCESS DENIED</h3>
              <p class="text-slate-400 mb-6">The correct code was: <span class="text-white font-mono">{{ secretCode.join('') }}</span></p>
              <button @click="resetGame" class="px-6 py-2 bg-slate-700 hover:bg-slate-600 text-white font-bold rounded shadow-lg transition-colors">
                Try Again
              </button>
            </div>

            <div v-else class="w-full">
              
              <div class="text-center mb-6 font-mono text-sm">
                <p class="text-emerald-500/80 mb-1">ATTEMPTS REMAINING: {{ maxAttempts - attempts.length }}</p>
                <div class="flex justify-center gap-2 text-xs text-slate-500">
                  <span class="flex items-center"><span class="w-2 h-2 bg-emerald-500 rounded-full mr-1"></span> Correct</span>
                  <span class="flex items-center"><span class="w-2 h-2 bg-yellow-500 rounded-full mr-1"></span> Wrong Spot</span>
                  <span class="flex items-center"><span class="w-2 h-2 bg-slate-700 rounded-full mr-1"></span> Invalid</span>
                </div>
              </div>

              <div class="space-y-2 mb-8 max-h-48 overflow-y-auto custom-scrollbar">
                <div v-for="(attempt, idx) in attempts" :key="idx" class="flex justify-center gap-2 animate-fade-in-up">
                  <div v-for="(digit, dIdx) in attempt.guess" :key="dIdx"
                    class="w-10 h-10 flex items-center justify-center rounded border font-bold text-lg"
                    :class="getFeedbackClass(attempt.feedback[dIdx])">
                    {{ digit }}
                  </div>
                </div>
              </div>

              <div class="flex justify-center gap-2 mb-6">
                <input 
                  v-for="(digit, index) in currentGuess" 
                  :key="index"
                  ref="inputs"
                  v-model="currentGuess[index]"
                  type="text" 
                  maxlength="1"
                  class="w-12 h-14 bg-slate-900 border-2 border-slate-700 rounded text-center text-2xl font-bold text-white focus:border-emerald-500 focus:outline-none transition-colors"
                  @input="handleInput(index, $event)"
                  @keydown.delete="handleBackspace(index, $event)"
                  @keydown.enter="submitGuess"
                />
              </div>

              <button 
                @click="submitGuess" 
                :disabled="!isGuessComplete"
                class="w-full py-3 bg-emerald-600 hover:bg-emerald-500 disabled:bg-slate-800 disabled:text-slate-600 text-white font-bold rounded transition-all flex items-center justify-center gap-2">
                <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                EXECUTE HACK
              </button>

            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div
        class="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden reveal-on-scroll">
        <div
          class="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20">
        </div>
        <div class="absolute -top-24 -right-24 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
        <div class="absolute -bottom-24 -left-24 w-64 h-64 bg-black/10 rounded-full blur-3xl"></div>

        <div class="relative z-10">
          <h2 class="text-4xl md:text-5xl font-black text-white mb-6">Let's build something <br />amazing together.</h2>
          <p class="text-emerald-50 text-lg md:text-xl max-w-2xl mx-auto mb-10">
            I'm currently available for freelance work and open to new opportunities. Let's discuss how I can help your
            business grow.
          </p>
          <router-link to="/contact"
            class="inline-block px-10 py-5 bg-white text-emerald-600 font-bold text-lg rounded-full shadow-2xl hover:shadow-white/20 hover:scale-105 transition-all duration-300">
            Start a Conversation
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { onMounted, ref, computed, nextTick } from 'vue';

// Icons
import { CodeBracketIcon, ServerIcon, PaintBrushIcon } from '@heroicons/vue/24/outline';

const technologies = [
  {
    name: 'Vue.js',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg',
    level: 'Expert'
  },
  {
    name: 'React',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    level: 'Advanced'
  },
  {
    name: 'Laravel',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg',
    level: 'Advanced'
  },
  {
    name: 'Node.js',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
    level: 'Advanced'
  },
  {
    name: 'Tailwind',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg',
    level: 'Expert'
  },
  {
    name: 'Webflow',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webflow/webflow-original.svg',
    level: 'Advanced'
  },
  {
    name: 'Figma',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg',
    level: 'Proficient'
  },
];

const additionalSkills = [
  'TypeScript',
  'JavaScript ES6+',
  'REST APIs',
  'GraphQL',
  'MySQL',
  'PostgreSQL',
  'Git & GitHub',
  'Docker',
  'AWS',
  'Responsive Design',
  'Performance Optimization',
  'SEO Best Practices'
];

const services = [
  {
    title: 'Frontend Development',
    description: 'Building responsive, interactive, and high-performance user interfaces using modern frameworks like Vue.js and React.',
    icon: CodeBracketIcon
  },
  {
    title: 'Backend Engineering',
    description: 'Creating robust server-side applications and APIs with Laravel and Node.js to power your digital products.',
    icon: ServerIcon
  },
  {
    title: 'UI/UX Design',
    description: 'Designing intuitive and aesthetically pleasing digital experiences that engage users and drive conversions.',
    icon: PaintBrushIcon
  }
];

const featuredProjects = [
  {
    title: 'EcomBrain',
    category: 'Vue.js • AI',
    description: 'AI Operating System for Ecommerce Automation. Unified workspace for Shopify, ads, and support.',
    image: 'https://gridinsoft.com/img/scr/site/ecombrain-io.jpeg',
    link: 'https://ecombrain.io/'
  },
  {
    title: 'AgenciYou',
    category: 'React • Platform',
    description: 'Comprehensive digital agency platform with modern UI/UX and responsive design.',
    image: 'https://agenciyou-fw0fzo19fn.live-website.com/wp-content/uploads/2025/02/WK-5-1.png',
    link: 'https://agenciyou-fw0fzo19fn.live-website.com/'
  }
];

// --- GAME LOGIC ---
const maxAttempts = 6;
const secretCode = ref([]);
const currentGuess = ref(['', '', '']);
const attempts = ref([]);
const gameState = ref('playing'); // playing, won, lost
const inputs = ref([]);

// Generate a random 3-digit code
const generateCode = () => {
  const code = [];
  for (let i = 0; i < 3; i++) {
    code.push(Math.floor(Math.random() * 10).toString());
  }
  secretCode.value = code;
  // console.log("Cheat Code:", code); // Uncomment for testing
};

const resetGame = () => {
  gameState.value = 'playing';
  attempts.value = [];
  currentGuess.value = ['', '', ''];
  generateCode();
  nextTick(() => inputs.value[0]?.focus());
};

const isGuessComplete = computed(() => {
  return currentGuess.value.every(digit => digit !== '' && !isNaN(digit));
});

// Auto-focus logic
const handleInput = (index, event) => {
  const val = event.target.value;
  // Ensure only numbers
  if (!/^\d*$/.test(val)) {
    currentGuess.value[index] = '';
    return;
  }
  
  // Move to next input if value entered
  if (val && index < 2) {
    inputs.value[index + 1].focus();
  }
};

const handleBackspace = (index, event) => {
  if (!currentGuess.value[index] && index > 0) {
    inputs.value[index - 1].focus();
  }
};

const submitGuess = () => {
  if (!isGuessComplete.value) return;

  const guessArray = [...currentGuess.value];
  const feedback = ['', '', ''];
  const codeCopy = [...secretCode.value]; // Copy to handle duplicates

  // 1. Check for Greens (Correct position)
  guessArray.forEach((digit, i) => {
    if (digit === codeCopy[i]) {
      feedback[i] = 'green';
      codeCopy[i] = null; // Mark as used
      guessArray[i] = null; // Mark as handled
    }
  });

  // 2. Check for Yellows (Wrong position)
  guessArray.forEach((digit, i) => {
    if (digit !== null) { // If not already green
      const foundIndex = codeCopy.indexOf(digit);
      if (foundIndex !== -1) {
        feedback[i] = 'yellow';
        codeCopy[foundIndex] = null; // Mark as used
      } else {
        feedback[i] = 'gray';
      }
    }
  });

  // Add to history
  attempts.value.push({
    guess: [...currentGuess.value],
    feedback
  });

  // Check Win/Loss
  if (feedback.every(f => f === 'green')) {
    gameState.value = 'won';
  } else if (attempts.value.length >= maxAttempts) {
    gameState.value = 'lost';
  } else {
    // Reset inputs for next turn
    currentGuess.value = ['', '', ''];
    nextTick(() => inputs.value[0].focus());
  }
};

// Styling helper
const getFeedbackClass = (status) => {
  switch (status) {
    case 'green': return 'bg-emerald-500 border-emerald-500 text-white';
    case 'yellow': return 'bg-yellow-500 border-yellow-500 text-black';
    case 'gray': return 'bg-slate-700 border-slate-700 text-slate-400';
    default: return 'border-slate-600 text-white';
  }
};

// --- END GAME LOGIC ---

// Intersection Observer for Scroll Animations
onMounted(() => {
  generateCode(); // Start game on load

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        observer.unobserve(entry.target); // Only animate once
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '50px'
  });

  document.querySelectorAll('.reveal-on-scroll').forEach((el) => {
    observer.observe(el);
  });
});
</script>

<style scoped>
.reveal-on-scroll {
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s cubic-bezier(0.5, 0, 0, 1);
}

.reveal-on-scroll.active {
  opacity: 1;
  transform: translateY(0);
}

/* Tech Slider Styles */
.tech-slider-container {
  overflow: hidden;
  padding: 20px 0;
}

.tech-slider {
  display: flex;
  gap: 24px;
  animation: scroll 30s linear infinite;
  width: fit-content;
}

.tech-slider:hover {
  animation-play-state: paused;
}

.tech-card {
  flex-shrink: 0;
  width: 200px;
}

.tech-card-inner {
  position: relative;
  padding: 32px;
  background: linear-gradient(135deg, rgba(15, 23, 42, 0.8) 0%, rgba(15, 23, 42, 0.4) 100%);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(148, 163, 184, 0.1);
  border-radius: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
  overflow: hidden;
  height: 100%;
  min-height: 220px;
}

.tech-card:hover .tech-card-inner {
  border-color: rgba(16, 185, 129, 0.5);
  transform: translateY(-8px);
}

@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(calc(-200px * 7 - 24px * 7));
  }
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .tech-card {
    width: 160px;
  }
  
  .tech-card-inner {
    padding: 24px;
    min-height: 180px;
  }
  
  @keyframes scroll {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(calc(-160px * 7 - 24px * 7));
    }
  }
}

/* Service Card Styles */
.service-card {
  border-radius: 24px;
  transition: transform 0.5s ease;
  min-height: 400px;
}

.service-card:hover {
  transform: translateY(-8px);
}

@media (max-width: 768px) {
  .service-card {
    min-height: 350px;
  }
}

/* GAME STYLES */
.custom-scrollbar::-webkit-scrollbar {
  width: 4px;
}
.custom-scrollbar::-webkit-scrollbar-track {
  background: rgba(30, 41, 59, 0.5);
}
.custom-scrollbar::-webkit-scrollbar-thumb {
  background: rgba(16, 185, 129, 0.3);
  border-radius: 4px;
}
.animate-fade-in-up {
  animation: fadeInUp 0.3s ease-out forwards;
}
@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>