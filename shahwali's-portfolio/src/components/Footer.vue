<template>
  <footer class="py-12 border-t border-slate-900">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0 text-center">
        <div class="text-xl font-black bg-gradient-to-r from-emerald-400 to-blue-500 bg-clip-text text-transparent mono">
          SHAHWALI
        </div>
        <p class="text-slate-500 text-sm">
          © {{ new Date().getFullYear() }} Shahwali. Built with Vue 3 & Precision.
        </p>
        <div class="flex space-x-6">
          <a href="#" class="text-slate-400 hover:text-emerald-400 transition-colors">GitHub</a>
          <a href="#" class="text-slate-400 hover:text-emerald-400 transition-colors">LinkedIn</a>
          <a href="#" class="text-slate-400 hover:text-emerald-400 transition-colors">Twitter</a>
        </div>
      </div>
    </div>
  </footer>
</template>
