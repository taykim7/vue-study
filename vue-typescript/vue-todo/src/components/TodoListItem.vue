<template>
  <li>
    <span>
      {{ todoItem }}
    </span>
    <!-- <button @click="$emit('delete')">삭제</button> -->
    <button @click="removeTodo">삭제</button>
  </li>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  props: {
    // props로 수신
    todoItem: String,
    index: Number,
  },
  methods: {
    removeTodo() {
      // emit으로 전송
      this.$emit("remove", this.index);
    },
  },
});
</script>
