// Import necessary dependencies
import Vue from 'vue';
import VueRouter from 'vue-router';

// Import your Vue components
import Home from './components/Home.vue';
import About from './components/About.vue';
import Contact from './components/Contact.vue';

// Use VueRouter plugin
Vue.use(VueRouter);

// Define your routes
const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    component: About
  },
  {
    path: '/contact',
    name: 'contact',
    component: Contact
  }
];

// Create the router instance
const router = new VueRouter({
  mode: 'history', // Use history mode for clean URLs
  routes // Pass the routes array
});

// Export the router instance
export default router;
