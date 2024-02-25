import { NewsItem } from "@/api";
import { RootState } from "./state";

// mutation 함수 이름 관리
enum MutationTypes {
  SET_NEWS = "SET_NEWS",
}

const mutations = {
  // mutation 함수 이름이 속성 이름으로 정의. (아래 코드와 같다고 보면 됨)
  // 덕분에 enum에 추가만 해도 알아서 함수 만들어줌
  // SET_NEWS(state, news) { state.news = news; },
  [MutationTypes.SET_NEWS](state: RootState, news: NewsItem[]) {
    state.news = news;
  },
};

// 위에 정의한 내용들을 type 으로 만들기
type Mutations = typeof mutations;

// export
export { MutationTypes, mutations, Mutations };

// export default {
//   SET_NEWS(state, news) {
//     state.news = news;
//   },
//   SET_ASK(state, ask) {
//     state.ask = ask;
//   },
//   SET_JOBS(state, jobs) {
//     state.jobs = jobs;
//   },
//   SET_USER(state, user) {
//     state.user = user;
//   },
//   SET_ITEM(state, item) {
//     state.item = item;
//   },
//   SET_LIST(state, list) {
//     state.list = list;
//   },
// };
