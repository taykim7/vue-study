<template>
  <div>
    <input type="text" v-model="todoInput">
    <button @click="addTodo">할일추가</button>
  </div>
</template>

<script>
import { ref } from 'vue'
export default {
  setup(props, context) {
    // data
    const todoInput = ref('');
    const addTodo = () => {
      const todo = todoInput.value;
      // setup에서의 $emit
      context.emit('add', todo);
      clearTodo();
    }
    const clearTodo = () => todoInput.value = '';
    // methods
    return {
      todoInput,
      addTodo,
      clearTodo
    }
  },
}
</script>