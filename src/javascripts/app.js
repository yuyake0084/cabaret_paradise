import 'babel-polyfill';
import Vue from 'vue';
import Vuex from 'vuex';
import VueRouter from 'vue-router';

import App from './components/App';

import router from './router/';
import store from './store/';

Vue.use(VueRouter);
Vue.use(Vuex);

new Vue({
  el: '#app',
  router,
  store,
  render(h) {
    return h(App);
  }
}).$mount('#app');

