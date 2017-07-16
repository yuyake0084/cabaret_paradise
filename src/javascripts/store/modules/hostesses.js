import axios from 'axios';

import * as types from '../mutation-types';

const state = {
  hostesses: []
};

// getters
const getters = {
  setList: state => state.hostesses
};

// actions
const actions = {
  async fetchListAll({ commit }) {
    const { data } = await axios.get('/api/').catch(err => {
      console.warn(err);
    });
    const hostesses = data.data;

    commit(types.SET_HOSTESSES_LIST, { hostesses });
  }
};

// mutations
const mutations = {
  [types.SET_HOSTESSES_LIST](state, { hostesses }) {
    state.hostesses = hostesses;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
