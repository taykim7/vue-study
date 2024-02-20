<template>
  <div>
    <h1>Vue Todo with Typescript</h1>
    <todo-input :item="todoText"></todo-input>
  </div>
</template>

<script lan="ts">
import Vue from "vue";
import TodoInput from "./components/TodoInput.vue";

export default Vue.extend({
  components: { TodoInput },
  data() {
    return {
      todoText: "헬로우",
    };
  },
});
</script>
