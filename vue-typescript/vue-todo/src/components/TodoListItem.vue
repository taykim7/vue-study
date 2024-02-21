<template>
  <li>{{ todoItem }}</li>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  props: {
    // props로 수신
    todoItem: String,
  },
});
</script>
