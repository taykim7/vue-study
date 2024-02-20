<template>
  <div>
    <h1>Vue Todo with Typescript</h1>
    <todo-input :item="todoText" @input="updateTodoText"></todo-input>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import TodoInput from "./components/TodoInput.vue";

export default Vue.extend({
  components: { TodoInput },
  data() {
    return {
      todoText: "헬로우",
    };
  },
  methods: {
    updateTodoText(value: any) {
      this.todoText = value;
    },
  },
});
</script>
