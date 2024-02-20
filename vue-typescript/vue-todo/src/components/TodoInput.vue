<template>
  <div>
    <label for="todo-input">오늘 할 일 : </label>
    <input id="todo-input" type="text" :value="item" @input="handleInput" />
    <button @click="addTodo" type="button">add</button>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  props: ["item"],
  methods: {
    handleInput(event: any) {
      console.log(event.target.value);
      this.$emit("input", event.target.value);
      // 위에 input은 키보드 이벤트, emit의 input은 컴포넌트간 데이터 전달용;
    },
    addTodo() {
      console.log("add");
      this.$emit("add");
    },
  },
});
</script>

<style></style>
