<template>
  <div>
    <h1>Vue Todo with Typescript</h1>
    <todo-input
      :item="todoText"
      @input="updateTodoText"
      @add="addTodoItem"
    ></todo-input>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import TodoInput from "./components/TodoInput.vue";

export default Vue.extend({
  components: { TodoInput },
  data() {
    return {
      todoText: "",
    };
  },
  methods: {
    // 이벤트로 받은 데이터 타입 정의
    updateTodoText(value: string) {
      this.todoText = value;
    },
    addTodoItem() {
      const value = this.todoText;
      localStorage.setItem(value, value);
      this.initTodoText();
    },
    initTodoText() {
      this.todoText = "";
    },
  },
});
</script>
