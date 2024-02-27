<template>
  <div>
    <label for="todo-input">오늘 할 일 : </label>
    <input id="todo-input" type="text" :value="item" @input="handleInput" />
    <button @click="addTodo" type="button">add</button>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { VueEvent } from "../types/index";

export default Vue.extend({
  // props: ["item"],
  props: {
    item: {
      type: String,
      required: true,
    },
  },
  methods: {
    // // ### 1. input되면 메서드 수행
    // handleInput(event: InputEvent) {
    //   // ### 2. 이러한 event는 바로 value에 접근이 안됨.
    //   console.log(event.target);
    //   // ### 3. 그래서 null인지 확인하거나 타입단언하여 접근
    //   // if(!event.target) return;
    //   // 타입 단언으로 null 에러표시 없애기 (주의해서 쓰기)
    //   const eventTarget = event.target as HTMLInputElement;
    //   this.$emit("input", eventTarget.value);
    //   // ### 4. 이러한 번거로운 타입단언이나 타입가드는 번거로움
    //   // 그러니 유틸 함수를 만들어서 파라미터 부분에 넣기만해도 바로 사용할 수 있는 형태로 만들어보자
    // },

    // ### 7. 만든 타입을 가져와서 사용한다. (types/index.ts)
    handleInput(event: VueEvent.Input<HTMLInputElement>) {
      console.log(event.target); // ==> 에러가 없다!
      const eventTarget = event.target as HTMLInputElement;
      this.$emit("input", eventTarget.value);
    },
    addTodo() {
      console.log("add");
      this.$emit("add");
    },
  },
});
</script>

<style></style>
