import Vue from 'vue'
import Vuex from 'vuex'
// 스토어 속성 모듈화1
import * as getters from './getters'
import * as mutations from './mutations'

Vue.use(Vuex);

const storage = {
  fetch() {
    const arr = [];
    if (localStorage.length > 0) {
      for (let i = 0; i < localStorage.length ; i++) {
        if (localStorage.key(i) !== 'loglevel:webpack-dev-server'){
          // 배열에 push
          arr.push(JSON.parse(localStorage.getItem(localStorage.key(i))))
        }
      }
    }
    // 배열 반환
    return arr;
  },
};

export const store = new Vuex.Store({
  state: {
    todoItems: storage.fetch()
  },
  
  //getters: getters,
  //mutations: mutations

  // 축약 가능
  getters,
  mutations
  
  // ▼ 스토어 모듈화 적용 전
  // getters: {
  //   // storedTodoItems(state) {
  //   //   return state.todoItems;
  //   // }
  // },
  // mutations: {
  //   // addOneItem(state, todoItem) {
  //   //   const obj = {completed: false, item: todoItem};
  //   //   localStorage.setItem(todoItem, JSON.stringify(obj));
  //   //   state.todoItems.push(obj);
  //   // },
  //   // removeOneItem(state, payload) {
  //   //   localStorage.removeItem(payload.todoItem.item);
  //   //   state.todoItems.splice(payload.index, 1);
  //   // },
  //   // toggleOneItem(state, payload) {
  //   //   state.todoItems[payload.index].completed = !state.todoItems[payload.index].completed;
  //   //   localStorage.removeItem(payload.todoItem.item);
  //   //   localStorage.setItem(payload.todoItem.item, JSON.stringify(payload.todoItem));
  //   // },
  //   // clearAllItems(state) {
  //   //   localStorage.clear();
  //   //   state.todoItems = [];
  //   // }
  // }
});