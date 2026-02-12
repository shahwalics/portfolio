
<template>
  <nav class="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-slate-950/80 border-b border-slate-800">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-20">
        <div class="flex-shrink-0 flex items-center">
          <router-link to="/" class="text-2xl font-black bg-gradient-to-r from-emerald-400 to-blue-500 bg-clip-text text-transparent mono">
            SHAHWALI
          </router-link>
        </div>

        <!-- Desktop Links -->
        <div class="hidden md:block">
          <div class="ml-10 flex items-baseline space-x-8">
            <router-link 
              v-for="link in navLinks" 
              :key="link.name" 
              :to="link.href"
              class="px-3 py-2 text-sm font-medium transition-colors duration-300"
              :class="activeRoute === link.name ? 'text-emerald-400' : 'text-slate-400 hover:text-emerald-300'"
            >
              {{ link.label }}
            </router-link>
            <router-link
              to="/contact"
              class="ml-4 px-6 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white text-sm font-semibold rounded-full transition-all duration-300 shadow-lg shadow-emerald-900/20"
            >
              Let's Chat
            </router-link>
          </div>
        </div>

        <!-- Mobile menu button -->
        <div class="md:hidden flex items-center">
          <button @click="isMenuOpen = !isMenuOpen" class="inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-white hover:bg-slate-800">
            <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path v-if="isMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile Menu -->
    <transition enter-active-class="transition duration-100 ease-out" enter-from-class="transform scale-95 opacity-0" enter-to-class="transform scale-100 opacity-100" leave-active-class="transition duration-75 ease-in" leave-from-class="transform scale-100 opacity-100" leave-to-class="transform scale-95 opacity-0">
      <div v-if="isMenuOpen" class="md:hidden bg-slate-900 border-b border-slate-800 py-4 px-4 space-y-2">
        <router-link 
          v-for="link in navLinks" 
          :key="link.name" 
          :to="link.href"
          @click="isMenuOpen = false"
          class="block px-3 py-2 rounded-md text-base font-medium"
          :class="activeRoute === link.name ? 'text-emerald-400 bg-slate-800' : 'text-slate-300 hover:bg-slate-800'"
        >
          {{ link.label }}
        </router-link>
      </div>
    </transition>
  </nav>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const isMenuOpen = ref(false);
const activeRoute = computed(() => route.name);

const navLinks = [
  { name: 'home', label: 'Home', href: '/' },
  { name: 'about', label: 'About', href: '/about' },
  { name: 'services', label: 'Services', href: '/services' },
  { name: 'projects', label: 'Projects', href: '/projects' },
];
</script>
