import Vue from 'vue';
import Vuex from 'vuex';
import { getAuthFromCookie, getUserFromCookie } from '@/utils/cookies'
import { loginUser, registerUser } from '@/api/auth'
import { saveAuthToCookie, saveUserToCookie } from '@/utils/cookies';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    token: getAuthFromCookie() || '',
    username: getUserFromCookie() || '',
    message: '',
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
    },
    // 토큰 초기화
    clearToken(state) {
      state.token = '';
    },
    setMessage(state, message) {
      state.message = message;
    }
  },
  actions: {
    async LOGIN({ commit }, userData) {
      const {data} = await loginUser(userData);
        console.log(data.token)
        commit('setToken', data.token);
        commit('setUsername', data.user.username);
        saveAuthToCookie(data.token);
        saveUserToCookie(data.user.username);
    },
    async REGISTER({ commit }, userData) {
      const { data } = await registerUser(userData);
      commit('setMessage', `${data.username} 님이 가입되었습니다.`);
    }
  }
});