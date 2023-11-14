import Vue from 'vue';
import Vuex from 'vuex';
import { fetchNewsList, fetchAskList, fetchJobsList } from '../api/index'

Vue.use(Vuex);

export const store = new Vuex.Store({
  // actions으로 api를 통해 받아온 데이터를 mutation가 state로 넘겨줌
  actions: {
    /**
     * News api
    */
    FETCH_NEWS(context) {
      fetchNewsList()
      .then(response => {
        console.log(response.data);
        // 컨텍스트의 커밋으로 뮤테이션 호출
        context.commit('SET_NEWS', response.data);
      })
      .catch(error => {
        console.log(error)
      })
    },
    /**
     * Ask api
     */
    FETCH_ASK(context) {
      fetchAskList().then(response => {
        context.commit('SET_ASK', response.data)
      })
    },
    /**
     * Jobs api
     */
    FETCH_JOBS(context) {
      fetchJobsList().then(response => {
        context.commit('SET_JOBS', response.data)
      })
    }
  },
  mutations: {
    SET_NEWS(state, data) {
      state.news = data;
    },
    SET_ASK(state, data) {
      state.ask = data;
    },
    SET_JOBS(state, data) {
      state.jobs = data;
    }
  },
  state: {
    news: [],
    ask: [],
    jobs: []
  },
  // getters: {},
})