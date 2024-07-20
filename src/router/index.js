// src/router/index.js
import Vue from 'vue';
import Router from 'vue-router';
import Home from '../components/HomeFile.vue';
import About from '../components/About.vue';

Vue.use(Router);

export default new Router({
  mode: 'history', // Use history mode to remove the hash from URLs
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/about',
      name: 'About',
      component: About,
    },
  ],
});
