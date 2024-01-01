import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    username: '',
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
  }
});