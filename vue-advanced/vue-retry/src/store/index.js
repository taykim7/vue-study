import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

// 모듈화
import mutations from './mutations';
import actions from './actions';

export const store = new Vuex.Store({
  // actions으로 api를 통해 받아온 데이터를 mutation가 state로 넘겨줌
  actions,
  mutations,
  state: {
    list: [],
  },
})