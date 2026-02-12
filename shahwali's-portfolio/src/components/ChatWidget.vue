<template>
  <div class="fixed bottom-6 right-6 z-50">
    <div v-if="isOpen" class="bg-slate-900 border border-slate-800 w-[350px] sm:w-[400px] h-[500px] rounded-[2.5rem] shadow-2xl flex flex-col overflow-hidden animate-in slide-in-from-bottom-5 duration-300">
      
      <div class="bg-gradient-to-r from-emerald-600 to-blue-600 p-6 flex items-center justify-between shrink-0">
        <div class="flex items-center space-x-3">
          <div class="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center overflow-hidden backdrop-blur-sm border border-white/30">
             <img src="https://api.dicebear.com/7.x/bottts/svg?seed=Shahwali" alt="AI" class="w-full h-full object-cover" />
          </div>
          <div>
            <p class="text-white font-bold text-sm">Shahwali AI</p>
            <div class="flex items-center">
              <span class="w-2 h-2 rounded-full bg-emerald-300 animate-pulse mr-1.5 shadow-[0_0_8px_rgba(110,231,183,0.8)]"></span>
              <p class="text-emerald-100 text-[10px] uppercase font-bold tracking-widest">Online</p>
            </div>
          </div>
        </div>
        <button @click="isOpen = false" class="text-white hover:bg-white/20 p-2 rounded-full transition-colors">
          <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
        </button>
      </div>

      <div ref="scrollRef" class="flex-grow overflow-y-auto p-6 space-y-4 bg-slate-950 scroll-smooth">
        <div v-for="(msg, idx) in messages" :key="idx" :class="['flex', msg.role === 'user' ? 'justify-end' : 'justify-start']">
          <div :class="['max-w-[85%] p-4 rounded-2xl text-sm leading-relaxed shadow-sm', 
            msg.role === 'user' 
              ? 'bg-emerald-600 text-white rounded-tr-none' 
              : 'bg-slate-800 text-slate-200 rounded-tl-none border border-slate-700']">
            {{ msg.text }}
          </div>
        </div>
        
        <div v-if="isLoading" class="flex justify-start">
          <div class="bg-slate-800 p-4 rounded-2xl rounded-tl-none border border-slate-700 flex space-x-1.5 items-center">
            <div class="w-2 h-2 bg-emerald-500 rounded-full animate-bounce"></div>
            <div class="w-2 h-2 bg-emerald-500 rounded-full animate-bounce delay-75"></div>
            <div class="w-2 h-2 bg-emerald-500 rounded-full animate-bounce delay-150"></div>
          </div>
        </div>
      </div>

      <form @submit.prevent="handleSubmit" class="p-4 bg-slate-900 border-t border-slate-800 shrink-0">
        <div class="relative group">
          <input 
            v-model="input" 
            type="text" 
            :disabled="isLoading"
            placeholder="Ask about my skills..." 
            class="w-full bg-slate-950 border border-slate-700 text-white text-sm rounded-xl py-3.5 px-4 focus:border-emerald-500 outline-none pr-12 transition-all placeholder:text-slate-500 disabled:opacity-50" 
          />
          <button 
            type="submit" 
            :disabled="!input.trim() || isLoading"
            class="absolute right-2 top-2 p-1.5 text-emerald-500 hover:bg-emerald-500/10 rounded-lg disabled:text-slate-600 disabled:hover:bg-transparent transition-colors"
          >
            <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg>
          </button>
        </div>
      </form>
    </div>

    <button v-else @click="isOpen = true" class="group w-16 h-16 bg-emerald-600 hover:bg-emerald-500 rounded-full flex items-center justify-center shadow-[0_8px_30px_rgba(5,150,105,0.4)] transition-all transform hover:scale-110 active:scale-95">
      <svg class="w-8 h-8 text-white group-hover:rotate-12 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" /></svg>
      <span class="absolute -top-1 -right-1 flex h-4 w-4">
        <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
        <span class="relative inline-flex rounded-full h-4 w-4 bg-emerald-500 border-2 border-slate-900"></span>
      </span>
    </button>
  </div>
</template>

<script setup>
import { ref, watch, nextTick } from 'vue';
import { getChatResponse } from '@/services/gemini';

const isOpen = ref(false);
const input = ref('');
const isLoading = ref(false);
const scrollRef = ref(null);
const messages = ref([
  { role: 'ai', text: "Hi! I'm Shahwali's AI assistant. Ask me anything about his coding skills, projects, or experience!" }
]);

const scrollToBottom = async () => {
  await nextTick();
  if (scrollRef.value) {
    scrollRef.value.scrollTop = scrollRef.value.scrollHeight;
  }
};

// Scroll when messages change
watch(messages, scrollToBottom, { deep: true });

// Scroll when loading state changes (to show the thinking bubbles)
watch(isLoading, scrollToBottom);

const handleSubmit = async () => {
  if (!input.value.trim() || isLoading.value) return;
  
  const userMsg = input.value;
  input.value = ''; // Clear input immediately
  
  // 1. Add User Message
  messages.value.push({ role: 'user', text: userMsg });
  isLoading.value = true;

  try {
    // 2. Get AI Response
    const aiRes = await getChatResponse(userMsg);
    
    // 3. Add AI Message
    messages.value.push({ role: 'ai', text: aiRes });
  } catch (err) {
    messages.value.push({ role: 'ai', text: "Sorry, something went wrong. Please try again." });
  } finally {
    isLoading.value = false;
    // Focus back on input if you want (optional)
  }
};
</script>