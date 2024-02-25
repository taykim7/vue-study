import Vue from "vue";
import Vuex, { StoreOptions } from "vuex";
import { RootState, state } from "./state";
import { mutations } from "./mutations";
// import getters from "./getters.js";
// import actions from "./actions.js";

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
};

export default new Vuex.Store(store);
