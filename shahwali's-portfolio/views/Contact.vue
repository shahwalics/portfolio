
<template>
  <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <div class="text-center mb-16">
      <h2 class="text-sm font-bold text-emerald-400 uppercase tracking-widest mb-3 mono">Get in touch</h2>
      <h3 class="text-5xl font-black text-white">Let's work together</h3>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-16">
      <div>
        <h4 class="text-2xl font-bold text-white mb-6">Contact Information</h4>
        <p class="text-slate-400 mb-8 leading-relaxed">
          I'm currently available for freelance work and full-time opportunities. Drop me a line and I'll get back to you within 24 hours.
        </p>
        
        <div class="space-y-6">
          <div v-for="info in contactInfo" :key="info.label" class="flex items-center space-x-4 group">
            <div class="w-12 h-12 bg-slate-900 border border-slate-800 rounded-xl flex items-center justify-center group-hover:border-emerald-500/50 transition-colors">
              <component :is="info.icon" class="w-5 h-5 text-emerald-400" />
            </div>
            <div>
              <p class="text-xs text-slate-500 font-bold uppercase tracking-widest">{{ info.label }}</p>
              <p class="text-white font-medium">{{ info.value }}</p>
            </div>
          </div>
        </div>
      </div>

      <div class="bg-slate-900 border border-slate-800 p-8 rounded-[2.5rem]">
        <form @submit.prevent="handleSubmit" class="space-y-6">
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label class="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Name</label>
              <input type="text" v-model="form.name" class="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:border-emerald-500 outline-none transition-colors" placeholder="John Doe" />
            </div>
            <div>
              <label class="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Email</label>
              <input type="email" v-model="form.email" class="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:border-emerald-500 outline-none transition-colors" placeholder="john@example.com" />
            </div>
          </div>
          <div>
            <label class="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Message</label>
            <textarea v-model="form.message" rows="5" class="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:border-emerald-500 outline-none transition-colors resize-none" placeholder="Tell me about your project..."></textarea>
          </div>
          <button type="submit" class="w-full py-4 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl transition-all shadow-lg shadow-emerald-500/20">
            Send Message
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, h } from 'vue';

const form = reactive({ name: '', email: '', message: '' });

const contactInfo = [
  { label: 'Email', value: 'hello@shahwali.dev', icon: () => h('svg', { fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor' }, [h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' })]) },
  { label: 'Location', value: 'Remote / Global', icon: () => h('svg', { fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor' }, [h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z' }), h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M15 11a3 3 0 11-6 0 3 3 0 016 0z' })]) }
];

const handleSubmit = () => {
  alert('Thank you! This is a demo. In a real app, this would send an email.');
};
</script>
