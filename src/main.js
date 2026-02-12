import { createApp } from 'vue';
import { createRouter, createWebHashHistory } from 'vue-router';
import App from './App.vue';

const Home = () => import('./views/Home.vue');
const About = () => import('./views/About.vue');
const Services = () => import('./views/Services.vue');
const Projects = () => import('./views/Projects.vue');
const Contact = () => import('./views/Contact.vue');

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/', name: 'home', component: Home },
    { path: '/about', name: 'about', component: About },
    { path: '/services', name: 'services', component: Services },
    { path: '/projects', name: 'projects', component: Projects },
    { path: '/contact', name: 'contact', component: Contact },
  ],
  scrollBehavior() {
    return { top: 0, behavior: 'smooth' };
  },
});

const app = createApp(App);
app.use(router);
app.mount('#app');
