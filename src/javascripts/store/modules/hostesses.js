import axios from 'axios';

import * as types from '../mutation-types';

const state = {
  hostesses: [],
  data: {
    data: {
      name: null,
      bloodType: null,
      bust: null,
      dob: null,
      graduate: null,
      height: null,
      src: null
    }
  }
};

// getters
const getters = {
  setList: state => state.hostesses,
  setData: state => state.data
};

// actions
const actions = {
  async fetchListAll({ commit }) {
    const { data } = await axios.get('/api/').catch(err => {
      console.warn(err);
    });
    const hostesses = data.data;

    commit(types.SET_HOSTESSES_LIST, { hostesses });
  },

  async fetchAbout({ commit }, payload) {
    const { data } = await axios.get(`/api/${payload}`).catch(err => {
      console.log(err);
    });

    console.log(data)
    commit(types.SET_HOSTESS_DATA, { data });
  }
};

// mutations
const mutations = {
  [types.SET_HOSTESSES_LIST](state, { hostesses }) {
    state.hostesses = hostesses;
  },

  [types.SET_HOSTESS_DATA](state, { data }) {
    state.data = data;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
