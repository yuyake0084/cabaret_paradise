import Vue from 'vue';
import Router from 'vue-router';

import Index from '../pages/Index';
import About from '../pages/About';

Vue.use(Router);

const router = new Router({
  routes: [
    { path: '/', component: Index },
    { path: '/:id', component: About }
  ]
});

export default router;