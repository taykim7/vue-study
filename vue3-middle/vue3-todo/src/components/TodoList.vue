<template>
  <ul>
    <li v-for="(item, index) in items" :key="index">
      {{ item }}
    </li>
  </ul>
</template>

<script>
import { ref } from 'vue'
  export default {
  setup() {
      const items = ref([]);
      const fetchTodos = () => {
        for (let i = 0; i < localStorage.length; i++) {
          const todoItem = localStorage.key(i);
          items.value.push(todoItem);
        }
      }
      // 새로 갱신은 되지 않는다.
      fetchTodos();
      return { items, fetchTodos }
    }
  }
</script>