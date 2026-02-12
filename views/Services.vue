
<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <div class="text-center mb-20">
      <h2 class="text-sm font-bold text-emerald-400 uppercase tracking-widest mb-3 mono">Capabilities</h2>
      <h3 class="text-5xl font-black text-white">Full-Service Development</h3>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
      <div v-for="(service, idx) in services" :key="idx" class="p-10 bg-slate-900/40 border border-slate-800 rounded-[3rem] hover:border-emerald-500/50 transition-all group">
        <div class="w-16 h-16 bg-slate-800 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
          <component :is="service.icon" class="w-8 h-8 text-emerald-400" />
        </div>
        <h4 class="text-2xl font-bold text-white mb-4">{{ service.title }}</h4>
        <p class="text-slate-400 leading-relaxed">{{ service.description }}</p>
      </div>
    </div>

    <div class="bg-slate-900 rounded-[3rem] p-12 border border-slate-800">
      <h4 class="text-2xl font-bold text-white text-center mb-12">My Working Process</h4>
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div v-for="(step, idx) in steps" :key="idx" class="relative">
          <div class="text-5xl font-black text-emerald-500/10 absolute -top-4 -left-2">{{ idx + 1 }}</div>
          <p class="font-bold text-white mb-2 relative z-10">{{ step.title }}</p>
          <p class="text-sm text-slate-500 leading-relaxed">{{ step.desc }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { h } from 'vue';

const services = [
  {
    title: 'Enterprise Apps',
    description: 'Scalable backends with Laravel and complex state-managed frontends using Vue 3.',
    icon: () => h('svg', { fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor' }, [h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '1.5', d: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4' })])
  },
  {
    title: 'Interactive UI',
    description: 'Engaging, reactive user interfaces with modern frameworks and Tailwind CSS.',
    icon: () => h('svg', { fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor' }, [h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '1.5', d: 'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' })])
  },
  {
    title: 'Rapid Prototyping',
    description: 'Fast, clean, and SEO-friendly marketing sites using Webflow for early stage ventures.',
    icon: () => h('svg', { fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor' }, [h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '1.5', d: 'M13 10V3L4 14h7v7l9-11h-7z' })])
  }
];

const steps = [
  { title: 'Discovery', desc: 'Understanding requirements, user flow, and business goals.' },
  { title: 'Design', desc: 'Crafting high-fidelity mockups and interaction models.' },
  { title: 'Dev', desc: 'Clean, modular coding with testing at every stage.' },
  { title: 'Scale', desc: 'Deployment and optimization for long-term growth.' }
];
</script>
