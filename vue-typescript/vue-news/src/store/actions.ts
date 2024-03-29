import { ActionContext } from "vuex";
import { MutationTypes, Mutations } from "./mutations";
import { RootState } from "./state";
import { fetchNews } from "@/api";

enum ActinoTypes {
  FETCH_NEWS = "FETCH_NEWS",
}

type MyActionContext = {
  commit<K extends keyof Mutations>(
    key: K,
    payload?: Parameters<Mutations[K]>[1]
  ): ReturnType<Mutations[K]>;
} & Omit<ActionContext<RootState, RootState>, "commit">;

const actions = {
  async [ActinoTypes.FETCH_NEWS](context: MyActionContext, payload?: any) {
    const { data } = await fetchNews(); // actions함수 호출 시 결과인 data는 NewsItem[] 타입
    context.commit(MutationTypes.SET_NEWS, data); // 정의한 enum에 맞는 타입을 보내야함
    return data;
  },
};

type Actions = typeof actions;

export { ActinoTypes, actions, Actions };

// import {
//   fetchNews,
//   fetchAsk,
//   fetchJobs,
//   fetchUser,
//   fetchItem,
//   fetchList,
// } from "../api/index";

// export default {
//   FETCH_NEWS({ commit }) {
//     return fetchNews().then((response) => commit("SET_NEWS", response.data));
//   },
//   FETCH_ASK({ commit }) {
//     return fetchAsk().then((response) => commit("SET_ASK", response.data));
//   },
//   FETCH_JOBS({ commit }) {
//     return fetchJobs().then((response) => commit("SET_JOBS", response.data));
//   },
//   FETCH_USER({ commit }, userId) {
//     return fetchUser(userId).then((res) => commit("SET_USER", res.data));
//   },
//   FETCH_ITEM({ commit }, itemId) {
//     return fetchItem(itemId).then((res) => commit("SET_ITEM", res.data));
//   },
//   // hoc
//   FETCH_LIST({ commit }, listType) {
//     return fetchList(listType).then((res) => commit("SET_LIST", res.data));
//   },
// };
