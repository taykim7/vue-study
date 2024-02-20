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
  // props: ["item"],
  props: {
    item: {
      type: String,
      required: true,
    },
  },
  methods: {
    handleInput(event: InputEvent) {
      console.log(event.target);
      // 타입 단언으로 null 에러표시 없애기 (주의해서 쓰기)
      const eventTarget = event.target as HTMLInputElement;
      this.$emit("input", eventTarget.value);
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
