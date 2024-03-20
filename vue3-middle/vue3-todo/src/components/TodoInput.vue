<template>
  <div>
    <input type="text" v-model="todoInput">
    <button @click="addTodo">할일추가</button>
  </div>
</template>

<script>
import { ref } from 'vue'
export default {
  setup() {
    // data
    const todoInput = ref('');
    const addTodo = () => {
      const todo = todoInput.value;
      // key value 동일하게 저장
      localStorage.setItem(todo, todo);
    }
    // methods
    return {
      todoInput, addTodo
    }
  },
}
</script>