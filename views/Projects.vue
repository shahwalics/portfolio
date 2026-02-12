
<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <div class="flex flex-col md:flex-row md:items-end justify-between mb-16 space-y-6">
      <div>
        <h2 class="text-sm font-bold text-emerald-400 uppercase tracking-widest mb-3 mono">Portfolio</h2>
        <h3 class="text-5xl font-black text-white">Case Studies</h3>
      </div>
      
      <div class="flex flex-wrap gap-2">
        <button 
          v-for="cat in ['all', 'vue', 'react', 'webflow']" 
          :key="cat"
          @click="filter = cat"
          class="px-6 py-2 rounded-full text-sm font-bold capitalize transition-all"
          :class="filter === cat ? 'bg-emerald-600 text-white shadow-xl shadow-emerald-500/20' : 'text-slate-400 hover:text-white bg-slate-900 border border-slate-800'"
        >
          {{ cat }}
        </button>
      </div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
      <div 
        v-for="project in filteredProjects" 
        :key="project.title" 
        class="group bg-slate-900 border border-slate-800 rounded-[2.5rem] overflow-hidden hover:shadow-2xl hover:shadow-emerald-500/10 transition-all duration-500"
      >
        <div class="aspect-video relative overflow-hidden">
          <img :src="project.image" :alt="project.title" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
          <div class="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
        </div>
        <div class="p-10">
          <div class="flex gap-2 mb-4">
            <span v-for="tag in project.tags" :key="tag" class="text-[10px] font-bold tracking-widest text-emerald-400 px-3 py-1 bg-emerald-500/10 rounded-full uppercase">
              {{ tag }}
            </span>
          </div>
          <h4 class="text-2xl font-bold text-white mb-4 group-hover:text-emerald-400 transition-colors">{{ project.title }}</h4>
          <p class="text-slate-400 leading-relaxed mb-8">{{ project.description }}</p>
          <a href="#" class="inline-flex items-center font-bold text-white hover:text-emerald-400 transition-colors">
            View Project Detail
            <svg class="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

const filter = ref('all');

const projects = [
  {
    title: 'VueTask Enterprise',
    category: 'vue',
    description: 'A massive internal dashboard for task allocation using Vue 3 Composition API, Web Workers for processing, and Pinia for global state.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
    tags: ['Vue 3', 'Pinia', 'Vite']
  },
  {
    title: 'Nexus Commerce',
    category: 'react',
    description: 'Next.js based storefront with headless integration, achieving 99+ Lighthouse scores and sub-second page loads.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
    tags: ['React', 'Next.js', 'Stripe']
  },
  {
    title: 'Artisan Webflow',
    category: 'webflow',
    description: 'Pixel-perfect landing page for a creative agency, featuring heavy scroll animations and custom code embeds.',
    image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&q=80&w=800',
    tags: ['Webflow', 'GSAP', 'SEO']
  }
];

const filteredProjects = computed(() => {
  return filter.value === 'all' ? projects : projects.filter(p => p.category === filter.value);
});
</script>
