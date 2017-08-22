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
  },
  faceData: {
    faceAttributes: null,
    faceRectangle: null
  }
};

// getters
const getters = {
  setList: state => state.hostesses,
  setData: state => state.data,
  setFaceData: state => state.faceData
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

  async resetFaceData({ commit }) {
    commit(types.RESET_FACE_DATA, {
      faceData: {
        faceRectangle: null
      }
    });
  },

  async fetchAbout({ commit }, payload) {
    const { data } = await axios.get(`/api/${payload}`).catch(err => {
      console.log(err);
    });

    commit(types.SET_HOSTESS_DATA, { data });
  },

  async getAge({ commit }, payload) {
    const options = {
      returnFaceId: true,
      returnFaceLandmarks: true,
      returnFaceAttributes: 'age,gender,headPose,smile,facialHair,glasses,emotion'
    };
    const url = 'https://westeurope.api.cognitive.microsoft.com/face/v1.0/detect';
    const generateParams = (url, options) => {
      let param = '';

      Object.keys(options).forEach((key, i) => {
        param += `${i === 0 ? '?' : '&'}${key}=${options[key]}`;
      });

      return url + param;
    };
    const { data } = await axios({
      method: 'post',
      url: generateParams(url, options),
      headers: {
        'Content-Type': 'application/json',
        'Ocp-Apim-Subscription-Key': 'b4c36ee32139471ba870ea6e8f463b12'
      },
      data: {
        url: payload
      }
    });

    if (!data.length) {
      alert('計測不可能です。');
      return;
    }

    commit(types.SET_FACE_DATA, { faceData: data[0] });
  }
};

// mutations
const mutations = {
  [types.SET_HOSTESSES_LIST](state, { hostesses }) {
    state.hostesses = hostesses;
  },

  [types.SET_HOSTESS_DATA](state, { data }) {
    state.data = data;
  },

  [types.RESET_FACE_DATA](state, { faceData }) {
    state.faceData = faceData;
  },

  [types.SET_FACE_DATA](state, { faceData }) {
    state.faceData = faceData;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
