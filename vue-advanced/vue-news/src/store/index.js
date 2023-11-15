import Vue from 'vue';
import Vuex from 'vuex';
// import { fetchNewsList, fetchAskList, fetchJobsList } from '../api/index'

// 모듈화
import mutations from './mutations';
import actions from './actions';

Vue.use(Vuex);

export const store = new Vuex.Store({
  // actions으로 api를 통해 받아온 데이터를 mutation가 state로 넘겨줌
  actions,
  mutations,
  state: {
    news: [],
    jobs: [],
    ask: [],
    user: {},
  },
  getters: {
    fetchedAsk(state) {
      return state.ask;
    }
  },
})