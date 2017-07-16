import Vue from 'vue';
import Vuex from 'vuex';

// import { state, mutations } from './mutations';

import hostesses from './modules/hostesses';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    hostesses
  },
  strict: true
});