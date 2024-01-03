import Vue from 'vue';
import Vuex from 'vuex';
import { getAuthFromCookie, getUserFromCookie } from '@/utils/cookies'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    token: getAuthFromCookie() || '',
    username: getUserFromCookie() || '',
  },
  // computed 랑 비슷
  getters: {
    isLogin(state) {
      return state.username !== '';
    }
  },
  mutations: {
    setUsername(state, username) { 
      state.username = username;
    },
    clearUserName(state) {
      state.username = '';
    },
    setToken(state, token) {
      state.token = token;
    }
  }
});