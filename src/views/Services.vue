<template>
  <div class="min-h-screen">
    <!-- Hero Section -->
    <section class="relative py-20 md:py-32 overflow-hidden">
      <!-- Background elements -->
      <div class="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900/30 to-slate-950"></div>
      <div class="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl animate-pulse"></div>
      <div class="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse" style="animation-delay: 1s;"></div>
      
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div class="text-center max-w-4xl mx-auto">
          <h2 class="text-sm font-bold text-emerald-400 uppercase tracking-widest mb-4 mono">Capabilities</h2>
          <h1 class="text-5xl md:text-7xl font-black text-white mb-6 leading-tight">
            Full-Service 
            <span class="bg-gradient-to-r from-emerald-400 via-teal-400 to-blue-500 bg-clip-text text-transparent">
              Development
            </span>
          </h1>
          <p class="text-xl text-slate-400 leading-relaxed max-w-3xl mx-auto">
            From concept to deployment, I deliver end-to-end solutions that combine cutting-edge technology with exceptional user experience.
          </p>
        </div>
      </div>
    </section>

    <!-- Services Grid -->
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
        <div v-for="(service, idx) in services" :key="idx" 
          class="service-card group relative overflow-hidden"
          :style="{ animationDelay: `${idx * 100}ms` }">
          
          <!-- Gradient background -->
          <div class="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-slate-900/60 to-slate-950/80 backdrop-blur-sm"></div>
          
          <!-- Hover glow -->
          <div class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <div class="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-blue-500/5 to-purple-500/10"></div>
            <div class="absolute -inset-1 bg-gradient-to-r from-emerald-500/20 via-blue-500/20 to-purple-500/20 blur-2xl"></div>
          </div>
          
          <!-- Border -->
          <div class="absolute inset-0 rounded-[2rem] border border-slate-800/50 group-hover:border-emerald-500/40 transition-all duration-500"></div>
          
          <!-- Content -->
          <div class="relative p-10 h-full flex flex-col">
            <!-- Icon -->
            <div class="relative mb-8">
              <div class="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-blue-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div class="relative w-20 h-20 bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 border border-slate-700/50 group-hover:border-emerald-500/30 shadow-lg">
                <component :is="service.icon" class="w-10 h-10 text-emerald-400 group-hover:text-emerald-300 transition-colors duration-300" />
              </div>
            </div>
            
            <!-- Title -->
            <h4 class="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-emerald-400 group-hover:to-blue-400 group-hover:bg-clip-text transition-all duration-300">
              {{ service.title }}
            </h4>
            
            <!-- Description -->
            <p class="text-slate-400 leading-relaxed text-base group-hover:text-slate-300 transition-colors duration-300 flex-grow">
              {{ service.description }}
            </p>
            
            <!-- Decorative number -->
            <div class="absolute top-6 right-6 text-7xl font-black text-slate-800/20 group-hover:text-emerald-500/10 transition-colors duration-500">
              0{{ idx + 1 }}
            </div>
            
            <!-- Corner accent -->
            <div class="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-emerald-500/5 to-transparent rounded-tr-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>
        </div>
      </div>
    </section>

    <!-- Working Process Section -->
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 mb-24">
      <div class="relative overflow-hidden rounded-[3rem] border border-slate-800/50">
        <!-- Background -->
        <div class="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-900/95 to-slate-950"></div>
        <div class="absolute top-0 right-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl"></div>
        <div class="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        
        <!-- Content -->
        <div class="relative p-12 md:p-16">
          <div class="text-center mb-16">
            <h4 class="text-3xl md:text-4xl font-black text-white mb-4">My Working Process</h4>
            <p class="text-slate-400 text-lg max-w-2xl mx-auto">A proven methodology that ensures quality, efficiency, and exceptional results</p>
          </div>
          
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            <div v-for="(step, idx) in steps" :key="idx" class="process-step group relative">
              <!-- Connecting line (hidden on last item and mobile) -->
              <div v-if="idx < steps.length - 1" class="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-emerald-500/30 to-transparent"></div>
              
              <!-- Step number circle -->
              <div class="relative mb-6">
                <div class="w-24 h-24 rounded-full bg-gradient-to-br from-slate-800 to-slate-900 border-2 border-slate-700/50 group-hover:border-emerald-500/50 flex items-center justify-center transition-all duration-500 group-hover:scale-110 shadow-lg">
                  <span class="text-3xl font-black text-emerald-400 group-hover:text-emerald-300 transition-colors">{{ idx + 1 }}</span>
                </div>
                <!-- Glow effect -->
                <div class="absolute inset-0 rounded-full bg-gradient-to-br from-emerald-500/20 to-blue-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              
              <!-- Step content -->
              <div class="relative">
                <h5 class="text-xl font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors duration-300">
                  {{ step.title }}
                </h5>
                <p class="text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors duration-300">
                  {{ step.desc }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 mb-24">
      <div class="relative overflow-hidden rounded-[3rem] p-12 md:p-20 text-center">
        <!-- Gradient background -->
        <div class="absolute inset-0 bg-gradient-to-r from-emerald-600 to-blue-600"></div>
        <div class="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
        
        <!-- Floating orbs -->
        <div class="absolute -top-24 -right-24 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
        <div class="absolute -bottom-24 -left-24 w-64 h-64 bg-black/10 rounded-full blur-3xl"></div>
        
        <!-- Content -->
        <div class="relative z-10">
          <h2 class="text-4xl md:text-5xl font-black text-white mb-6">
            Ready to start your project?
          </h2>
          <p class="text-emerald-50 text-lg md:text-xl max-w-2xl mx-auto mb-10">
            Let's discuss how I can help bring your vision to life with cutting-edge technology and exceptional design.
          </p>
          <router-link to="/contact"
            class="inline-block px-10 py-5 bg-white text-emerald-600 font-bold text-lg rounded-full shadow-2xl hover:shadow-white/20 hover:scale-105 transition-all duration-300">
            Get in Touch
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { h } from 'vue';

const services = [
  {
    title: 'Enterprise Apps',
    description: 'Scalable backends with Laravel and complex state-managed frontends using Vue 3. Built for performance, security, and long-term maintainability.',
    icon: () => h('svg', { fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor' }, [h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '1.5', d: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4' })])
  },
  {
    title: 'Interactive UI',
    description: 'Engaging, reactive user interfaces with modern frameworks and Tailwind CSS. Pixel-perfect designs that delight users and drive conversions.',
    icon: () => h('svg', { fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor' }, [h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '1.5', d: 'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' })])
  },
  {
    title: 'Rapid Prototyping',
    description: 'Fast, clean, and SEO-friendly marketing sites using Webflow for early stage ventures. Launch quickly without compromising quality.',
    icon: () => h('svg', { fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor' }, [h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '1.5', d: 'M13 10V3L4 14h7v7l9-11h-7z' })])
  }
];

const steps = [
  { title: 'Discovery', desc: 'Understanding requirements, user flow, and business goals through detailed consultation.' },
  { title: 'Design', desc: 'Crafting high-fidelity mockups and interaction models that align with your brand.' },
  { title: 'Development', desc: 'Clean, modular coding with testing at every stage to ensure quality and reliability.' },
  { title: 'Launch & Scale', desc: 'Deployment, optimization, and ongoing support for long-term growth and success.' }
];
</script>

<style scoped>
.service-card {
  border-radius: 2rem;
  transition: transform 0.5s ease;
  min-height: 420px;
}

.service-card:hover {
  transform: translateY(-12px);
}

.process-step {
  transition: all 0.3s ease;
}

@media (max-width: 768px) {
  .service-card {
    min-height: 380px;
  }
}
</style>
