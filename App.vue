
<template>
  <div class="min-h-screen flex flex-col relative overflow-x-hidden">
    <!-- Background Orbs -->
    <div class="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none">
      <div class="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-emerald-500/10 blur-[120px] rounded-full animate-blob"></div>
      <div class="absolute top-[20%] right-[-5%] w-[35%] h-[35%] bg-blue-500/10 blur-[120px] rounded-full animate-blob animation-delay-2000"></div>
      <div class="absolute bottom-[-10%] left-[10%] w-[40%] h-[40%] bg-purple-500/10 blur-[120px] rounded-full animate-blob animation-delay-4000"></div>
    </div>

    <Navbar />
    
    <main class="flex-grow pt-24">
      <router-view v-slot="{ Component }">
        <transition name="page" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>

    <Footer />
    <ChatWidget />
  </div>
</template>

<script setup>
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';
import ChatWidget from './components/ChatWidget.vue';
</script>
