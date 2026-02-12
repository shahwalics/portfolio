<template>
  <div class="min-h-screen">
    <!-- Hero Section -->
    <section class="relative py-20 md:py-32 overflow-hidden">
      <!-- Background elements -->
      <div class="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900/30 to-slate-950"></div>
      <div class="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl animate-pulse"></div>
      <div class="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse" style="animation-delay: 1s;"></div>
      
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div class="text-center max-w-4xl mx-auto mb-12">
          <h2 class="text-sm font-bold text-emerald-400 uppercase tracking-widest mb-4 mono">Portfolio</h2>
          <h1 class="text-5xl md:text-7xl font-black text-white mb-6 leading-tight">
            Featured 
            <span class="bg-gradient-to-r from-emerald-400 via-teal-400 to-blue-500 bg-clip-text text-transparent">
              Projects
            </span>
          </h1>
          <p class="text-xl text-slate-400 leading-relaxed max-w-3xl mx-auto mb-12">
            A showcase of real-world applications built with modern technologies, delivering exceptional user experiences and business value.
          </p>
          
          <!-- Filter Buttons -->
          <div class="flex flex-wrap justify-center gap-3">
            <button 
              v-for="cat in filterCategories" 
              :key="cat"
              @click="filter = cat"
              class="filter-btn group relative overflow-hidden"
              :class="filter === cat ? 'active' : ''">
              
              <!-- Active background -->
              <div v-if="filter === cat" class="absolute inset-0 bg-gradient-to-r from-emerald-600 to-blue-600"></div>
              
              <!-- Hover background -->
              <div class="absolute inset-0 bg-slate-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <!-- Content -->
              <span class="relative z-10 capitalize font-bold">{{ cat }}</span>
              
              <!-- Active glow -->
              <div v-if="filter === cat" class="absolute -inset-1 bg-gradient-to-r from-emerald-500/30 to-blue-500/30 blur-lg -z-10"></div>
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Projects Grid -->
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div 
          v-for="project in filteredProjects" 
          :key="project.title" 
          class="project-card group relative overflow-hidden">
          
          <!-- Background gradient -->
          <div class="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-900/95 to-slate-950"></div>
          
          <!-- Hover glow -->
          <div class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <div class="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-blue-500/5 to-purple-500/10"></div>
            <div class="absolute -inset-1 bg-gradient-to-r from-emerald-500/20 via-blue-500/20 to-purple-500/20 blur-2xl"></div>
          </div>
          
          <!-- Border -->
          <div class="absolute inset-0 rounded-[2.5rem] border border-slate-800/50 group-hover:border-emerald-500/40 transition-all duration-500"></div>
          
          <!-- Content -->
          <div class="relative">
            <!-- Image -->
            <div class="aspect-video relative overflow-hidden rounded-t-[2.5rem]">
              <img :src="project.image" :alt="project.title" 
                class="w-full h-full object-contain bg-slate-950/50 group-hover:scale-105 transition-transform duration-700" />
              
              <!-- Image overlay -->
              <div class="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500"></div>
              
              <!-- Floating tags on image -->
              <div class="absolute top-4 left-4 flex flex-wrap gap-2">
                <span v-for="tag in project.tags" :key="tag" 
                  class="px-3 py-1.5 bg-slate-950/80 backdrop-blur-md border border-emerald-500/30 rounded-full text-emerald-400 text-xs font-bold tracking-wider uppercase">
                  {{ tag }}
                </span>
              </div>
            </div>
            
            <!-- Text Content -->
            <div class="p-8 md:p-10">
              <!-- Title -->
              <h4 class="text-3xl font-black text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-emerald-400 group-hover:to-blue-400 group-hover:bg-clip-text transition-all duration-300">
                {{ project.title }}
              </h4>
              
              <!-- Description -->
              <p class="text-slate-400 leading-relaxed mb-8 group-hover:text-slate-300 transition-colors duration-300">
                {{ project.description }}
              </p>
              
              <!-- CTA Button -->
              <a :href="project.link" target="_blank" 
                class="inline-flex items-center px-6 py-3 bg-gradient-to-r from-emerald-600/10 to-blue-600/10 border border-emerald-500/30 text-emerald-400 font-bold rounded-xl hover:from-emerald-600 hover:to-blue-600 hover:text-white hover:border-transparent hover:shadow-lg hover:shadow-emerald-500/20 transition-all duration-300 group/btn">
                <span>View Live Site</span>
                <svg class="ml-2 w-5 h-5 group-hover/btn:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Empty State -->
      <div v-if="filteredProjects.length === 0" class="text-center py-20">
        <div class="w-24 h-24 mx-auto mb-6 bg-slate-900 rounded-full flex items-center justify-center border border-slate-800">
          <svg class="w-12 h-12 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
          </svg>
        </div>
        <h3 class="text-2xl font-bold text-white mb-2">No projects found</h3>
        <p class="text-slate-400">Try selecting a different filter</p>
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
            Have a project in mind?
          </h2>
          <p class="text-emerald-50 text-lg md:text-xl max-w-2xl mx-auto mb-10">
            Let's collaborate to create something amazing. I'm always excited to work on innovative projects.
          </p>
          <router-link to="/contact"
            class="inline-block px-10 py-5 bg-white text-emerald-600 font-bold text-lg rounded-full shadow-2xl hover:shadow-white/20 hover:scale-105 transition-all duration-300">
            Start a Project
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

const filter = ref('all');

// ADDED: Missing categories array for the buttons
const filterCategories = ['all', 'vue', 'react', 'webflow'];

const projects = [
  {
    title: 'EcomBrain',
    category: 'vue',
    description: 'AI Operating System for Ecommerce Automation. One unified workspace connecting Shopify, ads, support, and finance with an AI advisor that automates 80% of business tasks.',
    image: 'https://framerusercontent.com/images/DEANVah27gZKKvTyyRebV93SM4.png?scale-down-to=512&width=1156&height=208',
    tags: ['Vue.js', 'AI', 'Automation'],
    link: 'https://ecombrain.io/'
  },
  {
    title: 'AgenciYou',
    category: 'react',
    description: 'A comprehensive digital agency platform built with React, showcasing modern UI/UX principles and responsive design patterns.',
    image: 'https://agenciyou-fw0fzo19fn.live-website.com/wp-content/uploads/2025/02/WK-5-1.png',
    tags: ['React.js', 'Tailwind', 'UI/UX'],
    link: 'https://agenciyou-fw0fzo19fn.live-website.com/'
  },
  {
    title: 'Clicks and Trades',
    category: 'vue',
    // FIXED: Changed single quotes to double quotes to handle "world's"
    description: "The world's first crypto education system specifically designed for seniors (50+). Features a simplified interface and structured learning paths.",
    image: 'https://clicksandtrades.com/wp-content/themes/company-61-clicks-and-trades-sro-website/userUploads/logo/ClicksandTradesNavlogo.png',
    tags: ['Vue.js', 'Education', 'Crypto'],
    link: 'https://clicksandtrades.com/'
  },
  {
    title: 'Syed Shahwali Portfolio (Legacy)',
    category: 'webflow',
    description: 'Previous portfolio site built with Webflow, demonstrating rapid prototyping and visual development capabilities.',
    image: 'https://arokeestudio.com/wp-content/uploads/2025/04/6797809a60472b7b56d69e84_653150dd550847e7ad4c24af_Slide-16_9-18-p-1600.webp',
    tags: ['Webflow', 'Design', 'Legacy'],
    link: 'https://syedshahwali.netlify.app'
  }
];

const filteredProjects = computed(() => {
  if (filter.value === 'all') return projects;
  return projects.filter(p => p.category === filter.value);
});
</script>

<style scoped>
.filter-btn {
  position: relative;
  padding: 12px 28px;
  border-radius: 9999px;
  border: 1px solid rgba(148, 163, 184, 0.2);
  color: rgba(148, 163, 184, 0.8);
  transition: all 0.3s ease;
}

.filter-btn.active {
  color: white;
  border-color: transparent;
  box-shadow: 0 8px 30px rgba(5, 150, 105, 0.3);
}

.filter-btn:not(.active):hover {
  color: white;
  border-color: rgba(16, 185, 129, 0.3);
}

.project-card {
  border-radius: 2.5rem;
  transition: transform 0.5s ease;
}

.project-card:hover {
  transform: translateY(-12px);
}

@media (max-width: 768px) {
  .project-card:hover {
    transform: translateY(-8px);
  }
}
</style>
