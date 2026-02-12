
<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
      <div class="sticky top-24">
        <h2 class="text-sm font-bold text-emerald-400 uppercase tracking-widest mb-4 mono">My Story</h2>
        <h3 class="text-4xl md:text-5xl font-black text-white mb-8">Building scalable web apps for the future.</h3>
        <div class="space-y-6 text-slate-400 leading-relaxed text-lg">
          <p>
            I've spent the last 5+ years mastering the art of digital craftsmanship. Starting with raw PHP and JavaScript, I found my niche in the <span class="text-white font-semibold">Vue.js ecosystem</span>.
          </p>
          <p>
            I believe that code is just a means to an end: <span class="text-emerald-400">solving human problems</span>. Whether it's a Laravel backend handling millions of requests or a React dashboard showing real-time data, my goal is simplicity and efficiency.
          </p>
        </div>
        
        <div class="mt-12 grid grid-cols-2 gap-4">
          <div v-for="stat in stats" :key="stat.label" class="p-6 bg-slate-900 border border-slate-800 rounded-2xl">
            <p class="text-3xl font-bold text-emerald-400">{{ stat.value }}</p>
            <p class="text-sm text-slate-500">{{ stat.label }}</p>
          </div>
        </div>
      </div>

      <div class="space-y-12">
        <div>
          <h4 class="text-xl font-bold text-white mb-6">Core Tech Stack</h4>
          <div class="grid grid-cols-1 gap-4">
            <div v-for="skill in skills" :key="skill.name" class="p-4 bg-slate-900/50 border border-slate-800 rounded-xl flex items-center justify-between">
              <span class="font-medium text-slate-300">{{ skill.name }}</span>
              <div class="flex space-x-1">
                <div v-for="i in 5" :key="i" class="w-1.5 h-1.5 rounded-full" :class="i <= skill.level ? 'bg-emerald-500' : 'bg-slate-700'"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const stats = [
  { label: 'Years Experience', value: '5+' },
  { label: 'Projects Completed', value: '40+' },
  { label: 'Code Commits', value: '1.2k+' },
  { label: 'Client Satisfaction', value: '100%' }
];

const skills = [
  { name: 'Vue.js (Composition API, Pinia)', level: 5 },
  { name: 'React.js (Next.js)', level: 4 },
  { name: 'Laravel (Blade, Eloquent)', level: 4 },
  { name: 'JavaScript (TypeScript)', level: 5 },
  { name: 'Webflow (Rapid UI)', level: 4 },
  { name: 'Tailwind CSS', level: 5 }
];
</script>
