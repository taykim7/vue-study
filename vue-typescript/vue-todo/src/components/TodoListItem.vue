<template>
  <li>
    <span class="item" :class="todoItemClass" @click="toggleItem">
      {{ todoItem.title }}
    </span>
    <!-- <button @click="$emit('delete')">삭제</button> -->
    <button @click="removeTodo">삭제</button>
  </li>
</template>

<script lang="ts">
import Vue, { PropType } from "vue";
import { Todo } from "../App.vue";
export default Vue.extend({
  props: {
    // props로 수신
    // props 타입 정의 (PropType)
    todoItem: Object as PropType<Todo>,
    index: Number,
  },
  computed: {
    // computed의 반환 타입 꼭 넣자
    todoItemClass(): string | null {
      return this.todoItem.done ? "complete" : null;
    },
  },
  methods: {
    toggleItem() {
      this.$emit("toggle", this.todoItem, this.index);
    },
    removeTodo() {
      // emit으로 전송
      this.$emit("remove", this.index);
    },
  },
});
</script>
<style scoped>
.item {
  cursor: pointer;
}
.complete {
  text-decoration: line-through;
}
</style>
