import 'babel-polyfill';
import Vue from 'vue';

import App from './components/App';

new Vue({
  render(h) {
    return h(App);
  }
}).$mount('#app');

