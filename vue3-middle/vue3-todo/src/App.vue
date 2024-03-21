<template>
  <TodoHeader :appTitle="title"></TodoHeader>
  <TodoInput @add="addTodo"></TodoInput>
  <TodoList :todoItems="todoItems" @remove="removeTodo"></TodoList>
</template>

<script>
import { onBeforeMount } from 'vue';
import TodoHeader from './components/TodoHeader.vue'
import TodoInput from './components/TodoInput.vue'
import TodoList from './components/TodoList.vue'
import { useTodo } from './hooks/useTodo';
export default {
  components: { TodoHeader, TodoInput, TodoList },

  setup() {
    const { todoItems, addTodo, fetchTodos } = useTodo();

    // Lifecycle
    onBeforeMount(() => {
      todoItems.value = fetchTodos();
    })

    return {
      todoItems, addTodo
    }
  },
  // 모두 setup에 작성할 필요는 없다!
  methods: {
    removeTodo(item, index) {
      // setup 내부 데이터는 data()에 접근한 것 처럼 this를 활용
      this.todoItems.splice(index, 1);
      localStorage.removeItem(item);
    }
  },
  data() {
    return {
      title: '할 일'
    }
  }
}
</script>