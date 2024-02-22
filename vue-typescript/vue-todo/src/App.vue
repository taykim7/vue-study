<template>
  <div>
    <header>
      <h1>Vue Todo with Typescript</h1>
    </header>
    <main>
      <todo-input
        :item="todoText"
        @input="updateTodoText"
        @add="addTodoItem"
      ></todo-input>
      <div>
        <ul>
          <TodoListItem
            v-for="(todoItem, index) in todoItems"
            :key="index"
            :todoItem="todoItem"
            :index="index"
            @toggle="toggleTodoItemComplete"
            @remove="removeTodoItem"
          ></TodoListItem>
        </ul>
      </div>
    </main>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import TodoInput from "./components/TodoInput.vue";
import TodoListItem from "./components/TodoListItem.vue";

// key값 세팅
const STORAGE_KEY = "vue-todo-ts-v1";

// 스토리지 관련 함수 정의
const storage = {
  // 저장
  save(todoItems: Todo[]) {
    const parsed = JSON.stringify(todoItems);
    // key, value 로 저장
    localStorage.setItem(STORAGE_KEY, parsed);
  },
  // 가져오기
  fetch() {
    // 로컬스토리지에서 불러오기
    const todoItems = localStorage.getItem(STORAGE_KEY) || "[]";
    const result = JSON.parse(todoItems);
    return result;
  },
};

export interface Todo {
  title: string;
  done: boolean;
}

export default Vue.extend({
  components: { TodoInput, TodoListItem },
  data() {
    return {
      todoText: "",
      todoItems: [] as Todo[],
    };
  },
  methods: {
    // 이벤트로 받은 데이터 타입 정의
    updateTodoText(value: string) {
      this.todoText = value;
    },
    // 추가하기
    addTodoItem() {
      // 입력된 값 저장
      const value = this.todoText;
      const todo: Todo = {
        title: value,
        done: false,
      };
      // 배열에 추가
      this.todoItems.push(todo);
      // 배열을 스토리지에 저장
      storage.save(this.todoItems);
      // 초기화
      this.initTodoText();
    },
    // 초기화
    initTodoText() {
      this.todoText = "";
    },
    // 가져오기
    fetchTodoItems() {
      this.todoItems = storage.fetch();
    },
    // 삭제하기
    removeTodoItem(index: number) {
      console.log("remove", index);
      // 삭제하고 저장하기
      this.todoItems.splice(index, 1);
      storage.save(this.todoItems);
    },
    // 완료하기 (토글)
    toggleTodoItemComplete(item: Todo, index: number) {
      // splice를 통해 해당 index 요소 1개 제거하고 세번째 파라미터로 교환
      this.todoItems.splice(index, 1, {
        // 교환할 데이터는 Todo 타입이라 Todo 타입 요소 하나씩 넣어야 하지만
        // title: item.title, done: !item.done,
        // 스프레드 오퍼레이터를 통해 다 가져오고 변경할 것만 변경
        ...item,
        done: !item.done,
      });
      storage.save(this.todoItems);
    },
  },
  created() {
    // 데이터 가져오기
    this.fetchTodoItems();
  },
});
</script>
