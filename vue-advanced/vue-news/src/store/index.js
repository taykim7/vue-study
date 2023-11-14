import Vue from 'vue';
import Vuex from 'vuex';
import { fetchNewsList } from '../api/index'

Vue.use(Vuex);

export const store = new Vuex.Store({
  // actions으로 api를 통해 받아온 데이터를 mutation가 state로 넘겨줌
  actions: {
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
    }
  },
  mutations: {
    SET_NEWS(state, data) {
      state.news = data;
    }
  },
  state: {
    news: [],
  },
  // getters: {},
})