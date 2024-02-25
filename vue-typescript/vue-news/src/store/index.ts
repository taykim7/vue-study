import Vue from "vue";
import Vuex, { StoreOptions } from "vuex";
import { RootState, state } from "./state";
import { mutations } from "./mutations";
import { actions } from "./actions";
import getters from "./getters";

Vue.use(Vuex);

// export default new Vuex.Store({
//   strict: process.env.NODE_ENV !== "production",
//   state: {
//     news: [] as string[],
//     ask: [],
//     jobs: [],
//     user: {},
//     item: {},
//     list: [],
//   },
//   getters,
//   mutations,
//   actions,
// });

const store: StoreOptions<RootState> = {
  state: state,
  mutations: mutations,
  actions: actions,
};

export default new Vuex.Store(store);
